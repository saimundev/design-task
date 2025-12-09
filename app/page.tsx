import Banner from "@/components/home/Banner";
import BestDeals from "@/components/home/BestDeals";
import Category from "@/components/home/Category";
import CategorySlider from "@/components/home/CategorySlider";
import Divider from "@/components/home/Divider";
import NewArrivals from "@/components/home/NewArrivals";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import CardSkeleton from "@/components/skeleton/CardSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Banner />
      <Suspense fallback={<CardSkeleton />}>
        <Category />
      </Suspense>
      <Divider />
      <Suspense fallback={<CardSkeleton />}>
        <NewArrivals />
      </Suspense>

      <BestDeals />
      <Footer />
    </div>
  );
}
