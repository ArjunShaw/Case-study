import { useState } from "react"
import PortfolioSummary from "./PortfolioSummart"
import AsssestEditor from "./AssestEditor"
interface Asset {
  name: string;
  symbol: string;
  value: number;
  change: number;
}
export default function Parent(){

const [Assest,setAssest]=useState<Asset[]>([{
    name:"souvik",
    symbol:"@a",
    value:12,
    change:15
},
{
    name:"sayan",
    symbol:"@x",
    value:13,
    change:15
},])

const handleUpdate=(updateassest:Asset)=>{
setAssest((prev)=>prev.map(assest=>assest.symbol==updateassest.symbol?updateassest:assest))
}
const [show,setShow]=useState<boolean>(false)

    return <>
       <h1>Your portfoilo Detais</h1>
       <AsssestEditor onUpdate={handleUpdate}/>
       <button style={{marginTop:"10px"}} onClick={()=>{
        setShow((prev)=>!prev)
       }}>click</button>
       {
        show && <PortfolioSummary assest={Assest} />
       }
    </>
}