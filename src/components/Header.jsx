"use client";

import { IoPersonSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Header() {
  const { data, error } = useSWR("/api/notification", fetcher, {
    refreshInterval: 3600000,
  });

  const notificationCount = data?.updates?.length || 0;

  return (
    <header className="flex justify-between p-5 text-[#FFDD4A] text-[24px] md:text-[32px] lg:text-[40px] md:p-10 lg:px-20">
      <a href="/" className="righteous-font w-full">
        JONES GYM
      </a>
      <div className="flex gap-5 md:gap-10 items-center">
        <a
          href="/notification"
          className="relative w-full text-[24px] md:text-[30px] lg:text-[40px]"
        >
          <IoNotifications />
          {/* Notification badge */}
          {notificationCount > 0 && (
            <span
              className="
                absolute 
                -top-2 -right-2 
                bg-red-500 
                text-white 
                text-xs md:text-sm 
                font-bold 
                rounded-full 
                w-5 h-5 
                flex items-center justify-center
              "
            >
              {notificationCount}
            </span>
          )}
        </a>
        <a className="w-full text-[24px] md:text-[30px] lg:text-[40px]" href="">
          <IoPersonSharp />
        </a>
      </div>
    </header>
  );
}