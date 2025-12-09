import Image from "next/image";
import PaymentImage from "../../assets/images/payment.png";
import BrandLogo from "../../assets/images/brand.png";
import FacebookIcon from "@/icons/FacebookIcon";
import TwitterIcon from "@/icons/TwitterIcon";
import LinkdinIcon from "@/icons/LinkdinIcon";
import InstgramIcon from "@/icons/InstgramIcon";

export default function Footer() {
  return (
    <footer className="bg-[#393939] text-white w-full">
      <div className="px-37 pt-14 pb-30">
        <div className="grid grid-cols-4 justify-center gap-16">
          {/* Brand Section */}
          <div className="flex flex-col gap-3.5">
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
              <TwitterIcon className="social-icon-size" />
              <LinkdinIcon className="social-icon-size" />
              <InstgramIcon className="social-icon-size" />
            </div>
          </div>

          {/* Trending Section */}
          <div>
            <h3 className="text-[#00bcd4] text-[15px] font-normal mb-5">
              Trending
            </h3>
            <ul className="space-y-[10px]">
              <li className="text-[13px] font-normal cursor-pointer hover:text-[#00bcd4] transition">
                Installments
              </li>
              <li className="text-[13px] font-normal cursor-pointer hover:text-[#00bcd4] transition">
                Electronics
              </li>
              <li className="text-[13px] font-normal cursor-pointer hover:text-[#00bcd4] transition">
                Grocery
              </li>
              <li className="text-[13px] font-normal cursor-pointer hover:text-[#00bcd4] transition">
                Health & Beauty
              </li>
              <li className="text-[13px] font-normal cursor-pointer hover:text-[#00bcd4] transition">
                Home Appliances
              </li>
              <li className="text-[13px] font-normal cursor-pointer hover:text-[#00bcd4] transition">
                Mobile Accessories
              </li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="text-[#00bcd4] text-[15px] font-normal mb-5">
              Information
            </h3>
            <ul className="space-y-[10px]">
              <li className="text-[13px] font-normal cursor-pointer hover:text-[#00bcd4] transition">
                About Us
              </li>
              <li className="text-[13px] font-normal cursor-pointer hover:text-[#00bcd4] transition">
                Contact Us
              </li>
              <li className="text-[13px] font-normal cursor-pointer hover:text-[#00bcd4] transition">
                FAQs
              </li>
              <li className="text-[13px] font-normal cursor-pointer hover:text-[#00bcd4] transition">
                Shipping & Return
              </li>
              <li className="text-[13px] font-normal cursor-pointer hover:text-[#00bcd4] transition">
                Privacy policy
              </li>
              <li className="text-[13px] font-normal cursor-pointer hover:text-[#00bcd4] transition">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Customer Care Section */}
          <div>
            <h3 className="text-[#00bcd4] text-[15px] font-normal mb-5">
              Customer Care
            </h3>
            <ul className="space-y-[10px]">
              <li className="text-[13px] font-normal cursor-pointer hover:text-[#00bcd4] transition">
                My Account
              </li>
              <li className="text-[13px] font-normal cursor-pointer hover:text-[#00bcd4] transition">
                Track Your Order
              </li>
              <li className="text-[13px] font-normal cursor-pointer hover:text-[#00bcd4] transition">
                Recently Viewed
              </li>
              <li className="text-[13px] font-normal cursor-pointer hover:text-[#00bcd4] transition">
                Wishlist
              </li>
              <li className="text-[13px] font-normal cursor-pointer hover:text-[#00bcd4] transition">
                Compare
              </li>
              <li className="text-[13px] font-normal cursor-pointer hover:text-[#00bcd4] transition">
                Become a Vendor
              </li>
            </ul>
          </div>
        </div>

        {/* Payment image */}
        <div className="flex justify-end mt-2.5">
          <Image
            src={PaymentImage}
            alt="payment image"
            width={420}
            height={55}
          />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#161616] h-15 mt-6 flex items-center">
        <p className="text-[13px] text-center font-normal pl-31">
          © 2021 Winstore. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
