import TicketNum from "./TicketNum"

export default function Ticket({ticket}){
    console.log(ticket)

    return(<div className="Ticket">
         {ticket.map((n,idx) => (
        <TicketNum key={idx} Num={n}/>
    ))}
    </div>)
}