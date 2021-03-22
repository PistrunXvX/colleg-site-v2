import Link from "next/link";
import Head from 'next/head';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title> Главная </title>
      </Head>

      <div>
        <h1>Main Page</h1>
        <Link href="/students">
          <a>Students</a>
        </Link>
        <Footer/>
      </div>
    </>
  )
};
