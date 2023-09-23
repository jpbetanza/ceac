import insta from "/iglogo.png"
import youtube from "/ytlogo.png"

const Redes= ()=>{
    return(
        <div id="redes" className="flex flex-col w-full justify-center items-center h-[12rem]  bg-[#043482]">
            <h1 className="text-[2rem] font-bold text-white">Redes Sociais</h1>
            <div className="flex justify-center gap-12">
                <a href="https://www.youtube.com/@amigosdechico" target="_blank">
                    <img className="w-[8rem] h-[8rem] hover:cursor-pointer" src={youtube}></img>
                </a>
                <a href="https://www.instagram.com/ceac_centroespiritaamigoschico/" target="_blank">
                    <img className="w-[8rem] h-[8rem] hover:cursor-pointer" src={insta}></img>
                </a>
            </div>
        </div>
    )
}
export default Redes