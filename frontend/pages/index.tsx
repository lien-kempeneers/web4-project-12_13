import Head from 'next/head'
import Image from 'next/image'
import { David_Libre, Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { set } from 'react-hook-form'
import { User } from '@/types'



export default function Home() {

const [user, setUser] = useState<User>();

  useEffect(() => {
    if (typeof sessionStorage !== "undefined"){
      const storedUser = sessionStorage.getItem("user");
      if (storedUser){
        setUser(JSON.parse(storedUser));
      }
  }
}, [user]);

if (user ==null){
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Tasks</title>
      </Head>
        <div className="d-flex align-items-center bg-white p-3 text-center">
          <h1>Task App</h1>
          
        </div>
        <div className="row d-flex p-4 bg-white">
          <h2>Welcome to this site!</h2>
          <div className="col d-flex p-5 bg-white">
            <p>If you want to use our site, please register!</p>
          </div>
          <div className="col d-flex p-5 bg-white">
            <p>Or if you already have an account, please login!</p>
          </div>
        </div>
    </>
  );
} else {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <Header></Header>
    </>
    );
  }
}
