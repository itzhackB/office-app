import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import { WorkerProvider } from '../useContext/Contex';
import Home from '../home/Home';
import WorkerList from '../workerList/WorkerList';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Connect from '../connect/Connect'


export const usersArray = [
    { name: "itzhack", lastName: "Bynesai", birthYear: "1994", phone: "052-123123", mail: "yzik@gmail.com",id:0 },
    { name: "beni", lastName: "yakov", birthYear: "1995", phone: "050-42342", mail: "beni@gmail.com",id:1 },
    { name: "matan", lastName: "baynesai", birthYear: "1995", phone: "03-454234", mail: "matan@gmail.com",id:2 },
    { name: "elias", lastName: "admaso", birthYear: "1996", phone: "055-64564", mail: "elias@gmail.com",id:4 },
    { name: "nati", lastName: "dessa", birthYear: "1993", phone: "053-867876", mail: "nati@gmail.com",id:4},
    { name: "juda", lastName: "ishta", birthYear: "1992", phone: "054-34234242", mail: "juda@gmail.com",id:5 },
    { name: "shlomo", lastName: "gangul", birthYear: "1990", phone: "053-1231", mail: "shlomo@gmail.com",id:6 },
    { name: "hanna", lastName: "amara", birthYear: "1998", phone: "054-435435423", mail: "hanna@gmail.com",id:7},
    { name: "kineret", lastName: "asayn", birthYear: "2000", phone: "09-7867876", mail: "kineret@gmail.com",id:8 },
    { name: "noy", lastName: "coca", birthYear: "1998", phone: "08-4456546", mail: "noy@gmail.com",id:9 }
]

export default function AppRouter() {
    return (
        <div>
            <Switch>
                <WorkerProvider value={usersArray}>
                    <Route exact path="/" component={Home} />
                    <Route path="/worker-list" component={WorkerList} />
                    <Route path="/connect" component={Connect} />
                </WorkerProvider>
            </Switch>
        </div>
    )
}
