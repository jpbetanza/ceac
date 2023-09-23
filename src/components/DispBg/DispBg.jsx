const DispBg = ({children, css})=>{
    return(
        <div id="inicio" className={`bg-[url('/bg.png')] w-full min-h-full bg-cover bg-center ${css?css:""}`}>
            <div className="flex flex-col w-full h-full from-black bg-gradient-to-br">
                {children}
            </div>
        </div>
    )
}
export default DispBg