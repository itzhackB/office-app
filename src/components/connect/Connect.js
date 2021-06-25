import React, { useState } from 'react'
import { useContext } from 'react'
import { usersArray } from '../AppRouter/AppRouter'
import { inputUser } from '../workerList/WorkerList'
import { send } from 'emailjs-com';
import './connect.css'

export default function Connect() {
    const [input, setInput] = useState(inputUser);

    function setUser(e) {
        const { name, value } = e.target;
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    const [toSend, setToSend] = useState({
        from_email:'',
        from_name: '',
        to_name: '',
        message: '',
        mail_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(toSend)

    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };



    return (

        <div>
            <h1 > Connect</h1>
            <h5>Your Mail:</h5>

            <select onChange={handleChange} value={toSend.from_email} name="from_email" id="cars">
                {
                    usersArray.map(user => {
                        return <>
                            <option onClick={handleChange} value={user.mail}>{user.mail}</option>
                        </>
                    })
                }
            </select>
            <br></br>
            <br></br>
            <div>
                <form onSubmit={onSubmit}>
                    <input
                        type='text'
                        name='from_name'
                        placeholder='from name'
                        value={toSend.from_name}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='to_name'
                        placeholder='to name'
                        value={toSend.to_name}
                        onChange={handleChange}
                    />
                    <br></br>

                    <h5>Your messege:</h5>

                    
                    <textarea
                        type='text'
                        name='message'
                        placeholder='Your message'
                        value={toSend.message}
                        onChange={handleChange}
                        
                    >
                    </textarea>
                    <br></br>
                    <h5>To:</h5>
        
                    <select onChange={handleChange} value={toSend.mail_to} name="mail_to" >
                        {
                            usersArray.map(user => {
                                return <>
                                    <option onClick={handleChange} value={user.mail}>{user.mail}</option>
                                </>
                            })
                        }
                    </select>
                    <button type='submit'>Send</button>

                </form>
            </div>

        </div>
    )

}

