import Products from "@/components/common/products";
import MainLayout from "@/components/layouts/mainLayout";
import getProducts from "@/fundamental/getProducts";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
export default async function ProductPage({ searchParams }: Props) {
  const params = await searchParams;
  const page = params["page"] || "1";
  const perPage = params["per-page"] || "10";
  // fetch products data
  const paginatedData = await getProducts(page as string, perPage as string);
  return (
    <MainLayout>
      <main>
        <Products products={paginatedData} />
      </main>
    </MainLayout>
  )
}
