import { RecentActivities } from '@/components';
import ErrorPage from '@/components/Error/Error';
import { notFound } from 'next/navigation';
async function getData() {
  try {
    const [imagesRes, mobileImagesRes] = await Promise.all(
      [
        fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/adminservices/recentactivities`
        ),
        fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/adminservices/recentactivitiesmobile`
        ),
      ],
      {
        next: { revalidate: 3600 },
      }
    );
    if (!imagesRes.ok || !mobileImagesRes.ok) {
      console.error('Server Error : failed to fetch data');
    } else {
      const [images, mobileImages] = await Promise.all([
        imagesRes.json(),
        mobileImagesRes.json(),
      ]);
      return {
        images,
        mobileImages,
      };
    }
  } catch (error) {
    notFound();
  }
}
export default async function RecentActivitiesServer() {
  const { images, mobileImages } = await getData();
  if (!images || !mobileImages) {
    return <ErrorPage />;
  }
  return (
    <main>
      <RecentActivities images={images} mobileImages={mobileImages} />
    </main>
  );
}
