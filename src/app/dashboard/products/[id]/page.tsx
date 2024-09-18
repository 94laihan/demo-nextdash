import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";

export default async function SingleProductPage({params}: {params: any}){
    const {id} = params;
    const product: any = await fetchProduct(id);

    return (
        <div className="flex p-5 mt-10 bg-gradient-to-r from-blue-900 to-indigo-900 shadow-sm rounded-2xl gap-10">
            <div className=" bg-white p-5 rounded-lg h-max text-center">
                <div className=" w-full h-3/4 overflow-hidden">
                    <img src={product.img || "/noproduct.jpg"} alt="" className=" rounded-lg mb-2" width={400} height={400}/>
                </div>
                <span className="text-black font-mono font-bold">{product.title}</span>
            </div>
            <div className=" flex-1 bg-transparent rounded-lg">
                <form action={updateProduct} className="flex flex-col gap-2">
                    <input type="hidden" name="id" value={product.id}/>
                    <label>Title</label>
                    <input type="text" name='title' placeholder={product.title} className="mx-2 text-white p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]"/>
                    <label>Price (RM)</label>
                    <input type="number" name='price' placeholder={product.price} className="mx-2 text-white p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]"/>
                    <label>Stock</label>
                    <input type="number" name='stock' placeholder={product.stock} className="mx-2 text-white p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]"/>
                    <label>Company Source</label>
                    <input type="text" name='company' placeholder={product.source} className="mx-2 text-white p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]"/>
                    <label>Catagory</label>
                    <select name="category" className="mx-2 p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]">
                        <option value='general' selected={false} className="text-black bg-transparent">Choose a category</option>
                        <option value='YuGiOh' selected={product.category === 'YuGiOh'} className="text-black">YuGiOh</option>
                        <option value='Pokemon' selected={product.category === 'Pokemon'} className="text-black">Pokemon</option>
                        <option value='Others' selected={product.category === 'Others'} className="text-black">Others</option>
                    </select>
                    <label>Description</label>
                    <textarea name="desc" rows={10} placeholder={product.desc} className="mx-2 text-white p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]"></textarea>
                    <button type="submit" className="mt-5 bg-[#00C9B7] p-2 w-full rounded-lg hover:bg-indigo-400 ">Update</button>
                </form>
            </div>
        </div>
    );
}