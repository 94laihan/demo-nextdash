import { addUser } from "@/app/lib/actions";

export default function AddUserPage() {
    return (
        <div className="p-5 mt-10 bg-gradient-to-r from-blue-900 to-indigo-900 shadow-sm rounded-2xl">
            <form action={addUser} className="flex flex-wrap gap-5 justify-between">
                <input type="text" placeholder="Username" name="username" className="text-white w-[45%] p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]"/>
                <input type="email" placeholder="Email" name="email" className="text-white w-[45%] p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]"/>
                <input type="phone" placeholder="Phone" name="phone" className="text-white w-[45%] p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]"/>
                <input type="password" placeholder="Password" name="password" className="text-white w-[45%] p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]" required/>
                <select name="isAdmin" id="isAdmin" className=" w-[45%] p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]">
                    <option disabled selected className="text-gray-400">Is Admin</option>
                    <option value={'false'} className="text-black">No</option>
                    <option value={'true'} className="text-black">Yes</option>
                </select>
                <select name='isActive' id='isActive' className=" w-[45%] p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]">
                    <option disabled selected className="text-gray-400">Is Active</option>
                    <option value={`false`} className="text-black">No</option>
                    <option value={`true`} className="text-black">Yes</option>
                </select>
                <textarea name="address" rows={16} placeholder="Address" className="text-white w-[100%] p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]"></textarea>
                <button type="submit" className="bg-indigo-400 p-2 w-full rounded-lg hover:bg-[#00C9B7]">Submit</button>
            </form>
        </div>
    );
}