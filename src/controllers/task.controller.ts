export class TaskController {
  constructor(private taskService: TaskService) {}

  // логикой обработки данных
  // Методы для запросов
  // возвращает данные в виде json в запросах
  listAll = async (_req: Request, res: Response) => {
    const tasks = await this.taskService.listAll()
    await res.json(tasks.map(t => ({ id: t._id, title: t.title, isDone: t.isDone })))
  }

  create = async (req: Request, res: Response) => {
    try {
      const newTitle = req.body?.title
      if (!newTitle) {
        res.status(400).json({ message: 'Title is required' })
        return
      }
      const { title, _id, isDone } = await this.taskService.create(newTitle)
      res.status(201).json({ id: _id, title, isDone })
    }
    catch (error) {
      res.status(400).json({ message: error?.message || 'Error creating task' })
    }
  }
}
