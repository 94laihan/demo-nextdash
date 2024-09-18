import { User, Product } from "./model";
import { connectToDB } from "./utils";

export const fetchUsers = async (q:any, page: string) => {
    const regex = new RegExp(q, "i");
    const item_per_page:number = 2;
    try {
        connectToDB();
        const count = await User.find({username: {$regex: regex}}).countDocuments();
        const users = await User.find({username: {$regex: regex}}).limit(item_per_page).skip(item_per_page * (parseInt(page) - 1));
        return {count, users};
    } catch(err) {
        console.log(err);
        throw new Error('>>> Failed to fetch user!!');
    }
}

export const fetchProducts = async (q:any, page: string) => {
    const regex = new RegExp(q, "i");
    const item_per_page:number = 3;
    try {
        connectToDB();
        const count = await Product.find({title: {$regex: regex}}).countDocuments();
        const products = await Product.find({title: {$regex: regex}}).limit(item_per_page).skip(item_per_page * (parseInt(page) - 1));
        return {count, products};
    } catch(err) {
        console.log(err);
        throw new Error('>>> Failed to fetch product!!');
    }
}

export const fetchUser = async(id: number)=> {
    try {
        connectToDB();
        const user = await User.findById(id);
        return user;
    } catch(err) {
        console.log(err);
        throw new Error("Failed to fecth user!");
    }
}

export const fetchProduct = async(id: number)=> {
    try {
        connectToDB();
        const product = await Product.findById(id);
        return product;
    } catch(err) {
        console.log(err);
        throw new Error("Failed to fecth product!");
    }
}