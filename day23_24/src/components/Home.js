import React,{useContext} from 'react';
import LoginContext from "../contex/AuthContex";

function Home() {
    const handleLog = useContext(LoginContext)
    return (
        <>
            <h1 style={{color: 'grey'}}>Home</h1>
            <p style={{color: 'grey', fontSize:'20px'}}>If not logged in you can't access the Profile & Dashboard</p>
            <button onClick={handleLog.log}>
                {handleLog.loggedIn ? "Logout" : "Login"}
            </button>
        </>
    );
}
export default Home; 