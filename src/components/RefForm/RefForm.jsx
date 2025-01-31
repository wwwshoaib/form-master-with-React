import { useEffect, useRef } from "react";


const RefForm = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect ( () => {
        emailRef.current.focus();
        passwordRef.current.focus();
    },[])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
            <h1 className="font-bold text-2xl">Welcome Back :)</h1>
            <form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" onSubmit={handleSubmit}>
                <label className="font-semibold text-xs">Username or Email</label>
                <input ref ={emailRef} className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" name="email" />
                <label className="font-semibold text-xs mt-3">Password</label>
                <input ref = {passwordRef} className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" name="password" />
                <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" type="submit" >Submit</button>
                <div className="flex mt-6 justify-center text-xs">
                    <a className="text-blue-400 hover:text-blue-500" href="#">Forgot Password</a>
                    <span className="mx-2 text-gray-300">/</span>
                    <a className="text-blue-400 hover:text-blue-500" href="#">Sign Up</a>
                </div>
            </form>
        </div>
    );
};

export default RefForm;