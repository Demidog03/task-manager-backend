import {Task, TaskModel} from '../models/task.model'

interface TaskServiceInterface {
  listAll: () => Promise<Task[]>
}

// эксклюзивно работа с базой
export class TaskService implements TaskServiceInterface {
  // получаем из базы записи (js objects/arrays)
  listAll(): Promise<Task[]> {
    // SELECT FROM Task -> sql
    return TaskModel.find().sort({ updatedAt: -1 }).lean()
  }

  async create(title: string): Promise<Task> {
    const createdTask = await TaskModel.create({ title })
    return createdTask.toObject()
  }
}
