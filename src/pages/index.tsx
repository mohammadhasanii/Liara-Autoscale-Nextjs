import Image from "next/image";
import { Inter } from "next/font/google";
import MainDashboardComponent from "@/components/dashboard/Main";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  
  const router = useRouter();
  const [auth, setAuth]: any = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuth(token);
    console.log(token);
    if(!token){
      router.push('/auth/login')
    }
  }, []);
  return (
    <React.Fragment>
      <MainDashboardComponent />
    </React.Fragment>
  );
}
