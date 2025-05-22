"use client"
import Home from "@/components/home";
// import { useRouter } from 'next/navigation';
import MainLayout from '@/components/layouts/mainLayout';
import InitialLayout from "@/components/layouts/initialLayout";

export default function HomePage() {

  return (
    <InitialLayout>
      <MainLayout><Home /></MainLayout>
    </InitialLayout>
  )
}
