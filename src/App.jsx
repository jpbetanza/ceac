import Display from './components/Display/Display'
import CardDoacao from './components/CardDoacao/CardDoacao'
import Sobre from './components/Sobre/Sobre'
import Redes from './components/Redes/Redes'
import Agenda from './components/Agenda/Agenda'
import Galeria from './components/Galeria/Galeria'

function App() {

  return (
    <div className='flex flex-col gap-12 items-center'>
      <div className='w-full'>
        <Display/>
      </div>
      <div className="flex mt-[-150px] relative justify-center px-5 w-full">
        <Agenda/>
      </div>
      <div className='px-[1.5rem] lmd:px-[4rem] md:px-[4rem] w-full'>
        <Sobre/>
      </div>
      <div className='px-[1.5rem] lmd:px-[4rem] md:px-[4rem] w-full'>
        <Galeria/>
      </div>
      <div className='flex justify-center w-4/5 lmd:w-3/5 mx-[4rem] sm:h-64'>
        <CardDoacao/>
      </div>
      <footer className='w-full h-full'>
        <Redes/>
      </footer>
    </div>

  )
}

export default App
