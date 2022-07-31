import dynamic from 'next/dynamic'

const ProductList = dynamic(
  () => import('../components/ProductList'),
  { ssr: false }
)

export default function Home() {
  return (<div>
      <ProductList/>
  </div>)
}
