import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    })
    .then((c) => {
      console.log(`Mongodb connects to : ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};
