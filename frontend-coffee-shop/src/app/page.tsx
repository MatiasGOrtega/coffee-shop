import BannerDiscount from "@/components/bannerDiscount";
import CarouselBanner from "@/components/carouselBanner";
import FeaturedProducts from "@/components/featuredProducts";

export default function Home() {
  return (
    <main>
      <CarouselBanner />
      <FeaturedProducts />
      <BannerDiscount />
    </main>
  );
}
