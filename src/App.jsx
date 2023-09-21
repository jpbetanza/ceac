import { useState } from 'react'
import Display from './components/Display/Display'
import CardDoacao from './components/CardDoacao/CardDoacao'
import Sobre from './components/Sobre/Sobre'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col gap-8 items-center'>
      <Display/>
      <div className='mx-[4rem] mb-10'>
        <Sobre/>
      </div>
      {/* <div className='flex w-full justify-center'>
        <CardDoacao/>
      </div> */}
      
    </div>

  )
}

export default App
