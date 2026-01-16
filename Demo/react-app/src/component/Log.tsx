import React, {useState} from 'react';

interface Istate {
    isLogin : boolean;
}



const Log  :React.FC = () =>{
    const [state, setState] = useState<Istate>({isLogin: false});

    const handleLogin = () =>{
    setState({isLogin : true})
}

    const handleLogout = () =>{
    setState({isLogin : false})
}
    return(
        <>
        <div className="container">
            <div className="col-md-12">
                <div className="card">
                    {state.isLogin && state.isLogin ? (<h1>Welcome User</h1>) : (<h1>Plese Login the page</h1>)}
                    
                    {
                        state.isLogin && state.isLogin ? (<button className='btn btn-primary' onClick={handleLogout}>Logout</button>) :
                         (<button className='btn btn-primary' onClick={handleLogin}>Login</button>)
                         
                    }

                    
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Log;