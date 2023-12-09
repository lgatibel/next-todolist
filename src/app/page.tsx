import { TodoList } from '@/app/_components/TodoList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Todo App</h1>
      <TodoList/>
    </main>
  )
}
