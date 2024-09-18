'use server';

import { revalidatePath } from "next/cache";
import { User, Product } from "./model";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "../auth";
import { AuthError } from "next-auth";

export const addUser = async(formData: any)=> {
    "use server"
    const {username, email, phone, password, isAdmin, isActive, address} = Object.fromEntries(formData);

    console.log(`>>> isAdmin: ${isAdmin}`);
    console.log(`>>> typeof isAdmin: ${typeof isAdmin}`);

    try {
        connectToDB();
         const newUser = new User({
            username, email, phone, password, isAdmin, isActive, address
         });

         await newUser.save();
    } catch (err) {
        console.log(err);
        throw new Error('Failed to create user!');
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}

export const addProduct = async(formData: any)=> {
    "use server"
    const {title, desc, price, stock, source, barcode, category} = Object.fromEntries(formData);
    console.log('>>> Check new product (before):');
         console.log(`>> category: ${category}`);

    try {
        connectToDB();
         const newProduct = new Product({
            title, desc, price, stock, source, barcode, category
         });

         console.log('>>> Check new product:');
         console.log(newProduct);

         await newProduct.save();
    } catch (err) {
        console.log(err);
        throw new Error('Failed to create product!');
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
}

export const deleteProduct = async(formData: any)=> {
    "use server"
    const {id} = Object.fromEntries(formData);

    try {
        connectToDB();
         await Product.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
        throw new Error('Failed to delete product!');
    }

    revalidatePath("/dashboard/products");
}

export const deleteUser = async(formData: any)=> {
    "use server"
    const {id} = Object.fromEntries(formData);

    try {
        connectToDB();
         await User.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
        throw new Error('Failed to delete user!');
    }

    revalidatePath("/dashboard/products");
}

export const updateUser = async(formData: any)=> {
    "use server"
    const {id, username, email, phone, password, isAdmin, isActive, address} = Object.fromEntries(formData);

    try {
        connectToDB();
        const updateFields: any = {
            username, email, phone, password, isAdmin, isActive, address
        }

        Object.keys(updateFields).forEach(
            (key) => (updateFields[key] === "" || undefined) && delete updateFields[key]
        );
         await User.findByIdAndUpdate(id, updateFields);
    } catch (err) {
        console.log(err);
        throw new Error('Failed to update user!');
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}

export const updateProduct = async(formData: any)=> {
    "use server"
    const {id, title, desc, price, stock, source, barcode, category} = Object.fromEntries(formData);

    try {
        connectToDB();
        const updateFields: any = {
            title, desc, price, stock, source, barcode, category
        }

        Object.keys(updateFields).forEach(
            (key) => (updateFields[key] === "" || undefined) && delete updateFields[key]
        );
         await Product.findByIdAndUpdate(id, updateFields);
    } catch (err) {
        console.log(err);
        throw new Error('Failed to update product!');
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
}

export const authenticate = async (
    prevState: string | undefined,
    formData: FormData,
) => {
    let errorOccurred = false;
    const { username, password } = Object.fromEntries(formData);
    try {
        await signIn("credentials", { username, password });
    } catch (err) {
        if (err instanceof AuthError) {
            errorOccurred = true;
            switch (err.type) {
              case 'CredentialsSignin':
                return 'Invalid credentials.';
              default:
                return 'Something went wrong.';
            }
          }
          throw err;
    } finally {
        if (!errorOccurred) {
            redirect("http://localhost:3000/dashboard");
        }
    }
};




