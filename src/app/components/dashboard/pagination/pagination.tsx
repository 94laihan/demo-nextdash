'use client'
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Pagination({count, ipp}: {count: number, ipp: number}){

    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const pathname = usePathname();

    const page: number = parseInt(searchParams.get('page')!) || 1;

    const params = new URLSearchParams(searchParams);
    const item_per_pages = ipp;

    const hasPrev: boolean = item_per_pages * (page - 1) > 0;
    const hasNext: boolean = item_per_pages * (page - 1) + item_per_pages < count;

    const handleChangePage = (type: string) => {
        if(type === 'prev')
            params.set("page", `${page - 1}`);
        else
            params.set("page", `${page + 1}`);

        replace(`${pathname}?${params}`);
    }


    return (
        <div className="flex justify-between">
            <button 
                className={`p-2 text-sm ${(!hasPrev) ? 'bg-slate-500' : 'bg-slate-100'} text-black font-semibold rounded-lg`} 
                disabled={!hasPrev}
                onClick={()=>handleChangePage("prev")}
            >
                Previous
            </button>
            <button 
                className={`p-2 text-sm ${(!hasNext) ? 'bg-slate-500' : 'bg-slate-100'} text-black font-semibold rounded-lg`} 
                disabled={!hasNext} 
                onClick={()=>handleChangePage("next")}
            >
                Next
            </button>
        </div>
    );
}