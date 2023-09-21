import DoarBotao from "../DoarBotao/DoarBotao"

const Navbar = ()=>{
    return(
        <div className="flex justify-end md:justify-evenly items-center w-3/5 xl:w-1/3 select-none">
            <div className="hidden md:flex justify-evenly items-center w-full">
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