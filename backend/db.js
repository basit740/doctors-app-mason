const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://admin:admin121@cluster0.ojxaa5c.mongodb.net/doctors?retryWrites=true&w=majority";

const connectDB = async () => {
  const conn = await mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
