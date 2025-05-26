import { Metadata } from "next";
export const metadata: Metadata = {
  title: "فروشگاه زنجیره ای - سبد خرید",
  description: "فروشگاه زنجیره ای - سبد خرید",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (<>{children}</>);
}