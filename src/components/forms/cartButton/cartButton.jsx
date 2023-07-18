import { useState } from 'react'
import { useRecoilValue } from 'recoil'

import { cartState } from '@/atoms/cart'

import styles from './cartButton.module.css'
import { BsCart4 } from 'react-icons/bs'
import CartMenu from '@/components/cartMenu/cartMenu'

export default function CartButton() {
    const cart = useRecoilValue(cartState)
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.cartbutton} onClick={() => {setOpen(!open)}}>
            <BsCart4 
            size={40} 
            />
            {cart.length !== 0 && <div className={styles.quantity}>{cart.length}</div>}
            {open && <CartMenu />}
        </div>
    )
}