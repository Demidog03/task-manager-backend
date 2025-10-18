import {Router} from 'express'
import {TaskController} from '../controllers/task.controller'
import {TaskService} from '../services/task.service'

const service = new TaskService()
const controller = new TaskController(service)

export const taskRouter = Router();

taskRouter.get('/', controller.listAll)
taskRouter.post('/create', controller.create)
