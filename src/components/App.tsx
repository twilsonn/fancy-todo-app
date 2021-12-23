import Nav from './Nav'
import Todo from './Todo'

function App() {
  return (
    <div className="m-auto max-w-4xl">
      <header className="my-4">
        <Nav />
      </header>
      <section>
        <Todo />
      </section>
    </div>
  )
}

export default App
