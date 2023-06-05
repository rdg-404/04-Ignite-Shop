import Image from 'next/image'
import camiseta01 from '../assets/camisetas/1.png'
import camiseta02 from '../assets/camisetas/2.png'
import camiseta03 from '../assets/camisetas/3.png'

export default function Home() {
  return (
    <div>
      <div>
        <Image src={camiseta01} width={520} height={480} alt=""></Image>

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </div>

      <div>
        <Image src={camiseta02} width={520} height={480} alt=""></Image>

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </div>

      <div>
        <Image src={camiseta03} width={520} height={480} alt=""></Image>

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </div>
    </div>
  )
}
