import React, { useState } from 'react'

const Form = () => {
    const [userInput, setUserInput] = useState({
        name: "",
        userName: "",
        age: "",
        email: "",
        password: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    const handleChange = (e) => {
        setUserInput({
            ...userInput, [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <form style={{
                display: "block",
                width: "150px",
                margin: "auto"
            }}>
                <label >Name</label>
                <input onChange={handleChange} type="text" name='name' value={userInput.name} />
                <label >UserName</label>
                <input onChange={handleChange} type="text" name='username' value={userInput.userName} />
                <label >Age</label>
                <input onChange={handleChange} type="number" name='age' value={userInput.age} />
                <label >Email</label>
                <input onChange={handleChange} type="email" name='email' value={userInput.email} />
                <label >Password</label>
                <input onChange={handleChange} type={showPassword ? "text" : "password"} name='password' value={userInput.password} />
                <span style={{ cursor: "pointer" }} onClick={() => setShowPassword(!showPassword)}>👀 </span>
            </form>
        </div>
    )
}
export default Form