import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";

export default async function SingleUserPage({params}: {params: any}){
    const {id} = params;
    const user: any = await fetchUser(id);
    
    return (
        <div className="flex p-5 mt-10 bg-gradient-to-r from-blue-900 to-indigo-900 shadow-sm rounded-2xl gap-10">
            <div className=" bg-white p-5 rounded-lg h-max text-center">
                <div className=" w-full h-3/4 overflow-hidden">
                    <img src={user.img || "/noavatar.png"} alt="" className=" rounded-lg mb-2" width={400} height={400}/>
                </div>
                <span className="text-black font-mono font-bold">{user.username}</span>
            </div>
            <div className=" flex-1 bg-transparent rounded-lg">
                <form action={updateUser} className="flex flex-col gap-2">
                    <input type="hidden" name="id" value={user.id}/>
                    <label>Username</label>
                    <input type="text" name='username' placeholder={user.username} className="mx-2 text-white p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]"/>
                    <label>Email</label>
                    <input type="email" name='email' placeholder={user.email} className="mx-2 text-white p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]"/>
                    <label>Password</label>
                    <input type="password" name='password' placeholder={user.password} className="mx-2 text-white p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]"/>
                    <label>Phone Contact</label>
                    <input type="text" name='phone' placeholder={user.phone} className="mx-2 text-white p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]"/>
                    <label>Address</label>
                    <textarea name="address" rows={10} placeholder={user.address} className="mx-2 text-white p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]"></textarea>
                    <label>Role</label>
                    <select name="isAdmin" className="mx-2 p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]">
                        <option value={'true'} selected={user.isAdmin} className="text-black">Admin</option>
                        <option value={'false'} selected={!user.isAdmin} className="text-black">Other</option>
                    </select>
                    <label>Active</label>
                    <select name="isActive" className="mx-2 p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]">
                        <option value={'true'} selected={user.isActive} className="text-black">Yes</option>
                        <option value={'false'} selected={!user.isActive} className="text-black">No</option>
                    </select>
                    <button type="submit" className="mt-5 bg-[#00C9B7] p-2 w-full rounded-lg hover:bg-indigo-400 ">Update</button>
                </form>
            </div>
        </div>
    );
}