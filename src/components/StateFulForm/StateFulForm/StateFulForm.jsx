import { useState } from "react";


const StateFulForm = () => {
    
const [password, setPassword] = useState(null);
const [error, setError] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6) {
            setError('password must be 6 characters or longer');
        }

        else {
            setError('');
        }
    } 
 const [enail, setEmail] = useState(null);
    const handleEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    
    } 

    
    const handlePasswordChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">

     
        <h1 className="font-bold text-2xl">Welcome Back :)</h1>
        <form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" onSubmit={ handleSubmit}>
            <label className="font-semibold text-xs">Username or Email</label>
            <input onChange={handleEmailChange}
             className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" name = "email"/>
            <label className="font-semibold text-xs mt-3">Password</label>
            <input onChange={handlePasswordChange}
             className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"type="password" name ="password"/>
            <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" type="submit" >Submit</button>
            <div className="flex mt-6 justify-center text-xs">
                <a className="text-blue-400 hover:text-blue-500" href="#">Forgot Password</a>
                <span className="mx-2 text-gray-300">/</span>
                <a className="text-blue-400 hover:text-blue-500" href="#">Sign Up</a>
            </div>
          
        </form> 

        {
            error && <p className="text-red-500 text-3xl "> {error} </p>
        }
     

      
    
    </div>
    );
};

export default StateFulForm;