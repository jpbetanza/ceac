import CardAgenda from "../CardAgenda/CardAgenda"
import CardLetra from "../CardLetra/CardLetra"
import { eventos } from "./Eventos"

const Agenda = () => {
    console.log(eventos.map((x)=>x.titulo))
    return(
        <div className={`grid lmd:grid-cols-2 md:grid-cols-4 justify-center`}>
            {eventos.map((x)=>(
                <CardAgenda dia={x.dia} hora={x.hora} titulo={x.titulo} url={x.url} />
            ))}
            <CardLetra />
        </div>
    )
}

export default Agenda