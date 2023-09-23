const Sobre = () =>{
    return(
        <div id='sobre' className="grid gap-5">
            <div className="flex gap-7 items-center">
                <h1 className="text-[32px] font-bold text-[#1E1E1E]">Sobre</h1>
                <div className="w-[131px] h-[1px] bg-[#1E1E1E] grow"></div>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly gap-[2rem] md:gap-[7rem] text-center text-[#1E1E1E]">
                <p className="text-[20px]">Um texto maravilhoso sobre o centro coisas mirabolantes, talvez, nem tanto</p>
                <p className="text-[20px]">Um texto maravilhoso sobre o centro coisas mirabolantes, talvez, nem tanto</p>
                <p className="text-[20px]">Um texto maravilhoso sobre o centro coisas mirabolantes, talvez, nem tanto</p>
            </div>
        </div>
    )
}
 export default Sobre