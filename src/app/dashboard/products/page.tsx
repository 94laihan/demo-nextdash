import Pagination from "@/app/components/dashboard/pagination/pagination";
import Search from "@/app/components/dashboard/search/search";
import { deleteProduct } from "@/app/lib/actions";
import { fetchProducts } from "@/app/lib/data";
import Link from "next/link";


export default async function ProductsPage({searchParams}: {searchParams: any}) {
    const q = searchParams?.q || "";
    const page = searchParams?.page || `1`;
    const item_per_page: number = 3;
    const {count, products} = await fetchProducts(q, page);

    console.log(">>> Check");
    console.log(products);

    return (
        <div className="flex flex-1 flex-col gap-10 p-5 mt-10 bg-gradient-to-r from-blue-900 to-indigo-900 shadow-sm rounded-2xl">
            <div className="flex justify-between">
                <Search placeholder="Search for a product..." />
                <Link href='/dashboard/products/add'>
                    <button className="bg-[#8f55ee] p-2 rounded-lg text-sm">Add New</button>
                </Link>
            </div>
            <table className="w-full table-auto">
                <thead>
                    <tr>
                        <td className="px-5">Title</td>
                        <td className="px-10">Description</td>
                        <td className="px-10">Price</td>
                        <td className="px-10">Created At</td>
                        <td className="px-10">Stock</td>
                        <td className="px-10">Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => {
                            return(
                                <tr key={product.id}>
                                    <td className="py-10 px-5">     
                                        <div className="flex gap-5 items-center">
                                            <img className=" object-cover" src={product.img || "/noproduct.jpg"} alt="" width={80} height={80}/>
                                            {product.title}
                                        </div>
                                    </td>
                                    <td className="px-10">{product.desc}</td>
                                    <td className="px-10">{product.price}</td>
                                    <td className="px-10">{product.createdAt.toString().slice(4, 15)}</td>
                                    <td className="px-10">{product.stock}</td>
                                    <td className="*:px-10">
                                        <div className="flex gap-5">
                                            <Link href={`/dashboard/products/${product.id}`}>
                                                <button className={`${getStatusColor(1)} p-2 rounded-lg text-sm text-black font-bold`}>View</button>
                                            </Link>
                                            <form action={deleteProduct}>
                                                <input type="hidden" name="id" value={product.id}/>
                                                <button className={`${getStatusColor(2)} p-2 rounded-lg text-sm text-black font-bold`}>Delete</button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
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