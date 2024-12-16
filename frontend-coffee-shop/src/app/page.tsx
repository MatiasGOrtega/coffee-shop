import BannerDiscount from "@/components/bannerDiscount";
import BannerProduct from "@/components/BannerProduct";
import CarouselBanner from "@/components/carouselBanner";
import ChooseCategory from "@/components/chooseCategory";
import FeaturedProducts from "@/components/featuredProducts";

export default function Home() {
  return (
    <main>
      <CarouselBanner />
      <FeaturedProducts />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProduct />
    </main>
  );
}
