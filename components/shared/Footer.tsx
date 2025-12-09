import Image from "next/image";
import PaymentImage from "../../assets/images/payment.png";
import BrandLogo from "../../assets/images/brand.png";
import FacebookIcon from "@/icons/FacebookIcon";
import TwitterIcon from "@/icons/TwitterIcon";
import LinkdinIcon from "@/icons/LinkdinIcon";
import InstgramIcon from "@/icons/InstgramIcon";

export default function Footer() {
  return (
    <footer className="bg-[#393939] text-white w-full mt-10">
      <div className="px-4 md:px-10 lg:px-37 pt-14 pb-10 lg:pb-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-start lg:place-items-center gap-10 lg:gap-16">
          {/* Brand Section */}
          <div className="flex flex-col gap-3.5 w-full">
            <div className="flex items-end">
              <Image
                src={BrandLogo}
                width={132}
                height={48}
                alt="brand_image"
              />
            </div>

            <div>
              <p className="text-[#00bcd4] text-lg font-normal mb-2">
                Got questions? Call us 24/7!
              </p>
            </div>
            <div className="text-sm font-normal text-white">
              <p className="">03 111 666 144</p>
              <p className="">0317 1779015</p>
            </div>

            <div className="text-base font-normal">
              <p className="text-[#00bcd4] ">Contact info</p>
              <p className="">info@winstore.pk</p>
            </div>

            <div className="flex gap-6">
              <FacebookIcon className="social-icon-size" />
              <TwitterIcon className="w-5.5 h-4.5" />
              <LinkdinIcon className="w-3.5 h-3.5" />
              <InstgramIcon className="w-5.5 h-5.5" />
            </div>
          </div>

          {/* Trending Section */}
          <div className="w-full">
            <h3 className="text-primary-soft font-normal mb-5">Trending</h3>
            <ul className="space-y-3">
              <li className="text-xl text-primary-soft font-normal">
                Installments
              </li>
              <li className="footer-menu-item">Electronics</li>
              <li className="footer-menu-item">Grocery</li>
              <li className="footer-menu-item">Health & Beauty</li>
              <li className="footer-menu-item">Home Appliances</li>
              <li className="footer-menu-item">Mobile Accessories</li>
            </ul>
          </div>

          {/* Information Section */}
          <div className="w-full">
            <h3 className="text-primary-soft font-normal mb-5">Information</h3>
            <ul className="space-y-3">
              <li className="footer-menu-item">About Us</li>
              <li className="footer-menu-item">Contact Us</li>
              <li className="footer-menu-item">FAQs</li>
              <li className="footer-menu-item">Shipping & Return</li>
              <li className="footer-menu-item">Privacy policy</li>
              <li className="footer-menu-item">Terms & Conditions</li>
            </ul>
          </div>

          {/* Customer Care Section */}
          <div className="w-full">
            <h3 className="text-primary-soft font-normal mb-5">
              Customer Care
            </h3>
            <ul className="space-y-3">
              <li className="footer-menu-item">My Account</li>
              <li className="footer-menu-item">Track Your Order</li>
              <li className="footer-menu-item">Recently Viewed</li>
              <li className="footer-menu-item">Wishlist</li>
              <li className="footer-menu-item">Compare</li>
              <li className="footer-menu-item">Become a Vendor</li>
            </ul>
          </div>
        </div>

        {/* Payment image */}
        <div className="flex justify-center lg:justify-end mt-9 lg:mr-24">
          <Image
            src={PaymentImage}
            alt="payment image"
            width={421}
            height={55}
          />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#161616] h-auto py-4 lg:h-15 flex items-center justify-center lg:justify-start">
        <p className="text-[13px] text-center font-normal px-4 lg:pl-31">
          © 2021 Winstore. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
