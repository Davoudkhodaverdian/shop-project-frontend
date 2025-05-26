import { Metadata } from "next";
export const metadata: Metadata = {
  title: "فروشگاه زنجیره ای - محصولات",
  description: "فروشگاه زنجیره ای - محصولات",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (<>{children}</>);
}