import Nav from './Nav'
import TodoList from './Todo'

function App() {
  return (
    <div className="m-auto max-w-4xl">
      <header className="my-4">
        <Nav />
      </header>
      <section>
        <TodoList />
      </section>
    </div>
  )
}

export default App
