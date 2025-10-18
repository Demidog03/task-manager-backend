import express from 'express'
import {taskRouter} from './routes/task.routes'

export function createExpressApp() {
  const app = express()

  app.use(express.json())

  app.use((_req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URI || 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    next()
  })

  // тестовый запрос
  app.get('/test', (_req, res) => res.json({ message: 'Server is working!' }))

  app.use('/api/tasks', taskRouter)

  return app
}
