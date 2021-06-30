
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className='text-center' >
    <h1 >Home page</h1>
    <Link href="/products" >
      <a className="link__override"><h6>See all products</h6></a>
    </Link>
 
    </div>
  )
}
