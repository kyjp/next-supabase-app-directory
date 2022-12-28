import NodeList from './components/notes-list'
import TimerCounter from './components/timer-counter'
import { Suspense } from 'react'
import Spinner from './components/spinner'
import RefreshBtn from './components/refresh-button'

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        Hello World
        <Suspense fallback={<Spinner color="bg-green-500" />}>
          {/* @ts-ignore*/}
          <NodeList />
        </Suspense>
        <TimerCounter />
        <RefreshBtn />
      </div>
    </main>
  )
}
