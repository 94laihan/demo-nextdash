'use client'
import { usePathname } from "next/navigation";
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="w-full p-3 flex justify-between bg-gradient-to-r from-blue-900 to-indigo-900 shadow-sm items-center rounded-2xl">
            <div className="pr-3 capitalize">{pathname.split("/").pop()}</div>
            <div className="flex relative gap-10">
                <div className="flex items-center gap-2 bg-[#2e374a] px-3 py-1 rounded-xl">
                    <MdSearch/>
                    <input type="text" placeholder="Search..." className="bg-transparent outline-transparent focus:outline-none"/>
                </div>
                <div className="flex items-center gap-3">
                    <MdNotifications size={20} />
                    <MdOutlineChat size={20} />
                    <MdPublic size={20} />
                </div>
            </div>
        </div>
    );
}