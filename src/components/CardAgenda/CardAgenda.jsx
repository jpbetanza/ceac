import DoarBotao from "../DoarBotao/DoarBotao"

const CardAgenda = ({dia, hora, titulo, url, borda}) => {
    return(
        <div className={`hover:cursor-default select-none shrink py-3 leading-tight drop-shadow-lg bg-white w-[165px] h-[200px] flex flex-col gap-2 ${borda?"rounded-"+borda+"-[17px]":""}`}>
            <div className="flex flex-col gap-3 m-3">
                <div className="flex flex-col items-center gap-1">
                    <h1 className="text-[20px] font-bold">{dia}</h1>
                    <p className="text-[14px] font-light">{hora}</p>
                </div>
                <div className="flex text-center font-bold flex-wrap">
                    <h1 className="text-[24px] leading-none">{titulo}</h1>
                </div>
            </div>
            {url?(            
                <div className="flex justify-center">
                    <DoarBotao cor={"043482"} texto={"Playlist"} url={url}/>
                </div>
                )
                :(
                    <div className="bg-[#043482] w-[120px] h-[34px] flex text-white font-bold items-center justify-center">Presencial</div>
                )}

        </div>
    )
}

export default CardAgenda