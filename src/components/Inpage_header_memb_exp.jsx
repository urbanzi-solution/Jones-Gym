// src\components\Inpage_header_memb_exp.jsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LuUndo2 } from "react-icons/lu";
import { CiExport } from "react-icons/ci";

export default function Inpage_header({ title, onExport }) {
  const router = useRouter();

  useEffect(() => {
    const addClass = () => document.body.classList.add("print-memberlist-only");
    const removeClass = () => document.body.classList.remove("print-memberlist-only");

    // Ensure class is removed on unmount just in case
    window.addEventListener("beforeprint", addClass);
    window.addEventListener("afterprint", removeClass);

    return () => {
      window.removeEventListener("beforeprint", addClass);
      window.removeEventListener("afterprint", removeClass);
      removeClass();
    };
  }, []);

  const handlePrint = (e) => {
    e.preventDefault();
    // Let beforeprint handler add the class just-in-time
    window.print();
  };

  return (
    <div className="flex text-2xl md:text-4xl p-4 md:p-6 lg:p-10 justify-between items-center">
      <a href="#" onClick={(e) => { e.preventDefault(); router.back(); }}>
        <LuUndo2 className="text-[#FFDD4A]" />
      </a>
      <h1 className="text-center w-full font-bold">{title}</h1>
      <a href="#" onClick={handlePrint}>
        <CiExport className="text-[#FFDD4A]" />
      </a>
    </div>
  );
}
