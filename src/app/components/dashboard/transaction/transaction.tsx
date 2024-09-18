
export default function Transaction() {
    const data: any[] = [1];

    function getContent() {
        if (data.length === 0) {
            return <h2>No data available</h2>
        }

        return <table className="w-full table-auto">
            <thead>
                <tr>
                    <td className="p-5">Name</td>
                    <td className="p-5">Action</td>
                    <td className="p-5">Date</td>
                    <td className="p-5">Details</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="px-5 py-5">
                        <div className="flex gap-5 items-center pr-5">
                            <img className=" object-cover rounded-full" src="/noavatar.png" alt="" width={40} height={40}/>
                            Minky
                        </div>
                    </td>
                    <td className="p-5">
                        <span className={`${getStatusColor(1)} p-2 rounded-lg text-sm text-black font-bold`}>Add</span>
                    </td>
                    <td className="p-5">
                        2024.07.04
                    </td>
                    <td className="p-5">
                        First time restock.
                    </td>
                </tr>
                <tr>
                    <td className="px-5 py-5">
                        <div className="flex gap-5 items-center">
                            <img className=" object-cover rounded-full" src="/noavatar.png" alt="" width={40} height={40}/>
                            Minky
                        </div>
                    </td>
                    <td className="p-5">
                        <span className={`${getStatusColor()} p-2 rounded-lg text-sm text-black font-bold`}>Edit</span>
                    </td>
                    <td className="p-5">
                        2024.07.04
                    </td>
                    <td className="p-5">
                        First time update stock details.
                    </td>
                </tr>
                <tr>
                    <td className="px-5 py-5">
                        <div className="flex gap-5 items-center">
                            <img className=" object-cover rounded-full" src="/noavatar.png" alt="" width={40} height={40}/>
                            Minky
                        </div>
                    </td>
                    <td className="p-5">
                        <span className={`${getStatusColor(2)} p-2 rounded-lg text-sm text-black font-bold`}>Delete</span>
                    </td>
                    <td className="p-5">
                        2024.07.04
                    </td>
                    <td className="p-5">
                        First time remove stock.
                    </td>
                </tr>
                <tr>
                    <td className="px-5 py-5">
                        <div className="flex gap-5 items-center">
                            <img className=" object-cover rounded-full" src="/noavatar.png" alt="" width={40} height={40}/>
                            Minky
                        </div>
                    </td>
                    <td className="p-5">
                        <span className={`${getStatusColor(2)} p-2 rounded-lg text-sm text-black font-bold`}>Delete</span>
                    </td>
                    <td className="p-5">
                        2024.07.04
                    </td>
                    <td className="p-5">
                        First time remove stock.
                    </td>
                </tr>
                <tr>
                    <td className="px-5 py-5">
                        <div className="flex gap-5 items-center">
                            <img className=" object-cover rounded-full" src="/noavatar.png" alt="" width={40} height={40}/>
                            Minky
                        </div>
                    </td>
                    <td className="p-5">
                        <span className={`${getStatusColor(2)} p-2 rounded-lg text-sm text-black font-bold`}>Delete</span>
                    </td>
                    <td className="p-5">
                        2024.07.04
                    </td>
                    <td className="p-5">
                        First time remove stock.
                    </td>
                </tr>
                <tr>
                    <td className="px-5 py-5">
                        <div className="flex gap-5 items-center">
                            <img className=" object-cover rounded-full" src="/noavatar.png" alt="" width={40} height={40}/>
                            Minky
                        </div>
                    </td>
                    <td className="p-5">
                        <span className={`${getStatusColor(2)} p-2 rounded-lg text-sm text-black font-bold`}>Delete</span>
                    </td>
                    <td className="p-5">
                        2024.07.04
                    </td>
                    <td className="p-5">
                        First time remove stock.
                    </td>
                </tr>
                <tr>
                    <td className="px-5 py-5">
                        <div className="flex gap-5 items-center">
                            <img className=" object-cover rounded-full" src="/noavatar.png" alt="" width={40} height={40}/>
                            Minky
                        </div>
                    </td>
                    <td className="p-5">
                        <span className={`${getStatusColor(2)} p-2 rounded-lg text-sm text-black font-bold`}>Delete</span>
                    </td>
                    <td className="p-5">
                        2024.07.04
                    </td>
                    <td className="p-5">
                        First time remove stock.
                    </td>
                </tr>
                <tr>
                    <td className="px-5 py-5">
                        <div className="flex gap-5 items-center">
                            <img className=" object-cover rounded-full" src="/noavatar.png" alt="" width={40} height={40}/>
                            Minky
                        </div>
                    </td>
                    <td className="p-5">
                        <span className={`${getStatusColor(2)} p-2 rounded-lg text-sm text-black font-bold`}>Delete</span>
                    </td>
                    <td className="p-5">
                        2024.07.04
                    </td>
                    <td className="p-5">
                        First time remove stock.
                    </td>
                </tr>
                <tr>
                    <td className="px-5 py-5">
                        <div className="flex gap-5 items-center">
                            <img className=" object-cover rounded-full" src="/noavatar.png" alt="" width={40} height={40}/>
                            Minky
                        </div>
                    </td>
                    <td className="p-5">
                        <span className={`${getStatusColor(2)} p-2 rounded-lg text-sm text-black font-bold`}>Delete</span>
                    </td>
                    <td className="p-5">
                        2024.07.04
                    </td>
                    <td className="p-5">
                        First time remove stock.
                    </td>
                </tr>
            </tbody>
        </table>
    }

    function getStatusColor(type: number = 0) {
        let bgColor: string = '';
        switch(type) {
            case 1:
                bgColor = ' bg-[#00C9B7]'; //Add
                break;
            case 2:
                bgColor = ' bg-red-600'; //Delete
                break;
            default:
                bgColor = ' bg-yellow-400'; //Edit
        }

        return bgColor;
    }

    return (
        <div className="py-6 px-6 bg-gradient-to-r from-blue-900 to-indigo-900 shadow-sm rounded-2xl">
            <h2 className="mb-5 text-3xl font-extrabold leading-none tracking-tight text-white">Recent activities</h2>
            <div className="">
                {getContent()}
            </div>
        </div>
    );
}