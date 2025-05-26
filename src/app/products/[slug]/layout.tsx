import products from '@/components/common/products/products.json';
import type { Metadata } from 'next';
type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // read route params
  const { slug } = await params

  // fetch data
  const product = products?.find(product => (product?.slug === slug));

  return {
    title: product?.name,
    description: product?.description
  }
}
export async function generateStaticParams() {
  // fetch data
  return products.map((product) => ({
    slug: product?.slug,
  }))
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (<>{children}</>);
}