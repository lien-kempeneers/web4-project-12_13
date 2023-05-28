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

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Tasks</title>
      </Head>
      <Header/>
      </>
    );
}
