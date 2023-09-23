import Logo from "../Logo/Logo"
import Navbar from "../Navbar/Navbar"
import Agenda from "../Agenda/Agenda"
import DisplayText from "../DisplayText/DisplayText"
import Youtube from "../Youtube/Youtube"
import DispBg from "../DispBg/DispBg"


const Display = () => {
    return(
        <DispBg css="gap-5">
            <div className="flex justify-between w-full h-min py-5 px-10">
                <Logo/>
                <Navbar/>
            </div>
            <div className="grid justify-items-center md:grid-cols-2">
                <DisplayText/>
                <div className="h-[21rem] sm:w-3/4 md:h-full xl:h-[21rem] p-10">
                    <Youtube/>
                </div>
            </div>
            <div className="h-[130px]"></div>
        </DispBg>
    )
}
export default Display