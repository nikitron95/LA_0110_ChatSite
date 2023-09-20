import { FormEvent, useRef } from "react";
import { useNavigate } from 'react-router-dom';



export default function Login() {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate(); 
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
            console.log("Email:", emailRef.current?.value);
            console.log("Password:", passwordRef.current?.value);
            if(emailRef.current?.value.includes("Elvis")){
                navigate("/home");  
            }

        
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" ref={emailRef} />
                <input type="password" ref={passwordRef} />
                <button type="submit">Login</button>
            </form>
        </>
    );
}
