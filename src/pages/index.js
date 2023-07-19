import Head from 'next/head'
import {useRecoilState} from 'recoil'

import {cartState} from '@/atoms/cart'
import {wishState} from '@/atoms/wish'

import styles from '@/styles/index.module.css'

import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard  from '@/components/cards/saleCard/saleCard'
import GameCard from '@/components/cards/gameCard/gameCard'

export default function Home() {
  const [cart, setCart] = useRecoilState(cartState)

  const handleAddProduct = (info) => {
    setCart([...cart, info])
  }

  const [wish, setWish] = useRecoilState(wishState)

  const handleAddWish = (info) => {
    setWish([...wish, info])
  }
 
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Container>
          <div className={styles.session}>
            <Subtitle>promoções</Subtitle>
            <div className={styles.salecontainer}>
              <SaleCard
                image= 'league-of-legends.jpg'
                discount= '90%'
                fullPrice= '199,90'
                discountPrice= '57,90'
                onAdd={() => 
                  handleAddProduct({name: 'League of Legends', price: 57.9, image: 'league-of-legends.jpg'})
                }
                onAddWish={() => 
                  handleAddWish({name: 'League of Legends', image: 'league-of-legends.jpg'})
                }
              />
              <SaleCard
                image= 'dota-2.jpg'
                discount= '50%'
                fullPrice= '59,90'
                discountPrice= '29,90'
                onAdd={() => 
                  handleAddProduct({name: 'Dota 2', price: 29.9, image: 'dota-2.jpg'})
                }
                onAddWish={() => 
                  handleAddWish({name: 'Dota 2', image: 'dota-2.jpg'})
                }
              />
              <SaleCard
                image= 'valorant.jpg'
                discount= '75%'
                fullPrice= '149,90'
                discountPrice= '67,90'
                onAdd={() => 
                  handleAddProduct({name: 'Valorant', price: 67.9, image: 'valorant.jpg'})
                }
                onAddWish={() => 
                  handleAddWish({name: 'Valorant', image: 'valorant.jpg'})
                }
              />
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle>outros jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard
                onAdd={() => 
                  handleAddProduct({name: 'Counter Strike', price: 99.9, image: 'counter-strike.jpg'})
                }
                onAddWish={() => 
                  handleAddWish({name: 'Counter Strike', image: 'counter-strike.jpg'})
                }
              />            
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
