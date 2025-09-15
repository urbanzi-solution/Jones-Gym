"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { IoFilter } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function MemberSearchFilter({ setFilters }) {
  const [active, setActive] = useState(false);
  const [inactive, setInactive] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [expiryStartDate, setExpiryStartDate] = useState(null);
  const [expiryEndDate, setExpiryEndDate] = useState(null);
  const [expiryWithinStartDate, setExpiryWithinStartDate] = useState(null);
  const [expiryWithinEndDate, setExpiryWithinEndDate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [payment, setPayment] = useState("");
  const [plan, setPlan] = useState("");
  const [expiryWithin, setExpiryWithin] = useState("");
  const [plans, setPlans] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Fetch membership plans
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch('/api/fetch_plans');
        if (!response.ok) {
          throw new Error('Failed to fetch plans');
        }
        const data = await response.json();
        setPlans(data);
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };
    fetchPlans();
  }, []);

  // Initialize filters from URL query parameters
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    setInactive(params.get("inactive") === "true");
    setActive(params.get("active") === "true");
    setSearchQuery(params.get("search") || "");
    setGender(params.get("gender") || "");
    setStatus(params.get("status") || "");
    setPayment(params.get("payment") || "");
    setPlan(params.get("plan") || "");
    setExpiryWithin(params.get("expiryWithin") || "");
    const start = params.get("startDate");
    const end = params.get("endDate");
    const expiryStart = params.get("expiryStartDate");
    const expiryEnd = params.get("expiryEndDate");
    const expiryWithinStart = params.get("expiryWithinStartDate");
    const expiryWithinEnd = params.get("expiryWithinEndDate");
    if (start) setStartDate(new Date(start));
    if (end) setEndDate(new Date(end));
    if (expiryStart) setExpiryStartDate(new Date(expiryStart));
    if (expiryEnd) setExpiryEndDate(new Date(expiryEnd));
    if (expiryWithinStart) setExpiryWithinStartDate(new Date(expiryWithinStart));
    if (expiryWithinEnd) setExpiryWithinEndDate(new Date(expiryWithinEnd));
  }, [searchParams]);

  // Update parent filters whenever filter states change
  useEffect(() => {
    setFilters({
      inactive,
      searchQuery,
      gender,
      status,
      payment,
      plan,
      expiryWithin,
      startDate,
      endDate,
      expiryStartDate,
      expiryEndDate,
      expiryWithinStartDate,
      expiryWithinEndDate,
    });
  }, [inactive, searchQuery, gender, status, payment, plan, expiryWithin, startDate, endDate, expiryStartDate, expiryEndDate, expiryWithinStartDate, expiryWithinEndDate, setFilters]);

  const updateQueryParams = (newFilters) => {
    const params = new URLSearchParams();
    if (newFilters.active) params.set("active", "true");
    if (newFilters.inactive) params.set("inactive", "true");
    if (newFilters.searchQuery) params.set("search", newFilters.searchQuery);
    if (newFilters.gender) params.set("gender", newFilters.gender);
    if (newFilters.status) params.set("status", newFilters.status);
    if (newFilters.payment) params.set("payment", newFilters.payment);
    if (newFilters.plan) params.set("plan", newFilters.plan);
    if (newFilters.expiryWithin) params.set("expiryWithin", newFilters.expiryWithin);
    if (newFilters.startDate) params.set("startDate", newFilters.startDate.toISOString());
    if (newFilters.endDate) params.set("endDate", newFilters.endDate.toISOString());
    if (newFilters.expiryStartDate) params.set("expiryStartDate", newFilters.expiryStartDate.toISOString());
    if (newFilters.expiryEndDate) params.set("expiryEndDate", newFilters.expiryEndDate.toISOString());
    if (newFilters.expiryWithinStartDate) params.set("expiryWithinStartDate", newFilters.expiryWithinStartDate.toISOString());
    if (newFilters.expiryWithinEndDate) params.set("expiryWithinEndDate", newFilters.expiryWithinEndDate.toISOString());
    router.push(`/members?${params.toString()}`);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    updateQueryParams({ active, inactive, searchQuery, gender, status, payment, plan, expiryWithin, startDate: start, endDate: end, expiryStartDate, expiryEndDate, expiryWithinStartDate, expiryWithinEndDate });
  };

  const handleExpiryDateChange = (dates) => {
    const [start, end] = dates;
    setExpiryStartDate(start);
    setExpiryEndDate(end);
    updateQueryParams({ active, inactive, searchQuery, gender, status, payment, plan, expiryWithin, startDate, endDate, expiryStartDate: start, expiryEndDate: end, expiryWithinStartDate, expiryWithinEndDate });
  };

  const handleExpiryWithinDateChange = (dates) => {
    const [start, end] = dates;
    setExpiryWithinStartDate(start);
    setExpiryWithinEndDate(end);
    updateQueryParams({ active, inactive, searchQuery, gender, status, payment, plan, expiryWithin, startDate, endDate, expiryStartDate, expiryEndDate, expiryWithinStartDate: start, expiryWithinEndDate: end });
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    updateQueryParams({ active, inactive, searchQuery: query, gender, status, payment, plan, expiryWithin, startDate, endDate, expiryStartDate, expiryEndDate, expiryWithinStartDate, expiryWithinEndDate });
  };

  const handleGenderClick = (value) => {
    const newGender = gender === value ? "" : value;
    setGender(newGender);
    updateQueryParams({ active, inactive, searchQuery, gender: newGender, status, payment, plan, expiryWithin, startDate, endDate, expiryStartDate, expiryEndDate, expiryWithinStartDate, expiryWithinEndDate });
  };

  const handleStatusClick = (value) => {
    const newStatus = status === value ? "" : value;
    setStatus(newStatus);
    updateQueryParams({ active, inactive, searchQuery, gender, status: newStatus, payment, plan, expiryWithin, startDate, endDate, expiryStartDate, expiryEndDate, expiryWithinStartDate, expiryWithinEndDate });
  };

  const handlePaymentClick = (value) => {
    const newPayment = payment === value ? "" : value;
    setPayment(newPayment);
    updateQueryParams({ active, inactive, searchQuery, gender, status, payment: newPayment, plan, expiryWithin, startDate, endDate, expiryStartDate, expiryEndDate, expiryWithinStartDate, expiryWithinEndDate });
  };

  const handlePlanClick = (value) => {
    const newPlan = plan === value ? "" : value;
    setPlan(newPlan);
    updateQueryParams({ active, inactive, searchQuery, gender, status, payment, plan: newPlan, expiryWithin, startDate, endDate, expiryStartDate, expiryEndDate, expiryWithinStartDate, expiryWithinEndDate });
  };

  const handleExpiryWithinClick = (value) => {
    const newExpiryWithin = expiryWithin === value ? "" : value;
    setExpiryWithin(newExpiryWithin);
    updateQueryParams({ active, inactive, searchQuery, gender, status, payment, plan, expiryWithin: newExpiryWithin, startDate, endDate, expiryStartDate, expiryEndDate, expiryWithinStartDate, expiryWithinEndDate });
  };

  const handleReset = () => {
    setActive(false);
    setInactive(false);
    setSearchQuery("");
    setGender("");
    setStatus("");
    setPayment("");
    setPlan("");
    setExpiryWithin("");
    setStartDate(null);
    setEndDate(null);
    setExpiryStartDate(null);
    setExpiryEndDate(null);
    setExpiryWithinStartDate(null);
    setExpiryWithinEndDate(null);
    router.push("/members");
    setFilters({
      inactive: false,
      searchQuery: "",
      gender: "",
      status: "",
      payment: "",
      plan: "",
      expiryWithin: "",
      startDate: null,
      endDate: null,
      expiryStartDate: null,
      expiryEndDate: null,
      expiryWithinStartDate: null,
      expiryWithinEndDate: null,
    });
  };

  return (
    <div className="p-4 md:p-6 lg:p-10">
      {/* Search Input */}
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FiSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search Member"
          value={searchQuery}
          onChange={handleSearchChange}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFDD4A] focus:border-transparent text-gray-900 placeholder-gray-400"
        />
      </div>

      {/* Filter Controls */}
      <div className="mt-4 relative">
        <div className="flex justify-between items-center md:text-xl p-3 rounded-lg">
          <span className="flex gap-2 md:gap-5">

          </span>
          <button
            onClick={toggleFilters}
            className="flex items-center gap-1 hover:text-[#FFDD4A] transition-colors"
          >
            <IoFilter className="text-[#FFDD4A]" />
            Filters
          </button>
        </div>

        {/* Expanded Filter Panel */}
        {showFilters && (
          <div className="absolute top-full left-0 right-0 z-51 bg-[#0a0a0a] rounded-xl shadow-lg mt-2 p-4 text-center border border-[#6e6e6e]">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h2 className="text-lg font-medium">Filter Members</h2>
              <GrClose
                onClick={toggleFilters}
                className="cursor-pointer hover:scale-90 transition-transform text-gray-400 hover:text-white"
                size={18}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm mb-2">Joining Date The range</h3>
                <DatePicker
                  selectsRange
                  startDate={startDate}
                  endDate={endDate}
                  onChange={handleDateChange}
                  isClearable
                  placeholderText="Select date range"
                  className="w-full p-2 rounded-lg bg-[#232024] border border-[#3E3A3D] text-sm text-center"
                  dateFormat="MMM yyyy"
                  showMonthYearPicker
                />
              </div>
              <div>
                <h3 className="text-sm mb-2">Gender</h3>
                <div className="grid grid-cols-3 gap-2">
                  {["Male", "Female", "Other"].map((g) => (
                    <button
                      key={g}
                      onClick={() => handleGenderClick(g)}
                      className={`px-3 py-2 rounded-xl text-sm ${
                        gender === g
                          ? "bg-black border border-[#FFDD4A]"
                          : "bg-[#232024] hover:border hover:border-[#FFDD4A]"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm mb-2">Status</h3>
                <div className="grid grid-cols-3 gap-2">
                  {["Active", "Inactive", "Blacklisted"].map((s) => (
                    <button
                      key={s}
                      onClick={() => handleStatusClick(s)}
                      className={`px-3 py-2 rounded-xl text-sm ${
                        status === s
                          ? "bg-black border border-[#FFDD4A]"
                          : "bg-[#232024] hover:border hover:border-[#FFDD4A]"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm mb-2">Payment</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Fully paid", "With Balance"].map((p) => (
                    <button
                      key={p}
                      onClick={() => handlePaymentClick(p)}
                      className={`px-3 py-2 rounded-xl text-sm ${
                        payment === p
                          ? "bg-black border border-[#FFDD4A]"
                          : "bg-[#232024] hover:border hover:border-[#FFDD4A]"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm mb-2">Plans</h3>
                <div className="grid grid-cols-3 gap-2">
                  {plans.length > 0 ? (
                    plans
                      .filter((p) => p.status.toLowerCase() === "active")
                      .map((p) => (
                        <button
                          key={p.name}
                          onClick={() => handlePlanClick(p.name)}
                          className={`px-3 py-2 rounded-xl text-sm ${
                            plan === p.name
                              ? "bg-black border border-[#FFDD4A]"
                              : "bg-[#232024] hover:border hover:border-[#FFDD4A]"
                          }`}
                        >
                          {p.name}
                        </button>
                      ))
                  ) : (
                    <p className="text-gray-500 text-sm">Loading plans...</p>
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-sm mb-2">Expiry Within</h3>
                <div className="grid grid-cols-3 gap-2">
                  {["1 day", "2 days", "3 days"].map((e) => (
                    <button
                      key={e}
                      onClick={() => handleExpiryWithinClick(e)}
                      className={`px-3 py-2 rounded-xl text-sm ${
                        expiryWithin === e
                          ? "bg-black border border-[#FFDD4A]"
                          : "bg-[#232024] hover:border hover:border-[#FFDD4A]"
                      }`}
                    >
                      {e}
                    </button>
                  ))}
                </div>
                <h3 className="text-sm mb-2 mt-4">Expiry Within The range</h3>
                <div className="grid grid-row-3 gap-2">
                  <DatePicker
                    selectsRange
                    startDate={expiryWithinStartDate}
                    endDate={expiryWithinEndDate}
                    onChange={handleExpiryWithinDateChange}
                    isClearable
                    placeholderText="Select expiry within date range"
                    className="w-full p-2 rounded-lg bg-[#232024] border border-[#3E3A3D] text-sm text-center"
                    dateFormat="dd MMM yyyy"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-[#2B2E32]">
              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-800"
              >
                Reset
              </button>
              <button
                onClick={toggleFilters}
                className="px-4 py-2 rounded-lg bg-[#FFDD4A] text-black hover:bg-[#FFD700]"
              >
                Apply Filters
              </button>
            </div>
            <div className="h-10"></div>
          </div>
        )}
      </div>
    </div>
  );
}