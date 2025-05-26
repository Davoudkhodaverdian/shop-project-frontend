import products from '@/components/common/products/products.json';
import MainLayout from "@/components/layouts/mainLayout";
import ProductCmp from "@/components/product";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ProductsPage({ params }: Props) {
  const { slug } = await params
  // fetch data
  const product = products?.find(product => (product?.slug === slug));
  if (!product) return notFound();
  return (
    <MainLayout>
      <main className="m-[20px]">
        <ProductCmp data={product} />
      </main>
    </MainLayout>
  )
}
