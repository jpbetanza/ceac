import { addHexColor } from "./hexsum"

const DoarBotao = ({texto,cor,url}) => {

    return(
        <div>
            <button className={`duration-300 rounded-[17px] bg-[#${cor?cor:"E5842A"}] 
            w-[80px] h-[34px] text-center text-white font-bold text-[15px] 
            hover:bg-[#${cor?addHexColor(String(cor),"19FDE5").toUpperCase():addHexColor("E5842A","19FDE5").toUpperCase()}]`}
            >
            {texto?texto:"Doar"} 
            </button>
        </div>
    )
}

export default DoarBotao