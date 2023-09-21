const CardLetra = ({borda})=>{
    return(
        <div className={`shrink px-7 drop-shadow-lg bg-[#043482] text-white w-[165px] h-[200px] flex flex-col items-center justify-center ${borda?"rounded-"+borda+"-[17px]":""}`}>
        <div className="flex flex-col items-center gap-1">
            <h1 className="text-[16px] leading-none text-center">Ação Solidária</h1>
            <p className="font-bold text-[24px] leading-none">GRUPO</p>
        </div>
        <div>
            <p className="font-bold text-[96px] leading-none">A</p>
        </div>
        <div className="flex flex-col items-center gap-1">
            <h1 className="text-[13px] leading-none">Sábado</h1>
            <p className="text-[13px] leading-none">23/09/2023</p>
        </div>
    </div>
    )
}
export default CardLetra