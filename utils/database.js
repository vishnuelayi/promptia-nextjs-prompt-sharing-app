import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async() => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try{
    await mongoose.connect("mongodb+srv://sonucvt:S2WCHtT3D5JxOgIN@cluster0.yjcwljq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
        dbName: "Promptia",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    isConnected = true;
    console.log("MongoDB connected successfully");
  }
  catch(error)
  {
    console.log(error);
  }
};



