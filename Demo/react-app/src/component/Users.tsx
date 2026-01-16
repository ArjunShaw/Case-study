import React from "react";

interface Istate{
    name : string,
    age : number,
    title : string
}
interface Iprops{
    userId : number,
    userName : string,
    userAge : number
}
export default class Users extends React.Component <Iprops, Istate> {
   
    constructor(props : Iprops) {
        super(props);
        this.state = {
            name : "Arjun Shaw",
            age : 37,
            title : "Developer"
        }
    }


    render()  {
        const {userId, userName, userAge} = this.props;
        const {name, age, title} = this.state;
        return (
            <>
            {/* <div>
                <h1>This is Users Component</h1>
                <h2>UserId : {this.props.userId}</h2>
                <h2>UserName : {this.props.userName}</h2>
                <h2>UserAge : {this.props.userAge}</h2>
            </div> */}
            <div>
                <h1>This is Users Component</h1>
                <h2>UserId : {userId}</h2>
                <h2>UserName : {userName}</h2>
                <h2>UserAge : {userAge}</h2>
            </div>
            <div className="col-md-10 card">
                <h1>This is state in class</h1>
                <h2>Name : {name}</h2>
                <h2>Age : {age}</h2>
                <h2>Title : {title}</h2>
            </div>
            </>
        )
    }
}

// export default Users;