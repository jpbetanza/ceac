import img from "/doar.png"

const CardDoacao = ({classname}) => {
    return(
        <div className={`flex w-3/4 drop-shadow-lg h-52 ${classname?classname:""}`}>
            <img className="rounded-l-[17px]" src={img}></img>
            <div className={`rounded-r-[17px] bg-[#E5842A] text-white items-center flex`}>
                <div className="flex flex-col h-full justify-evenly ">
                    <h1 className="">Doações</h1>
                    <p className="">Aos sábados é realizada a doação de 40 cestas básicas para membros da comunidade de Mãe Luíza.</p>
                    <p className="">Faça uma doação através do PIX: JUNTOSDOANDOCOMAMOR@GMAIL.COM</p>
                </div>
            </div>
            
        </div>
    )
}

export default CardDoacao