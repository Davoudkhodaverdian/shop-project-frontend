
import "./globals.css";
import InitialLayout from "@/components/layouts/initialLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body dir="rtl">
        <InitialLayout>{children}</InitialLayout>
      </body>
    </html>
  );
}
