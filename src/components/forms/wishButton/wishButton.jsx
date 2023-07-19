import { useState } from 'react'
import { useRecoilValue } from 'recoil'

import { wishState } from '@/atoms/wish'

import styles from './cartButton.module.css'
import { BsStars } from 'react-icons/bs'
import WishMenu from '@/components/wishMenu/wishMenu'

export default function CartButton() {
    const wish = useRecoilValue(wishState)
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.wishbutton} onClick={() => {setOpen(!open)}}>
            <BsStars 
            size={40} 
            />
            {wish.length !== 0 && <div className={styles.quantity}>{wish.length}</div>}
            {open && <WishMenu />}
        </div>
    )
}