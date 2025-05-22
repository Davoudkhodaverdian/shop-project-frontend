"use client";
import InitialLayout from '@/components/layouts/initialLayout';
import Login from '../../../components/authentication/login'
import GuestLayout from '@/components/layouts/guestLayout';

const LoginPage = () => {

  return (
    <InitialLayout>
      <GuestLayout><Login /></GuestLayout>
    </InitialLayout>
  )
}

export default LoginPage