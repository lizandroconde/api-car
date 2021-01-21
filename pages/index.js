import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <Link as="/login" href="/login" >
      <a >
        Login
      </a>
    </Link>
    </>
  )
}
