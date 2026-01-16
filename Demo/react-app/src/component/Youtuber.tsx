import React, {useState} from 'react';

interface Istate{
    message : string;
}
const Youtuber : React.FC = () => {
    const [state, setState] = useState<Istate>({message: "Welcome"});
    const handleMsg = (greet : string): void =>{
        setState({message: greet});
    }
    const handleMsg2 = (greet : string): void =>{
        setState({message: greet});
    }
    const handleMsg3 = (greet : string): void =>{
        setState({message: greet});
    }
    return(
        <>
        <div className="row">
            <div className="col-mt-6">
                <div className="card">
                    <div className="card-body">
                        <h1>{state.message}</h1>
                        <button className="btn btn-danger ms-3" onClick={() => handleMsg("Like")}>Like</button>
                        <button className="btn btn-success ms-3" onClick={() => {handleMsg2("Comment")}}>Comment</button>
                        <button className="btn btn-info ms-3" onClick={() => handleMsg3("Share")}>Share</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Youtuber;