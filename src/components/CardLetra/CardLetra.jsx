import { useEffect, useState } from "react"
import { getNextSaturday, proximaLetra } from "../../services/letra"
const CardLetra = ({borda})=>{

    const [letra, setLetra] = useState("")
    const [sabado, setsabado] = useState("")

    useEffect(()=>{
        setLetra(proximaLetra());
        setsabado(getNextSaturday())
    })

    return(
        <div className={`hover:cursor-default select-none shrink px-7 drop-shadow-lg bg-[#043482] text-white w-[165px] h-[200px] flex flex-col items-center justify-center ${borda?"rounded-"+borda+"-[17px]":""}`}>
        <div className="flex flex-col items-center gap-1">
            <h1 className="text-[16px] leading-none text-center">Ação Solidária</h1>
            <p className="font-bold text-[24px] leading-none">GRUPO</p>
        </div>
        <div>
            <p className="font-bold text-[96px] leading-none">{letra}</p>
        </div>
        <div className="flex flex-col items-center gap-1">
            <h1 className="text-[13px] leading-none">Sábado</h1>
            <p className="text-[13px] leading-none">{sabado}</p> 
        </div>
    </div>
    )
}
export default CardLetra