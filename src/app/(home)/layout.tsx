import { Metadata } from "next";

export const metadata: Metadata = {
  title: "فروشگاه زنجیره ای - صفحه اصلی",
  description: "فروشگاه زنجیره ای - صفحه اصلی",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (<>{children}</>);
}