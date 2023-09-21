import logo from "/ceaclogo.png"

const Logo = ()=>{
    return(
        <div className="grid grid-cols-2 grid-rows-2 items-center w-[150px] h-[56px] text-white hover:cursor-pointer select-none">
            <img src={logo} className="row-span-2 w-[56px] grow justify-self-center"/>
            <p className="text-[24px] stroke-1">CEAC</p>
            <p className="col-start-2 text-[10px]">Centro Espirita Amigos de Chico</p>
        </div>
    )
}

export default Logo