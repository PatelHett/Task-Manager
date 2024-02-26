import mongoose from 'mongoose';
// import User from '../models/user';

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('DB Connected');

    // For testing purposes, create a user after connecting to the database
    // const user = new User({
    //   name: 'test1',
    //   email: 'test1@gmail.com',
    //   password: 'test1',
    //   about: 'test1',
    // });

    // await user.save();
    // console.log('User is created...');
  } catch (e) {
    console.error('Failure to connect to the database:', e);
  }
}
