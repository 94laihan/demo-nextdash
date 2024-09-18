import mongoose from "mongoose";

export const connectToDB = async () => {
    const connection: any = {};
    try {
      if(connection.isConnected) return;
      console.log(`>>> Check env: ${process.env.MONGO}`);
      const db = await mongoose.connect(process.env.MONGO as string);
      connection.isConnected = db.connections[0].readyState;
    } catch (error) {
      console.log(">>> Check connection");
      console.log(error);
      throw error;
    }
}