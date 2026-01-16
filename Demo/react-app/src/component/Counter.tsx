import React, {useState} from "react";

interface Istate{
    count : number
}

const Counter: React.FC =() =>{
const [state, setState] = useState<Istate>({count: 0})

// add increament function
const handleIncre = () => {
    // console.log("Increament Clicked");
    setState({count : state.count+1})
}

//add decreament function
const handleDecre = () => {
    // console.log("Decreament Clicked");
   if(state.count > 0){
     setState({count : state.count-1})
   }
}
    return (
        <>
            <h1>This is Event Handler</h1>
            <div className="row">
                <div className="col-md-10">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="display-3">{state.count}</h1>
                            <button className="btn btn-success m-3" onClick={handleIncre}>Increament</button>
                            <button className="btn btn-success"onClick={handleDecre}>Decreament</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}


export default Counter;