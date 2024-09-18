import Pagination from "@/app/components/dashboard/pagination/pagination";
import Search from "@/app/components/dashboard/search/search";
import { deleteUser } from "@/app/lib/actions";
import { fetchUsers } from "@/app/lib/data";
import Link from "next/link";

export default async function UsersPage({searchParams}: {searchParams: any}) {
    const q = searchParams?.q || "";
    const page = searchParams?.page || `1`;
    const item_per_page: number = 2;
    const {count, users} = await fetchUsers(q, page);

    return (
        <div className="flex flex-1 flex-col gap-10 p-5 mt-10 bg-gradient-to-r from-blue-900 to-indigo-900 shadow-sm rounded-2xl">
            <div className="flex justify-between">
                <Search placeholder="Search for a user..." />
                <Link href='/dashboard/users/add'>
                    <button className="bg-[#8f55ee] p-2 rounded-lg text-sm">Add New</button>
                </Link>
            </div>
            <table className="w-full table-auto">
                <thead>
                    <tr>
                        <td className="px-5">Name</td>
                        <td className="px-10">Email</td>
                        <td className="px-10">Created At</td>
                        <td className="px-10">Role</td>
                        <td className="px-10">Status</td>
                        <td className="px-10">Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user: any)=>(
                            <tr key={user.id}>
                                <td className="py-10 px-5">     
                                    <div className="flex gap-5 items-center">
                                        <img className=" object-cover rounded-full w-16 h-16" src={user.img || "/noavatar.png"} alt="" />
                                        {user.username}
                                    </div>
                                </td>
                                <td className="px-10">{user.email}</td>
                                <td className="px-10">{user.createdAt.toString().slice(4, 15)}</td>
                                <td className="px-10">{(user.isAdmin) ? "Admin" : "Employee"}</td>
                                <td className="px-10">{(user.isActive) ? "Active" : "Inactive"}</td>
                                <td className="*:px-10">
                                    <div className="flex gap-5">
                                        <Link href={`/dashboard/users/${user.id}`}>
                                            <button className={`${getStatusColor(1)} p-2 rounded-lg text-sm text-black font-bold`}>View</button>
                                        </Link>
                                        <form action={deleteUser}>
                                            <input type="hidden" name="id" value={user.id}/>
                                            <button className={`${getStatusColor(2)} p-2 rounded-lg text-sm text-black font-bold`}>Delete</button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div>
                <Pagination count={count} ipp={item_per_page}/>
            </div>
        </div>

    );
}

function getStatusColor(type: number = 0) {
    let bgColor: string = '';
    switch(type) {
        case 1:
            bgColor = ' bg-[#00C9B7] active:bg-green-700'; //Add
            break;
        case 2:
            bgColor = ' bg-red-600 active:bg-red-700'; //Delete
            break;
        default:
            bgColor = ' bg-yellow-400'; //Edit
    }

    return bgColor;
}