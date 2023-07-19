import styles from './navbar.module.css'
import { BsCart4 } from 'react-icons/bs'
import { BsStars } from 'react-icons/bs'

import Logo from '@/components/logo/logo'
import Input from '@/components/forms/input/input'
import CartButton from '@/components/forms/cartButton/cartButton'
import WishButton from '@/components/forms/wishButton/wishButton'

export default function Navbar () {
    return(
        <nav className={styles.navbar}>
            <Logo />
            <div className={styles.search}>
                <Input type="text" placeholder="Buscar" fullWidth />
            </div>
            <CartButton />
            <WishButton />
        </nav>
    )
}