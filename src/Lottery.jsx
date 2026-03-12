import { useState } from "react"
import {generateTicket,sum} from "./helper.js"

export default function Lottery({n,winningSum}){
    let[ticket,setTicket] = generateTicket(n);
    let isWinning = sum(ticket) == winningSum;
    return(<>

    </>)
}