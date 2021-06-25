import React, { useState } from 'react'
import { usersArray } from '../AppRouter/AppRouter'
import './workerList.css'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";


const tHeaders = ["Full-Name:", "Age", "Phone", "Email"];
const rndId=Math.floor(Math.random() * 1000);
export const inputUser = { name: "", lastName: "", birthYear: "", phone: "",mail:"", id: rndId};

export default function WorkerList() {

    const [users, setUsers] = useState(usersArray);
    const [newUser, setNewUser] = useState(inputUser);

    const createNewUser=(e)=> {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value,
        });
    }

    
    function updateTable(){
        setUsers([...users, newUser])
    }

    function createPage() {
        <Link to="/"/>;
        <Switch>

        </Switch>
    }

    const currentYear = new Date().getFullYear();
    return (
        <div>
            {<table className="toolTip">
                <caption>Workers list</caption>
                <tr >

                    {
                        tHeaders.map(header => {
                            return <th className={header} class={header}>{header}</th>
                        })

                    }

                </tr>

                {
                    users.map(user => {
                        return <tr key={user.id} className="tooltipTrigger">
                            <td onClick={createPage}>{user.name} {user.lastName}</td>
                            <td>{currentYear - user.birthYear}</td>
                            <td className="Phone">{user.phone}</td>
                            <td className="Email">{user.mail}</td>
                            <span class="tooltip">Phone:  {user.phone}<br></br>Mail:  {user.mail}</span>
                            
                        </tr>
                    })
                }
                {
                    Object.keys(newUser).map(function (keyName, keyIndex) {
                        return <td >
                            <input name={keyName} value={newUser.keyName} onChange={createNewUser} placeholder={"Add" + " " + keyName}></input>
                        </td>
                    })

                }
                <div class="button_cont" align="center">
                    <a onClick={updateTable} class="example_a" >
                        ADD USER
                    </a>
                </div>

            </table>}
        </div>
    )
}
