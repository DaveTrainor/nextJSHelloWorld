import Link from "next/link"
import { useRouter } from 'next/router'

function Home() {
const router = useRouter()

  const handleClick = () => {
    console.log('Placing Order')
    router.push('/product')
  }
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Bloggy Blog</Link><br></br>
      <Link href="/product">Products</Link><br></br>
      <button onClick={handleClick}>
        Place Order
      </button>
    </div>
  );
}

export default Home;
