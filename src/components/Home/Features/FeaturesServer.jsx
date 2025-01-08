import { Features } from '@/components';
import ErrorPage from '@/components/Error/Error';
import { notFound } from 'next/navigation';

async function getData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/adminservices/ourfeatures`,
      {
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) {
      return [];
    }
    return await res.json();
  } catch (error) {
    notFound();
  }
}

export default async function FeaturesServer() {
  const features = await getData();
  if (!features) {
    return <ErrorPage />;
  }
  return <Features features={features} />;
}
