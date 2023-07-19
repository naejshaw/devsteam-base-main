import {useRecoilState} from 'recoil'

import {wishState} from '@/atoms/wish'

import styles from './wishMenu.module.css'
import WishOption from '@/components/wishOption/wishOption'

export default function WishMenu(){
    const [wish, setWish] = useRecoilState(wishState)
     
    const handleRemoveProduct = (pos) => {
        setWish(wish.filter((obj, posObj) => posObj !== pos))
    }

    return(
        <div className={styles.menu}>
            <div className={styles.options}>
                {
                    wish.length == 0 && <p>Nenhum produto no seu carrinho</p>
                }
                {
                    wish.map((wishInfo, pos) =>
                        <WishOption
                            image={wishInfo.image}
                            title={wishInfo.title}
                            onRemove={() => handleRemoveProduct(pos)}
                            key={`wish-info-${pos}`}
                        />
                    )
                }
            </div>
        </div>
    )
}