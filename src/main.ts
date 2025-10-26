import 'dotenv/config'
import { connectDB } from './db/db.js'
import { createExpressApp } from './app.js'

async function main() {
  try {
    await connectDB()
    const app = createExpressApp()
    const port = process.env.PORT || 5000
    app.listen(port, () => console.log(`Server started! Listening on port ${port}`))
  } catch (error) {
    console.log(error)
    console.log('Error when starting server')
  }
}

void main()
