import Head from 'next/head'
import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from '@/styles/Clients.module.scss'
import {useEffect, useState} from "react";
import {ClientData} from "@/types";
import {useRouter} from "next/router";
import {PageProps} from "@/reducers/stateReducer";

const inter = Inter({subsets: ['latin']})

export default function EditClientById({state, dispatch}: PageProps) {

    const router = useRouter()
    const {id} = router.query

    const [client, setClient] = useState<ClientData>();

    useEffect(() => {
        if (id) {
            fetch(`/api/clients/${id}`)
                .then(res => {
                    // after receiving the request from the API, we check whether the
                    //  error code is 2xx
                    if (!res.ok) {
                        // make the promise be rejected if we didn't get a 2xx response
                        throw new Error("Not 2xx response", {cause: res});
                    } else {
                        // got the desired response
                        return res.json()
                    }
                })
                .then(data => setClient(data))
                .catch(err => console.log(err))
        }
    }, [id])

    return (
        <>
            <Head>
                <title>Clients</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main
                className={styles.main}
            >
                {/*TODO aici vom crea un formular pentru modificarea paginii.*/}
                {
                    client ? (
                        <div className={styles.clientItem} >
                            <h2>{client?.name}</h2>
                            {client?.age}, ID={client?.id}
                        </div>
                    ) : (
                        <h1>The user couldn't be found. {id}</h1>

                    )
                    // if (a>2) 2 else 4
                    //
                    // // the whole expression
                    // //          (a>2)?2:4
                    // //          is replaced with either 2
                    // //          or 4, depending on the truth value of a>2
                    // (a>2) ? 2 : 4  // ternary/conditional operator
                }

            </main>

        </>
    )
}