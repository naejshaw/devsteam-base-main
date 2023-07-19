import Image from 'next/image'
import styles from './wishOption.module.css'

export default function WishOption ({image, title, onRemove}) {
    return (
        <div className={styles.option}>
            <Image className={styles.image} src={`/products/${image}`} alt={`Produto ${image}`} width={62} height={74}/>
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.remove} onClick={onRemove}>remover</p>
            </div>
        </div>
    )
}