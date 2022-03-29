import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from '../components/Login'
import Menu from '../components/Menu'
import GetStarted from '../components/GetStarted'
import { UsersContext } from '../components/UsersContext'
import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import handPic from '../public/fallingmoney.jpeg'





export default function Home() {
  const user = useContext(UsersContext) 
  const router = useRouter()
  
  if(user){
    // load logged in pages
  
  return router.push(`/usr/${user}`)
 
  //load the no user page
  }else{
    return(
      <>
      <nav>
      </nav>
      <main>
      <GetStarted></GetStarted>
      </main>
      </>
    )
  }

}

