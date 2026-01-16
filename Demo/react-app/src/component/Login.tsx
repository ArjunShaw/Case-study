import React, {useState} from 'react';

interface Istate {
    user : {
        username : string,
        password :string
    }
}

const Login : React.FC = () =>{
    const [state, setState] = useState<Istate>({user : {username: "", password : ""}})

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>): void =>{ 
        setState({
            user: {
                ...state.user,
                [event.target.name] : event.target.value

            }
        })

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(state.user)

    }
    return(
        <>
        <form action="" onSubmit={handleSubmit}>
            <div className="form">
                <div className="mb-3">
                    <input type="email" name = "username" onChange={handleChange} value={state.user.username} />
                </div>
                <div className="mb-3">
                    <input type="password" onChange={handleChange} name = "password" value={state.user.password} />
                </div>
                <button type="submit" className="button btn btn-success">Submit</button>
            </div>
        </form>

        <div>
            <p>{JSON.stringify(state.user)}</p>
        </div>
        
        </>
    )
}

export default Login;