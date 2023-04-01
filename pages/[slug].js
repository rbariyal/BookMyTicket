import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'; 
import styles from '@/styles/Slug.module.css'
import Link from 'next/link';
import Image from 'next/image';

const Slug = (props) => {
const [show,setshow]=useState(props.myshow);
useEffect(() => {
  import('bootstrap/dist/js/bootstrap');
}, []);

  return (<div className={styles.container} >
    <main className={styles.main} >
    <h1>{show && show.name}</h1>
    <hr />
    <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
    <Link href={{
            pathname: "/Book",
            query: {moviename:show.name}, // the data
          }} className='btn btn-success' >Book</Link>
          <Image className={styles.MyImg} src="/show.jpg" alt='show' width={345} height={230}></Image>
    </main>
    </div>
  )
}



export async function getServerSideProps(context)
{
  
   
        const {slug}=context.query
       
       let data=await fetch(`http://localhost:3000/api/getshow?imdb=${slug}`)

  let myshow=await data.json();
  return{
props:{myshow}
  }
}

export default Slug;