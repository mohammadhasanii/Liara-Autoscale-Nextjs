import LoginComponent from "@/components/auth/Login";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
export default function LoginPage() {

      const router = useRouter();
      const [auth, setAuth]: any = useState();
      useEffect(() => {
        const token = localStorage.getItem("token");
        setAuth(token);
        
        if(token){
          router.push('/')
        }
      }, []);
      return <LoginComponent/>
}