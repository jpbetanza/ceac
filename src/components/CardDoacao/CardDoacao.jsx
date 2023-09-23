import img from "/doar.png"

const CardDoacao = () => {
    return(
        <div id="doar" className={`flex flex-col justify-center w-full sm:flex-row drop-shadow-lg`}>
            <div className={`flex flex-col text-white p-7 py-5 gap-9 sm:h-auto sm:gap-5 rounded-t-[17px] sm:rounded-tr-none sm:rounded-l-[17px] bg-[#E5842A]`}>
                    <h1 className="text-[2rem] font-bold">Doações</h1>
                    <p className="text-[1rem] break-words">Aos sábados é realizada a doação de 40 cestas básicas para membros da comunidade de Mãe Luíza.</p>
                    <p className="text-[1rem] break-words">Faça uma doação através do PIX: <br/> <b>JUNTOSDOANDOCOMAMOR@GMAIL.COM</b></p>
            </div>
            <img className="rounded-b-[17px] sm:rounded-r-[17px] sm:rounded-bl-none object-contain" src={img}></img>
        </div>
    )
}

export default CardDoacao