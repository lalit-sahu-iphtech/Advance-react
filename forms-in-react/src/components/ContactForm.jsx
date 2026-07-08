import {useState} from "react"
export default function ContactForm(){
    const[contact, setContact] = useState({
        name:"",
        msg:""
    })

    const changeHandler=(e)=>{
        setContact({...contact, [e.target.name]: e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(contact);
        setContact({
            name:"",
             msg:""
        })
    }

    return(
        <div>
            <h2>contact form</h2>
           <form onSubmit={handleSubmit}>
           <input type="text"
            name="name"
            value={contact.name}
            onChange={changeHandler} 
            placeholder="enter name"/>
            <br/>
            <textarea name="msg"placeholder="enter msg"value={contact.msg} onChange={changeHandler} />

            <br/>
            <button>send</button>
           </form>

        </div>
    )
}