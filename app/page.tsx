import Banner from "@/components/home/Banner";
import BestDeals from "@/components/home/BestDeals";
import Category from "@/components/home/Category";
import CategorySlider from "@/components/home/CategorySlider";
import Divider from "@/components/home/Divider";
import NewArrivals from "@/components/home/NewArrivals";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Banner />
      <Category />
      <Divider />
      <NewArrivals />
      <BestDeals />
      <Footer />
    </div>
  );
}
