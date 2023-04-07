
import { Lora } from 'next/font/google'
import Link from 'next/link'
import Categories from './components/cards/Categories'
import Products from './components/cards/Products'
const lora = Lora({
   subsets: ['latin','vietnamese'] ,
   variable :'--font-lora',
  })

export default function Home() {
  return (
    <main >
    
      <Categories/>
      <Products/>
      
   
 
    </main>
  )
}
