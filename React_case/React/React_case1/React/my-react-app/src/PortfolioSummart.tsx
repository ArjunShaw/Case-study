import React, { useEffect, useState } from "react";
interface Assest {
  name: string;
  symbol: string;
  value: number;
  change: number;
};

interface AssestListProps  {
  assest: Assest[]
};

function PortfolioSummary({ assest }:AssestListProps)
{
const [totalValue,settotal]=useState<number>(0);
const [percantage,setPercantage]=useState<number>(0)
function  Calculate(){
    let total=0;
    let change=0
    for(let obj of assest){
        total=total+obj.value
        change=change+obj.change
    }
     change=change/assest.length
settotal(total)
setPercantage(change)
}

useEffect(()=>{
    Calculate()
},[])
  return (
    <>
      <div>
        {
            assest.map((item)=>(
               <div>
                <ul>
                    <li>{item.name}</li>
                    <li>{item.symbol}</li>
                    <li>{item.value}</li>
                    <li>{item.change}</li>
                </ul>
               </div>
            ))
        }
        <p>TotalValue:{totalValue}</p>
        <p>perCentage:{percantage}</p>
      </div>
    </>
  );
}

export default PortfolioSummary;
