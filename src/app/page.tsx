// 'use client';
// import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Navigation from '@/components/Navigation';
import { H1 } from '@/components/H1';

export default function Home() {
  return (
    <main className="min-h-screen">
      <H1>Home</H1>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </main>
  );
}
