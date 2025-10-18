import mongoose from 'mongoose';
import 'dotenv/config'

export async function connectDB() {
  try {
    const uri = process.env.MONGODB_URI || ''
    mongoose.set('strictQuery', true)
    await mongoose.connect(uri)
    console.log('Connected to MONGO DB!')
  }
  catch (error) {
    console.log(error)
    console.log('Error connecting to MongoDB!')
  }
}
