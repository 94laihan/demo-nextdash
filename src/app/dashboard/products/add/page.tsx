import { addProduct } from "@/app/lib/actions";

export default function AddProductPage() {
    return(
        <div className="p-5 mt-10 bg-gradient-to-r from-blue-900 to-indigo-900 shadow-sm rounded-2xl">
            <form action={addProduct} className="flex flex-wrap gap-5 justify-between">
                <input type="text" placeholder="Title" name="title" className="text-white w-[45%] p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]"/>
                <select name="category" id="category" className=" w-[45%] p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]">
                    <option value={'general'} className="text-black bg-transparent">Choose a category</option>
                    <option value={'YuGiOh'} className="text-black">YuGiOh</option>
                    <option value={'Pokemon'} className="text-black">Pokemon</option>
                    <option value={'Others'} className="text-black">Others</option>
                </select>
                <input type="number" placeholder="Price" name="price" className="text-white w-[45%] p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]"></input>
                <input type="number" placeholder="Stock" name="stock" className="text-white w-[45%] p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]"></input>
                <input type="text" placeholder="Company Source" name="source" className="text-white w-[45%] p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]"></input>
                <input type="text" placeholder="Barcode" name="barcode" className="text-white w-[45%] p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]"></input>
                <textarea name="desc" rows={16} placeholder="Description" className="text-white w-[100%] p-3 bg-transparent rounded-lg border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7]"></textarea>
                <button type="submit" className="bg-indigo-400 p-2 w-full rounded-lg hover:bg-[#00C9B7]">Submit</button>
            </form>
        </div>
    );
}