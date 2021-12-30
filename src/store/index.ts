import { atom, selector } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { v4 } from 'uuid'

const { persistAtom } = recoilPersist()

type Todo = {
  id: string
  title: string
  details: string
  tags: string[]
  active: boolean
}

const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [
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
  effects_UNSTABLE: [persistAtom]
})

const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: ''
})

const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState)
    const list = get(todoListState)
    return filter
      ? list.filter((t) => t.tags.includes(filter) && t.active)
      : list.filter((t) => t.active)
  }
})

const newTodoState = atom<Todo>({
  key: 'newTodoState',
  default: {
    id: v4(),
    title: '',
    details: '',
    tags: [],
    active: true
  }
})

export {
  todoListState,
  newTodoState,
  todoListFilterState,
  filteredTodoListState
}
export type { Todo }
