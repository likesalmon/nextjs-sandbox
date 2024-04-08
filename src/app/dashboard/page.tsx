import { Metadata } from 'next';
import { H1 } from '@/components/H1';

export const metadata: Metadata = {
  title: 'Dashboard/Settings',
};
export default function Page() {
  return <H1>Dashboard</H1>;
}
