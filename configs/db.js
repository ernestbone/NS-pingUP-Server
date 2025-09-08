import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () =>
      console.log('Database connected')
    );
    await mongoose.connect(`${process.env.MONGO_URL}/pingup`); // /pingup added to create a database named pingup
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
