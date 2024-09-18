'use client';

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

export default function Search(props: searchCompoType) {
    const {placeholder} = props;
    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const pathname = usePathname();

    const handleSearch = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', `1`);
        
        if(e.target.value){
            params.set("q", e.target.value);
        } else {
            params.delete('q');
        }

        replace(`${pathname}?${params}`);
    }, 300);

    console.log(searchParams);
    console.log(`pathname: ${pathname}`);
    return (
        <div className="flex items-center gap-2 bg-[#2e374a] px-3 py-1 rounded-xl">
            <MdSearch/>
            <input type="text" placeholder={placeholder} onChange={handleSearch} className="bg-transparent outline-transparent focus:outline-none"/>
        </div>
    );
}

type searchCompoType = {
    placeholder: string
}