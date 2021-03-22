import Head from 'next/head';
import { Container } from 'react-bootstrap';
import HeaderAdmin from '../../components/adminPages/HeaderAdmin';

export default function HomeAdmin () {
    return (
        <>
            <Head>
                <title>
                    Панель администратора
                </title>
            </Head>
            <HeaderAdmin/>
        </>
    )
}

