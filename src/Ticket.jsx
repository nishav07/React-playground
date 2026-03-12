import TicketNum from "./TicketNum"

export default function Ticket({ticket}){
    console.log(ticket)

    return(<div>
         {ticket.map((n,idx) => (
        <TicketNum Num={n}/>
    ))}
    </div>)
}