import { useEffect } from "react"
import loginAuth from "../assets/auth/login"
import HeaderDashboard from "../components/dashboard/header"



const Dashboard = () =>{
    useEffect(() => {
        loginAuth();
      });
    return(
          <>
          <HeaderDashboard />
          </>
        
    )
}


export default Dashboard