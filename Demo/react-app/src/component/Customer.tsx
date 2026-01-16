import React, {useState} from "react";

interface Istate{
    name : string,
    title :string
    age : number
}
interface IPROPS {
    name : string,
    title : string,
    age : number
}
const Customer: React.FC<IPROPS> = ({name, title, age}) => {
    const [state , /*setState */] = useState<Istate>({name : "Arjun", title : "Bang", age : 12})
    return (
        <>
        <div>
            <h1>Hello I am function component</h1>
            <h2>name : {name}</h2>
            <h2>Title : {title}</h2>
            <h2>Age : {age}</h2>
        </div>
        <div className="col-md-6 card">
            <h1>This is state </h1>
            <h2>Name : {state.name}</h2>
            <h2>Title : {state.title}</h2>
            <h2>Age : {state.age}</h2>
        </div>
        </>
    )
}

export default Customer