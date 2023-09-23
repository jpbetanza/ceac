const Galeria = () =>{
    return (
        <div id="galeria" className="flex flex-col gap-5 justify-between">
            <div className="flex gap-7 items-center w-full">
                <h1 className="text-[32px] font-bold text-[#1E1E1E]">Galeria</h1>
                <div className="w-[131px] h-[1px] bg-[#1E1E1E] grow"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[1.5rem] w-full p-3 justify-items-center">
                {[1,2,3,4,5,6].map(x=>(
                    <div className="w-full h-32 md:h-[12rem] bg-[#D9D9D9]"></div>
                ))}
            </div>
        </div>
    )
}
export default Galeria