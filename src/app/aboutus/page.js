import { AboutUsClient } from "@/components";
import { notFound } from "next/navigation";

export const metadata = {
  title: `AboutUs | Chennai Trail Club`,
  description: "Chennai Trail Club About Us Page",
  openGraph: {
    title: `AboutUs | Chennai Trail Club`,
    description: "Chennai Trail Club About Us Page",
    type: "website",
  },
};

async function getData() {
  try {
    const [abousUsHeroImgResponse, carouselImagesResponse] = await Promise.all(
      [
        fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/adminservices/aboutusheroimage`
        ),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/adminservices/aboutus`),
      ],
      {
        next: { revalidate: 3600, tags: ["aboutus"] },
      }
    );

    if (abousUsHeroImgResponse.ok && carouselImagesResponse.ok) {
      const [aboutUsImg, carouselImages] = await Promise.all([
        abousUsHeroImgResponse.json(),
        carouselImagesResponse.json(),
      ]);
      return {
        aboutUsImg,
        carouselImages,
      };
    }
    return {};
  } catch (error) {
    notFound();
  }
}

export default async function AboutUs() {
  const { aboutUsImg, carouselImages } = await getData();
  return (
    <main>
      <AboutUsClient
        abousUsHeroImg={aboutUsImg}
        carouselImages={carouselImages}
      />
    </main>
  );
}
