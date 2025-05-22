import Home from "@/components/home";
import InitialLayout from "@/components/layouts/initialLayout";

export default async function HomePage() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json();
  return (
    <InitialLayout>
      <Home />
    </InitialLayout>
  );
}
