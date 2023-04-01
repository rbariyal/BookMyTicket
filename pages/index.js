import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'; 
import Image from 'next/image'
const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  const [allshows, setshows] = useState(props.allshows)
  return (
  
    <>
      <Head>
        <title>Show-App</title>
        <meta name="description" content="You can book your favourite shows " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.center}>
          <h1>BookMyTicket </h1>
          <span className={styles.description}><p>Book your favourite shows tickets</p></span>
        </div> 
        <Image className={styles.MyImg} src="/cinema.jpg" alt='cinema' width={250} height={155}></Image>
         <h1>Popular shows</h1>
         <div className={styles.grid}>
{allshows.map((item)=>
{
  return <Link href={`/${item.show.externals.imdb}`}  className={styles.card} key={item.show.externals.imdb}> 
        <h2 className={inter.className}>{item.show.name}<span>-&gt;</span></h2>
        <p className={inter.className}>{item.show.language},{item.show.type},{item.show.genres[0]}</p>
        </Link>
       
})}
</div>
      </main>
    </>
  )
}

export async function getServerSideProps(context)
{
  let data=await fetch('http://localhost:3000/api/shows')
  let allshows=await data.json();
  return{
props:{allshows}
  }
}




