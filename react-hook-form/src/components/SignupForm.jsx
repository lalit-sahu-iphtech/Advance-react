import { useForm } from "react-hook-form"
export default function SignupForm(){
    //useForm
    const{
        register,
        reset,
        handleSubmit,
        formState : {errors}
    } = useForm();

    // handle submit
    const signup = (data)=>{
        alert("sign up success");
        console.log(data);
        reset();
    }
    return(
        <>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(signup)}>
            <input type="text"placeholder="enter name" 
            {...register("name", {required:"Name Required"})}
            />
            <p style={{color:"red"}}>{errors.name?.message}</p>

            <input type="email"placeholder="enter email" 
            {...register("email", {required:"E-mail Required"})}
            />
            <p style={{color:"red"}}>{errors.email?.message}</p>
            <input type="password"placeholder="enter password" 
            {...register("password",
             {minLength:{value:6,message:"Minimum 6 character"}})}
            />
            <p style={{color:"red"}}>{errors.password?.message}</p>

            <button>signup</button>
            
        </form>
        </>
    )
}