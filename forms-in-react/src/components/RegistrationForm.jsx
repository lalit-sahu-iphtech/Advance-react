import {useState} from "react"
export default function RegistrationForm(){
    const[user, setUser] = useState({
        name:"",
        email:"",
        password:""
    })

    const changeHandler=(e)=>{
        setUser({...user, [e.target.name]: e.target.value})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(user);
        setUser({
            name:"",
            email:"",
            password:""
        })
    }

    return(
        <div>
            <h2>Register</h2>
           <form onSubmit={submitHandler}>
           <input type="text"
            name="name"
            value={user.name}
            onChange={changeHandler} 
            placeholder="enter name"/>
            <br/>
            <input type="email"
            name="email"
            value={user.email}
            onChange={changeHandler} 
            placeholder="enter email"/>
            <br/>
            <input type="password"
            name="password"
            value={user.password}
            onChange={changeHandler} 
            placeholder="enter password" />

            <br/>
            <button>Register</button>
           </form>

        </div>
    )
}