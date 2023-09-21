import Logo from "../Logo/Logo"
import Navbar from "../Navbar/Navbar"
import Agenda from "../Agenda/Agenda"


const Display = ({classname}) => {
    return(
        <div className={`bg-[url('/bg.png')] mb-[130px] md:mb-[50px] w-full h-[650px] bg-cover bg-center ${classname}`}>
            <div className="relative flex flex-col h-full from-black bg-gradient-to-br gap-10">
                <div className="flex justify-between w-full h-min py-5 px-10">
                    <Logo/>
                    <Navbar/>
                </div>
                <div className="flex flex-col h-full w-full items-center justify-start md:flex-row ">
                    <div className=" text-center md:justify-left md:text-left pl-10 flex flex-col w-4/5 md:w-1/2 h-1/2 md:h-full p-5 gap-4 hover:cursor-default select-none">
                        <h1 className="text-[40px] text-white">Centro Espírita Amigos de Chico</h1>
                        <p className="text-[15px] text-white">Texto introdutório coisas escritas, algumas 
                        várias coisas escritas para tornar o dia um 
                        pouco melhor hihi huhu bora escrever mais um pouquinho</p>
                    </div>
                    <div className="flex md:w-1/2 md:h-full md:items-start justify-center items-center">
                        <iframe className="md:h-1/2 md:w-2/3"  src="https://www.youtube.com/embed/1gf5KHCu7fI?si=kJh2glxh2pEHYYGx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <Agenda classname={"pb-10 justify-center"}/>
            </div>
        </div>
    )
}
export default Display