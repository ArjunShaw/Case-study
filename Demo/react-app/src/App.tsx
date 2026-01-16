// import React from 'react'
import Customer from "./component/Customer"
import './App.css'
import Users from "./component/Users"
import Counter from "./component/Counter"
import Youtuber from "./component/Youtuber"
import Login from "./component/Login"
import Log from "./component/Log"

function App() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
            <Customer name = "Arjun" title = "Bang Bang" age = {23} />
        </div>
        <div className="col-md-6">
          <Users userId={1} userName="Arjun Shaw" userAge={22}/>
        </div>
        <div className="col-md-6">
          <Counter/>
        </div>
        <div>
          <Youtuber/>
        </div>
        <div>
          <Login />
        </div>

        <div>
          <Log/>
        </div>
      </div>
    </div>
    </>
  )}

export default App
