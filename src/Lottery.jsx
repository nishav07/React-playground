import { useState } from "react"
import {generateTicket,sum} from "./helper.js"
import Ticket from "./Ticket.jsx";

export default function Lottery({n=6,winningSum=18}){
    let[tickets,setTicket] = useState(generateTicket(n));
    let isWinning = sum(tickets) == winningSum;

    let buyTicket = () => {
        setTicket(generateTicket(n));
    }
    return(<>
    <Ticket ticket={tickets}/>
    <button onClick={buyTicket}>Buy Tickets</button>
    <h2>{isWinning && "You Won The Lottery"}</h2>

    </>)
}