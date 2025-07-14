(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/Member_searchFilter.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MemberSearchFilter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/gr/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-datepicker/dist/index.es.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function MemberSearchFilter({ setFilters }) {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inactive, setInactive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [gender, setGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [payment, setPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [plan, setPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [expiryWithin, setExpiryWithin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [plans, setPlans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // Fetch membership plans
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemberSearchFilter.useEffect": ()=>{
            const fetchPlans = {
                "MemberSearchFilter.useEffect.fetchPlans": async ()=>{
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
                }
            }["MemberSearchFilter.useEffect.fetchPlans"];
            fetchPlans();
        }
    }["MemberSearchFilter.useEffect"], []);
    // Initialize filters from URL query parameters
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemberSearchFilter.useEffect": ()=>{
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
            if (start) setStartDate(new Date(start));
            if (end) setEndDate(new Date(end));
        }
    }["MemberSearchFilter.useEffect"], [
        searchParams
    ]);
    // Update parent filters whenever filter states change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemberSearchFilter.useEffect": ()=>{
            setFilters({
                inactive,
                searchQuery,
                gender,
                status,
                payment,
                plan,
                expiryWithin,
                startDate,
                endDate
            });
        }
    }["MemberSearchFilter.useEffect"], [
        inactive,
        searchQuery,
        gender,
        status,
        payment,
        plan,
        expiryWithin,
        startDate,
        endDate,
        setFilters
    ]);
    const updateQueryParams = (newFilters)=>{
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
        router.push(`/members?${params.toString()}`);
    };
    const handleActiveClick = ()=>{
        const newActive = !active;
        setActive(newActive);
        setInactive(false);
        updateQueryParams({
            active: newActive,
            inactive: false,
            searchQuery,
            gender,
            status,
            payment,
            plan,
            expiryWithin,
            startDate,
            endDate
        });
    };
    const handleInactiveClick = ()=>{
        const newInactive = !inactive;
        setInactive(newInactive);
        setActive(false);
        updateQueryParams({
            active: false,
            inactive: newInactive,
            searchQuery,
            gender,
            status,
            payment,
            plan,
            expiryWithin,
            startDate,
            endDate
        });
    };
    const toggleFilters = ()=>{
        setShowFilters(!showFilters);
    };
    const handleDateChange = (dates)=>{
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        updateQueryParams({
            active,
            inactive,
            searchQuery,
            gender,
            status,
            payment,
            plan,
            expiryWithin,
            startDate: start,
            endDate: end
        });
    };
    const handleSearchChange = (e)=>{
        const query = e.target.value;
        setSearchQuery(query);
        updateQueryParams({
            active,
            inactive,
            searchQuery: query,
            gender,
            status,
            payment,
            plan,
            expiryWithin,
            startDate,
            endDate
        });
    };
    const handleGenderClick = (value)=>{
        const newGender = gender === value ? "" : value;
        setGender(newGender);
        updateQueryParams({
            active,
            inactive,
            searchQuery,
            gender: newGender,
            status,
            payment,
            plan,
            expiryWithin,
            startDate,
            endDate
        });
    };
    const handleStatusClick = (value)=>{
        const newStatus = status === value ? "" : value;
        setStatus(newStatus);
        updateQueryParams({
            active,
            inactive,
            searchQuery,
            gender,
            status: newStatus,
            payment,
            plan,
            expiryWithin,
            startDate,
            endDate
        });
    };
    const handlePaymentClick = (value)=>{
        const newPayment = payment === value ? "" : value;
        setPayment(newPayment);
        updateQueryParams({
            active,
            inactive,
            searchQuery,
            gender,
            status,
            payment: newPayment,
            plan,
            expiryWithin,
            startDate,
            endDate
        });
    };
    const handlePlanClick = (value)=>{
        const newPlan = plan === value ? "" : value;
        setPlan(newPlan);
        updateQueryParams({
            active,
            inactive,
            searchQuery,
            gender,
            status,
            payment,
            plan: newPlan,
            expiryWithin,
            startDate,
            endDate
        });
    };
    const handleExpiryWithinClick = (value)=>{
        const newExpiryWithin = expiryWithin === value ? "" : value;
        setExpiryWithin(newExpiryWithin);
        updateQueryParams({
            active,
            inactive,
            searchQuery,
            gender,
            status,
            payment,
            plan,
            expiryWithin: newExpiryWithin,
            startDate,
            endDate
        });
    };
    const handleReset = ()=>{
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
            endDate: null
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 md:p-6 lg:p-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-2xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSearch"], {
                            className: "h-5 w-5 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Member_searchFilter.jsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Member_searchFilter.jsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search Member",
                        value: searchQuery,
                        onChange: handleSearchChange,
                        className: "block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFDD4A] focus:border-transparent text-gray-900 placeholder-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Member_searchFilter.jsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Member_searchFilter.jsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center md:text-xl p-3 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex gap-2 md:gap-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Member_searchFilter.jsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleFilters,
                                className: "flex items-center gap-1 hover:text-[#FFDD4A] transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoFilter"], {
                                        className: "text-[#FFDD4A]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Member_searchFilter.jsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, this),
                                    "Filters"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Member_searchFilter.jsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Member_searchFilter.jsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    showFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-full left-0 right-0 z-51 bg-[#0a0a0a] rounded-xl shadow-lg mt-2 p-4 text-center border border-[#6e6e6e]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-4 border-b pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-medium",
                                        children: "Filter Members"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Member_searchFilter.jsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrClose"], {
                                        onClick: toggleFilters,
                                        className: "cursor-pointer hover:scale-90 transition-transform text-gray-400 hover:text-white",
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Member_searchFilter.jsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Member_searchFilter.jsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm mb-2",
                                                children: "Joining Date The range"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Member_searchFilter.jsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                selectsRange: true,
                                                startDate: startDate,
                                                endDate: endDate,
                                                onChange: handleDateChange,
                                                isClearable: true,
                                                placeholderText: "Select date range",
                                                className: "w-full p-2 rounded-lg bg-[#232024] border border-[#3E3A3D] text-sm text-center",
                                                dateFormat: "MMM yyyy",
                                                showMonthYearPicker: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Member_searchFilter.jsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Member_searchFilter.jsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm mb-2",
                                                children: "Gender"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Member_searchFilter.jsx",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-3 gap-2",
                                                children: [
                                                    "Male",
                                                    "Female",
                                                    "Other"
                                                ].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleGenderClick(g),
                                                        className: `px-3 py-2 rounded-xl text-sm ${gender === g ? "bg-black border border-[#FFDD4A]" : "bg-[#232024] hover:border hover:border-[#FFDD4A]"}`,
                                                        children: g
                                                    }, g, false, {
                                                        fileName: "[project]/src/components/Member_searchFilter.jsx",
                                                        lineNumber: 257,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Member_searchFilter.jsx",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Member_searchFilter.jsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm mb-2",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Member_searchFilter.jsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-3 gap-2",
                                                children: [
                                                    "Active",
                                                    "Inactive",
                                                    "Blacklisted"
                                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleStatusClick(s),
                                                        className: `px-3 py-2 rounded-xl text-sm ${status === s ? "bg-black border border-[#FFDD4A]" : "bg-[#232024] hover:border hover:border-[#FFDD4A]"}`,
                                                        children: s
                                                    }, s, false, {
                                                        fileName: "[project]/src/components/Member_searchFilter.jsx",
                                                        lineNumber: 275,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Member_searchFilter.jsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Member_searchFilter.jsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm mb-2",
                                                children: "Payment"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Member_searchFilter.jsx",
                                                lineNumber: 290,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2",
                                                children: [
                                                    "Fully paid",
                                                    "With Balance"
                                                ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handlePaymentClick(p),
                                                        className: `px-3 py-2 rounded-xl text-sm ${payment === p ? "bg-black border border-[#FFDD4A]" : "bg-[#232024] hover:border hover:border-[#FFDD4A]"}`,
                                                        children: p
                                                    }, p, false, {
                                                        fileName: "[project]/src/components/Member_searchFilter.jsx",
                                                        lineNumber: 293,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Member_searchFilter.jsx",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Member_searchFilter.jsx",
                                        lineNumber: 289,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm mb-2",
                                                children: "Plans"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Member_searchFilter.jsx",
                                                lineNumber: 308,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-3 gap-2",
                                                children: plans.length > 0 ? plans.filter((p)=>p.status.toLowerCase() === "active").map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handlePlanClick(p.name),
                                                        className: `px-3 py-2 rounded-xl text-sm ${plan === p.name ? "bg-black border border-[#FFDD4A]" : "bg-[#232024] hover:border hover:border-[#FFDD4A]"}`,
                                                        children: p.name
                                                    }, p.name, false, {
                                                        fileName: "[project]/src/components/Member_searchFilter.jsx",
                                                        lineNumber: 314,
                                                        columnNumber: 25
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 text-sm",
                                                    children: "Loading plans..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Member_searchFilter.jsx",
                                                    lineNumber: 327,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Member_searchFilter.jsx",
                                                lineNumber: 309,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Member_searchFilter.jsx",
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm mb-2",
                                                children: "Expiry Within"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Member_searchFilter.jsx",
                                                lineNumber: 332,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-3 gap-2",
                                                children: [
                                                    "1 day",
                                                    "2 days",
                                                    "3 days"
                                                ].map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleExpiryWithinClick(e),
                                                        className: `px-3 py-2 rounded-xl text-sm ${expiryWithin === e ? "bg-black border border-[#FFDD4A]" : "bg-[#232024] hover:border hover:border-[#FFDD4A]"}`,
                                                        children: e
                                                    }, e, false, {
                                                        fileName: "[project]/src/components/Member_searchFilter.jsx",
                                                        lineNumber: 335,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Member_searchFilter.jsx",
                                                lineNumber: 333,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Member_searchFilter.jsx",
                                        lineNumber: 331,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Member_searchFilter.jsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-3 mt-4 pt-4 border-t border-[#2B2E32]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleReset,
                                        className: "px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-800",
                                        children: "Reset"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Member_searchFilter.jsx",
                                        lineNumber: 352,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleFilters,
                                        className: "px-4 py-2 rounded-lg bg-[#FFDD4A] text-black hover:bg-[#FFD700]",
                                        children: "Apply Filters"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Member_searchFilter.jsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Member_searchFilter.jsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Member_searchFilter.jsx",
                                lineNumber: 365,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Member_searchFilter.jsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Member_searchFilter.jsx",
                lineNumber: 193,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Member_searchFilter.jsx",
        lineNumber: 177,
        columnNumber: 5
    }, this);
}
_s(MemberSearchFilter, "P3X729Pyul7LFofBW5MxNY98b0E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = MemberSearchFilter;
var _c;
__turbopack_context__.k.register(_c, "MemberSearchFilter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Memberlist_boxes.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Memberlist_boxes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Memberlist_boxes({ members, filters }) {
    _s();
    const [membershipPlans, setMembershipPlans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [remarkData, setRemarkData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const currentDate = new Date();
    const currentDateOnly = currentDate.toISOString().split('T')[0]; // e.g., '2025-07-09'
    console.log(members);
    const getDateOnly = (date)=>{
        if (!date) return null;
        try {
            const parsedDate = new Date(date);
            if (isNaN(parsedDate)) return null;
            return parsedDate.toISOString().split('T')[0];
        } catch (error) {
            console.error(`Error parsing date ${date}:`, error);
            return null;
        }
    };
    // Fetch membership plans data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Memberlist_boxes.useEffect": ()=>{
            const fetchMembershipPlans = {
                "Memberlist_boxes.useEffect.fetchMembershipPlans": async ()=>{
                    try {
                        const response = await fetch('/api/fetch_membership_plans');
                        if (!response.ok) {
                            throw new Error('Failed to fetch membership plans');
                        }
                        const data = await response.json();
                        setMembershipPlans(data.data);
                    } catch (error) {
                        console.error('Error fetching membership plans:', error);
                    }
                }
            }["Memberlist_boxes.useEffect.fetchMembershipPlans"];
            fetchMembershipPlans();
        }
    }["Memberlist_boxes.useEffect"], []);
    // Fetch remark and blacklist data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Memberlist_boxes.useEffect": ()=>{
            const fetchRemarkBlacklist = {
                "Memberlist_boxes.useEffect.fetchRemarkBlacklist": async ()=>{
                    try {
                        const response = await fetch('/api/fetch_remark_blcklist');
                        if (!response.ok) {
                            throw new Error('Failed to fetch remark and blacklist data');
                        }
                        const data = await response.json();
                        // Create a lookup object for remarks and blacklist status
                        const remarkLookup = {};
                        data.forEach({
                            "Memberlist_boxes.useEffect.fetchRemarkBlacklist": (item)=>{
                                remarkLookup[item.userId] = {
                                    remark: item.remark || 'No Remarks',
                                    blacklistStatus: item.blacklistDescription ? 'Black-listed' : 'Not Black-listed'
                                };
                            }
                        }["Memberlist_boxes.useEffect.fetchRemarkBlacklist"]);
                        setRemarkData(remarkLookup);
                    } catch (error) {
                        console.error('Error fetching remark and blacklist data:', error);
                    }
                }
            }["Memberlist_boxes.useEffect.fetchRemarkBlacklist"];
            fetchRemarkBlacklist();
        }
    }["Memberlist_boxes.useEffect"], []);
    // Check if any member has an active membership plan
    const hasActiveMember = members.some((member)=>{
        const memberPlan = membershipPlans.find((plan)=>plan.user_id === member.user_id);
        const expiryDateOnly = memberPlan ? getDateOnly(memberPlan.exp_date) : null;
        return expiryDateOnly && expiryDateOnly >= currentDateOnly;
    });
    // Check if filters are empty or unset
    const isFiltersEmpty = !filters || Object.keys(filters).every((key)=>filters[key] === null || filters[key] === undefined || filters[key] === '' || typeof filters[key] === 'boolean' && !filters[key]);
    const filteredMembers = isFiltersEmpty ? members : members.filter((member)=>{
        const memberPlan = membershipPlans.find((plan)=>plan.user_id === member.user_id);
        const expiryDateOnly = memberPlan ? getDateOnly(memberPlan.exp_date) : null;
        const joiningDate = member.joining_date ? new Date(member.joining_date) : null;
        // Active/Inactive filter
        let passesActiveInactive = true;
        if (filters.active && !filters.inactive) {
            passesActiveInactive = expiryDateOnly && expiryDateOnly >= currentDateOnly;
        } else if (filters.inactive && !filters.active) {
            passesActiveInactive = !expiryDateOnly || expiryDateOnly < currentDateOnly;
        }
        // Status filter
        if (filters.status) {
            const filterStatus = filters.status.toLowerCase();
            if (filterStatus === "active") {
                // If status is "Active", only proceed if there is at least one active member
                if (!hasActiveMember) {
                    return false;
                }
            // Allow both active and inactive members to pass if hasActiveMember is true
            } else if (filterStatus === "inactive") {
                const isInactiveByExpiry = !expiryDateOnly || expiryDateOnly < currentDateOnly;
                if (!isInactiveByExpiry) {
                    return false;
                }
            } else if (filterStatus === "blacklisted") {
                if (member.status?.toLowerCase() !== "blacklisted") {
                    return false;
                }
            } else {
                if (member.status?.toLowerCase() !== filterStatus) {
                    return false;
                }
            }
        }
        // Joining Date Range filter
        if (filters.startDate && filters.endDate && joiningDate) {
            const joiningDateOnly = getDateOnly(joiningDate);
            const startDateOnly = getDateOnly(filters.startDate);
            const endDateOnly = getDateOnly(filters.endDate);
            if (joiningDateOnly < startDateOnly || joiningDateOnly > endDateOnly) {
                return false;
            }
        }
        // Gender filter
        if (filters.gender && member.gender?.toLowerCase() !== filters.gender.toLowerCase()) {
            return false;
        }
        // Search query filter
        if (filters.searchQuery) {
            const query = filters.searchQuery.toLowerCase();
            if (!member.name?.toLowerCase().includes(query) && !member.user_id?.toLowerCase().includes(query)) {
                return false;
            }
        }
        // Payment filter
        if (filters.payment && memberPlan) {
            const balance = memberPlan.balance || 0;
            if (filters.payment === "Fully paid" && balance > 0 || filters.payment === "With Balance" && balance === 0) {
                return false;
            }
        }
        // Plan filter
        if (filters.plan && memberPlan?.plan_name?.toLowerCase() !== filters.plan.toLowerCase()) {
            return false;
        }
        // Expiry Within filter
        if (filters.expiryWithin && expiryDateOnly) {
            const expiryDateObj = new Date(expiryDateOnly);
            const daysUntilExpiry = Math.floor((expiryDateObj - new Date(currentDateOnly)) / (1000 * 60 * 60 * 24));
            const days = parseInt(filters.expiryWithin) || 0;
            if (daysUntilExpiry !== days) {
                return false;
            }
        }
        return passesActiveInactive;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4",
        children: filteredMembers.length > 0 ? filteredMembers.map((member, index)=>{
            const memberPlan = membershipPlans.find((plan)=>plan.user_id === member.user_id);
            const expiryDateOnly = memberPlan ? getDateOnly(memberPlan.exp_date) : null;
            const daysUntilExpiry = expiryDateOnly ? Math.max(0, Math.floor((new Date(expiryDateOnly) - new Date(currentDateOnly)) / (1000 * 60 * 60 * 24))) : 0;
            const isExpired = expiryDateOnly && expiryDateOnly < currentDateOnly;
            const memberRemark = remarkData[member.user_id]?.remark || 'No Remarks';
            const memberBlacklistStatus = remarkData[member.user_id]?.blacklistStatus || 'Not Black-listed';
            // Check if the member should be displayed based on filter status and plan validity
            const hasValidPlan = isFiltersEmpty || membershipPlans.some((plan)=>{
                if (plan.user_id !== member.user_id) return false;
                const planExpiryDateOnly = getDateOnly(plan.exp_date) || "01-01-2000";
                const isPlanExpired = planExpiryDateOnly < currentDateOnly;
                return filters.status?.toLowerCase() === "active" && !isPlanExpired || filters.status?.toLowerCase() === "inactive" && isPlanExpired || !filters.status;
            });
            // Only render the member box if they have a valid plan matching the filter
            if (!hasValidPlan) return null;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "flex justify-between items-center p-4 mb-4 border rounded-lg hover:bg-[#2B2E32]",
                href: `/member-profile?member_id=${member.user_id || 'unknown'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 items-center sm:gap-5 lg:gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                loading: "lazy",
                                className: "w-16 h-16 sm:h-22 sm:w-22 lg:w-40 lg:h-40 object-cover border-2 rounded-full",
                                src: member.user_id ? `/images/user_pic/${member.user_id}.png` : "/images/user1.jpg",
                                alt: member.name || "Member",
                                onError: (e)=>{
                                    e.target.src = "/images/user1.jpg";
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Memberlist_boxes.jsx",
                                lineNumber: 219,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex flex-col gap-1 text-sm sm:text-xl lg:text-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold",
                                        children: member.name || "Member name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Memberlist_boxes.jsx",
                                        lineNumber: 230,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: member.user_id || "member_id"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Memberlist_boxes.jsx",
                                        lineNumber: 231,
                                        columnNumber: 19
                                    }, this),
                                    memberRemark !== 'No Remarks' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-yellow-600",
                                        children: [
                                            "Note: ",
                                            memberRemark
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Memberlist_boxes.jsx",
                                        lineNumber: 233,
                                        columnNumber: 21
                                    }, this),
                                    memberBlacklistStatus === 'Black-listed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-600",
                                        children: [
                                            "Blacklist Status: ",
                                            memberBlacklistStatus
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Memberlist_boxes.jsx",
                                        lineNumber: 238,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Memberlist_boxes.jsx",
                                lineNumber: 229,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Memberlist_boxes.jsx",
                        lineNumber: 218,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex flex-col gap-2 items-end justify-center text-[10px] sm:text-lg lg:text-xl",
                        children: membershipPlans.filter((plan)=>plan.user_id === member.user_id).map((plan, index)=>{
                            const planExpiryDateOnly = getDateOnly(plan.exp_date) || "01-01-2000";
                            const isPlanExpired = planExpiryDateOnly < currentDateOnly;
                            // Calculate days difference between expiry date and today
                            const expiryDate = new Date(planExpiryDateOnly);
                            const currentDate = new Date(currentDateOnly);
                            const daysDifference = Math.floor((currentDate - expiryDate) / (1000 * 60 * 60 * 24));
                            // Determine if the plan should be displayed based on filter status and expiry date
                            const shouldDisplay = (daysDifference <= 60 || !isPlanExpired) && (isFiltersEmpty || filters.status?.toLowerCase() === "active" && !isPlanExpired || filters.status?.toLowerCase() === "inactive" && isPlanExpired || !filters.status);
                            return shouldDisplay ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `px-2 py-1 rounded-full border border-white text-center ${isPlanExpired ? "bg-red-600" : "bg-green-600"}`,
                                children: [
                                    plan.plan_name || "Basic Gym",
                                    " (",
                                    planExpiryDateOnly,
                                    ")"
                                ]
                            }, `${plan.user_id}-${plan.plan_name}-${index}`, true, {
                                fileName: "[project]/src/components/Memberlist_boxes.jsx",
                                lineNumber: 263,
                                columnNumber: 23
                            }, this) : null;
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/Memberlist_boxes.jsx",
                        lineNumber: 244,
                        columnNumber: 15
                    }, this)
                ]
            }, member.user_id || `member-${index}`, true, {
                fileName: "[project]/src/components/Memberlist_boxes.jsx",
                lineNumber: 213,
                columnNumber: 13
            }, this);
        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-gray-500",
            children: "No members found."
        }, void 0, false, {
            fileName: "[project]/src/components/Memberlist_boxes.jsx",
            lineNumber: 278,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Memberlist_boxes.jsx",
        lineNumber: 177,
        columnNumber: 5
    }, this);
}
_s(Memberlist_boxes, "f3cK7136POTytdEKj5ZX0hbBVdI=");
_c = Memberlist_boxes;
var _c;
__turbopack_context__.k.register(_c, "Memberlist_boxes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Inpage_header.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Inpage_header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Inpage_header({ title, onExport }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex text-2xl md:text-4xl p-4 md:p-6 lg:p-10 justify-between items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#",
                onClick: (e)=>{
                    e.preventDefault();
                    router.back();
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuUndo2"], {
                    className: "text-[#FFDD4A]"
                }, void 0, false, {
                    fileName: "[project]/src/components/Inpage_header.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Inpage_header.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-center w-full font-bold",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/Inpage_header.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#",
                onClick: (e)=>{
                    e.preventDefault();
                    onExport();
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiExport"], {
                    className: "text-[#FFDD4A]"
                }, void 0, false, {
                    fileName: "[project]/src/components/Inpage_header.jsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Inpage_header.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Inpage_header.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(Inpage_header, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Inpage_header;
var _c;
__turbopack_context__.k.register(_c, "Inpage_header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/MembersClient.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MembersClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Member_searchFilter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Member_searchFilter.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Memberlist_boxes$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Memberlist_boxes.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inpage_header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Inpage_header.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function MembersClient({ members }) {
    _s();
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        inactive: false,
        searchQuery: "",
        gender: "",
        status: "",
        payment: "",
        plan: "",
        expiryWithin: "",
        startDate: null,
        endDate: null
    });
    const exportToExcel = async ()=>{
        // Prepare data for Excel
        const data = members.map((member)=>({
                UserID: member.user_id || "N/A",
                Name: member.name || "N/A",
                Gender: member.gender || "N/A",
                Date_of_birth: member.date_of_birth ? new Date(member.date_of_birth).toISOString().split('T')[0] : "N/A",
                Location: member.location || "N/A",
                Phone_No: member.phone_no || "N/A",
                Whatsapp_no: member.whatsapp_no || "N/A",
                Joining_Date: member.joining_date ? new Date(member.joining_date).toISOString().split('T')[0] : "N/A"
            }));
        // Create worksheet and workbook
        const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(data);
        const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(workbook, worksheet, "Members");
        // Set column widths
        worksheet['!cols'] = [
            {
                wch: 15
            },
            {
                wch: 20
            },
            {
                wch: 10
            },
            {
                wch: 15
            },
            {
                wch: 15
            },
            {
                wch: 15
            },
            {
                wch: 15
            },
            {
                wch: 15
            }
        ];
        // Generate and download Excel file
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"])(workbook, "Members_List.xlsx");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inpage_header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Members List",
                onExport: exportToExcel
            }, void 0, false, {
                fileName: "[project]/src/components/MembersClient.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Member_searchFilter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                setFilters: setFilters
            }, void 0, false, {
                fileName: "[project]/src/components/MembersClient.jsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Memberlist_boxes$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                members: members,
                filters: filters,
                className: "z-0"
            }, void 0, false, {
                fileName: "[project]/src/components/MembersClient.jsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(MembersClient, "oRup7X3eOuHJ9oU6SRmJhNvr0FA=");
_c = MembersClient;
var _c;
__turbopack_context__.k.register(_c, "MembersClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Add_Section.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Add_member)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
;
function Add_member({ value, Link }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: Link,
            className: "text-center w-full flex gap-1 items-center justify-center bg-[#FFDD4A] text-black p-4 md:px-6 md:py-4 rounded-full md:text-2xl mx-auto my-4 md:mb-8 lg:mb-10 md:w-1/2",
            children: [
                "Add ",
                value,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlusCircle"], {
                    className: "size-6"
                }, void 0, false, {
                    fileName: "[project]/src/components/Add_Section.jsx",
                    lineNumber: 12,
                    columnNumber: 213
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Add_Section.jsx",
            lineNumber: 12,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Add_Section.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Add_member;
var _c;
__turbopack_context__.k.register(_c, "Add_member");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/View_Section.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>View_section)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
;
function View_section({ value, Link }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: Link,
            className: "text-center w-full flex gap-1 items-center justify-center bg-blue-400 text-black p-4 md:px-6 md:py-4 rounded-full md:text-2xl mx-auto my-4 md:mb-8 lg:mb-10 md:w-1/2",
            children: [
                "View ",
                value,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEye"], {
                    className: "size-6"
                }, void 0, false, {
                    fileName: "[project]/src/components/View_Section.jsx",
                    lineNumber: 13,
                    columnNumber: 213
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/View_Section.jsx",
            lineNumber: 13,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/View_Section.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = View_section;
var _c;
__turbopack_context__.k.register(_c, "View_section");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Dashboard_greeting.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Dashboardgreeting)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/gr/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Add_Section$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Add_Section.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$View_Section$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/View_Section.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Dashboardgreeting() {
    _s();
    const [showOptions, setShowOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleOptions = ()=>{
        setShowOptions(!showOptions);
        console.log("Toggle options clicked");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center justify-between px-5 my-5 sm:px-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl sm:text-4xl font-semibold",
                children: "Good Morning,"
            }, void 0, false, {
                fileName: "[project]/src/components/Dashboard_greeting.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleOptions,
                className: "relative flex gap-1 items-center justify-center bg-[#FFDD4A] text-black px-4 py-2 md:px-6 md:py-4  rounded-full md:text-2xl",
                children: [
                    "Add",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlusCircle"], {
                        className: "size-6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Dashboard_greeting.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Dashboard_greeting.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            showOptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-full left-0 right-0 z-100 bg-[#0a0a0a] rounded-xl shadow-lg mt-2 p-4 md:p-8 text-center border border-[#6e6e6e]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4 border-b pb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-medium md:text-2xl",
                                children: "Add menu"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Dashboard_greeting.jsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrClose"], {
                                onClick: toggleOptions,
                                className: "cursor-pointer hover:scale-90 transition-transform text-gray-400 hover:text-white",
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/src/components/Dashboard_greeting.jsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Dashboard_greeting.jsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-4 pt-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Add_Section$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: "Member",
                                Link: "/member-add"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Dashboard_greeting.jsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Add_Section$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: "Staff",
                                Link: "/staff-add"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Dashboard_greeting.jsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-amber-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Add_Section$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        value: "Plan",
                                        Link: "/plan-add"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Dashboard_greeting.jsx",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$View_Section$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        value: "Plan",
                                        Link: "/see-allplans"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Dashboard_greeting.jsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Dashboard_greeting.jsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Dashboard_greeting.jsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Dashboard_greeting.jsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Dashboard_greeting.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Dashboardgreeting, "eCGtzjTct+BtZOxXNn6gKmxmtNo=");
_c = Dashboardgreeting;
var _c;
__turbopack_context__.k.register(_c, "Dashboardgreeting");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_a66a13a3._.js.map