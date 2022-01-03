import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss';
import { signIn, signOut, useSession } from 'next-auth/react'

export function SignInButton() {
    const { data: session } = useSession()
    return session ? (
        <button
            onClick={() => signOut()} 
            className={styles.sigInButton}
            type='button'>
                <img src={session.user.image} alt="avatar user"/>
                {session.user.name}
                <FiX color='#737380' className={styles.closeIcon} />
        </button>

    ) :(
        <button
            onClick={() => signIn()} 
            className={styles.sigInButton}
            type='button'>
                <FaGithub color="#eba417" />
                Sign in with Github
        </button>
    )
}