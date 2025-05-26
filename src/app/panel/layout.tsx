import { Metadata } from "next";
export const metadata: Metadata = {
  title: "فروشگاه زنجیره ای - پنل کاربری",
  description: "فروشگاه زنجیره ای - پنل کاربری",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (<>{children}</>);
}