import CardAgenda from "../CardAgenda/CardAgenda"
import CardLetra from "../CardLetra/CardLetra"
import { eventos } from "./Eventos"

const Agenda = ({classname}) => {
    console.log(eventos.map((x)=>x.titulo))
    return(
        <div className={`flex flex-wrap w-full ${classname}`}>
            {eventos.map((x)=>(
                <CardAgenda dia={x.dia} hora={x.hora} titulo={x.titulo} url={x.url} />
            ))}
            <CardLetra />
        </div>
    )
}

export default Agenda