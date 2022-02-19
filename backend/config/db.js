const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    var conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB connected ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(error)
    process.exit(1);
  }
}

module.exports = connectDB