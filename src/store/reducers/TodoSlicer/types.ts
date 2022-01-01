import { v4 } from 'uuid'

type Todo = {
  id: string
  title: string
  details: string
  tags: string[]
  active: boolean
}

interface TodoStateInterface {
  value: Todo[]

  filter: string
}

const initialState: TodoStateInterface = {
  value: [
    {
      id: v4(),
      title: 'Water my plants 💦',
      details: "The cactus' and snake plant needs watering on sunday morning!",
      tags: ['plants', 'house'],
      active: true
    },
    {
      id: v4(),
      title: 'Pick up package from store',
      details: 'The store is open until 6pm',
      tags: ['travel', 'shopping'],
      active: true
    },
    {
      id: v4(),
      title: 'Order some new headphones 🎶',
      details: 'Look online for open ear headphones!',
      tags: ['shopping', 'online'],
      active: true
    },
    {
      id: v4(),
      title: 'Play Elder scrolls online 🤺',
      details: "don't take an arrow to the knee",
      tags: ['online', 'gaming'],
      active: true
    },
    {
      id: v4(),
      title: 'Contribute to open source development!',
      details:
        'Try to get involved in open source dev. Start with the small tasks.',
      tags: ['online', 'coding'],
      active: true
    }
  ],
  filter: ''
}

export const blankTodo: () => Todo = () => {
  return {
    id: v4(),
    title: '',
    details: '',
    tags: [],
    active: true
  }
}

export type TodoState = typeof initialState
export type { Todo }

export default initialState
