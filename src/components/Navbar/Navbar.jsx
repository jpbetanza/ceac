import { useRef } from "react"
import DoarBotao from "../DoarBotao/DoarBotao"

const Navbar = ()=>{
    const myRef = useRef(null)

    const scroll = () => myRef.current.scrollIntoView()

    return(
        <div className="flex justify-end md:gap-5 text-center items-center w-fit xl:w-1/3 select-none">
            <div className="hidden md:flex justify-end gap-5 items-center w-full">
                <p className=" hover:cursor-pointer text-white text-[15px] font-bold">Inicio</p>
                <p className=" hover:cursor-pointer text-white text-[15px]">Sobre nós</p>
                <p className=" hover:cursor-pointer text-white text-[15px]">Galeria</p>
                <p className=" hover:cursor-pointer text-white text-[15px]">Redes sociais</p>
            </div>
            <DoarBotao/>
        </div>
    )
}
export default Navbar