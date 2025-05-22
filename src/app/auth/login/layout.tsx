import { Metadata } from "next";
export const metadata: Metadata = {
  title: "فروشگاه زنجیره ای - ورود",
  description: "فروشگاه زنجیره ای - ورود",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (<>{children}</>);
}