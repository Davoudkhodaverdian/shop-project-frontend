import MainLayout from "@/components/layouts/mainLayout";
import getProducts from "@/fundamental/getProducts";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
export default async function CartPage({ searchParams }: Props) {

  const params = await searchParams;
  const page = params["page"] || "1";
  const perPage = params["per-page"] || "10";
  // fetch products data
  const paginatedData = await getProducts(page as string, perPage as string);
  console.log({ paginatedData });
  // try {
  //   const user = await callApi().get('/auth/user');
  //   console.log({ user });

  // } catch (error) {
  //   console.log({ error });
  // }
  return (
    <MainLayout>
      <main className="px-5 py-20">متاسفانه این صفحه در دست توسعه میباشد</main>
    </MainLayout>
  )
}
