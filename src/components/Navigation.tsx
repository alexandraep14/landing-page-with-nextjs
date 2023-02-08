import Link from "next/link";

import styles from "@/styles/Navigation.module.scss"
import {useAuth0} from "@auth0/auth0-react";


export default function () {
    const {
        isAuthenticated,
        loginWithRedirect,
        logout
    } = useAuth0();



    return (
        <nav className={styles.navigation}>
            <Link href={'/'}>Home</Link>
            <Link href={'/clients'}>Clients</Link>
            {
                !isAuthenticated ? (
                    <button onClick={e => loginWithRedirect()}>Log in</button>
                ) : (
                    <button onClick={() => {
                        // @ts-ignore
                        logout({ returnTo: window.location.origin });
                    }}>Log out</button>
                )
            }

        </nav>
    )
}

