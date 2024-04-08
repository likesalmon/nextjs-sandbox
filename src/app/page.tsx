// 'use client';
// import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      {/*Foo*/}

      <Navigation />
      <Button>Foo</Button>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </main>
  );
}
