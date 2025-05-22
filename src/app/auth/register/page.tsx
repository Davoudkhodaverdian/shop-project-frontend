"use client";
import InitialLayout from '@/components/layouts/initialLayout';
import GuestLayout from '@/components/layouts/guestLayout';
import Register from '@/components/authentication/register';

const RegisterPage = () => {

  return (
    <InitialLayout>
      <GuestLayout><Register /></GuestLayout>
    </InitialLayout>
  )
}

export default RegisterPage