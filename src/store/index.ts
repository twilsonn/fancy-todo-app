import { atom } from 'recoil'
import { v4 } from 'uuid'

type Todo = {
  id: string
  title: string
  details: string
  tags: string[]
}

const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [
    {
      id: v4(),
      title: 'Water my plants 💦',
      details: "The cactus' and snake plant needs watering on sunday morning!",
      tags: ['plants', 'house']
    },
    {
      id: v4(),
      title: 'Pick up package from store',
      details: 'The store is open until 6pm',
      tags: ['travel', 'shopping']
    },
    {
      id: v4(),
      title: 'Order some new headphones 🎶',
      details: 'Look online for open ear headphones!',
      tags: ['shopping', 'online']
    },
    {
      id: v4(),
      title: 'Play Elder scrolls online 🤺',
      details: "don't take an arrow to the knee",
      tags: ['online', 'gaming']
    },
    {
      id: v4(),
      title: 'Contribute to open source development!',
      details:
        'Try to get involved in open source dev. Start with the small tasks.',
      tags: ['online', 'coding']
    }
  ]
})

const newTodoState = atom<Todo>({
  key: 'newTodoState',
  default: {
    id: v4(),
    title: '',
    details: '',
    tags: []
  }
})

export { todoListState, newTodoState }
export type { Todo }
