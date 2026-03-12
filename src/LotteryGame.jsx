import { useState } from "react";

//single page thiking without logical and persentaional components

export default function LotteryGame(){

    let [Num,setNum] = useState(
        [Math.floor(Math.random() * 9) + 1,
        Math.floor(Math.random() * 9) + 1,
        Math.floor(Math.random() * 9) + 1]
    );
    

    let isWinning = false;

    function generateNew(){
        let n1 = Math.floor(Math.random() * 9) + 1;
        let n2 = Math.floor(Math.random() * 9) + 1;
        let n3 = Math.floor(Math.random() * 9) + 1;

        setNum([n1,n2,n3 ])

        if(n1 + n2 + n3 == 15){
            alert("you win the lottery")
          
        } else {
            console.log("try agian")
        }
        
    }


    return(<>
    <h1>lottery game</h1>
    <h2>Lottery number</h2>
    <p>{Num[0]},{Num[1]},{Num[2]}</p>
    <button onClick={() => {
        generateNew()
    }}>Generate New</button>
    </>)
}