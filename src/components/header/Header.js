import React,{useState} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";
import AppRouter from '../AppRouter/AppRouter';
import './header.css'
import styled from 'styled-components';

export default function Header({ color, background,isDark}) {
    const [dark, setDark] = useState(isDark)
    
    const StyledDiv = isDark?
    styled.div`
    background:${background};
    color:${color}
    `
    :
    styled.h1`
    background:black;
    color:white
    `
    

    function changeTheme(){
        if(dark===true){
           setDark(false) 
        }
        else{
            setDark(true);
        }
    }
    return (
        <StyledDiv>
            <div >

                <nav style={{ display: 'flex', justifyContent: 'center' }}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/worker-list">Worker List</Link>
                        </li>
                        <li>
                            <Link to="/connect">Connect</Link>
                        </li>
                    </ul>
                </nav>
                <button onClick={changeTheme}>Change THEME</button>

            </div>
        </StyledDiv>
    )
}
