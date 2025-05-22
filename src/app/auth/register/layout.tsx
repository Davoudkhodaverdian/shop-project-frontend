import { Metadata } from "next";

export const metadata: Metadata = {
  title: "فروشگاه زنجیره ای - ثبت نام",
  description: "فروشگاه زنجیره ای - ثبت نام",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (<>{children}</>);
}