import SearchProp from "@/components/elements/SearchProp";
import AboutOne from "@/sections/home-one/AboutOne";
import Banner from "@/sections/home-one/Banner";
import BeforeAfter from "@/sections/home-one/BeforeAfter";
import BlogOne from "@/sections/home-one/BlogOne";
import BrandOne from "@/sections/home-one/BrandOne";
import ContactOne from "@/sections/home-one/ContactOne";
import CounterOne from "@/sections/home-one/CounterOne";
import FooterOne from "@/sections/home-one/FooterOne";
import Header from "@/sections/home-one/Header";
import NewsLetterOne from "@/sections/home-one/NewsLetterOne";
import OfficeLocation from "@/sections/home-one/OfficeLocation";
import PricingOne from "@/sections/home-one/PricingOne";
import ProjectOne from "@/sections/home-one/ProjectOne";
import ServicesOne from "@/sections/home-one/ServicesOne";
import SlidingTestTow from "@/sections/home-one/SlidingTestTow";
import SlidingTextOne from "@/sections/home-one/SlidingTextOne";
import StrickyNavHomeOne from "@/sections/home-one/StrickyNavHomeOne";
import TeamOne from "@/sections/home-one/TeamOne";
import TestimonialOne from "@/sections/home-one/TestimonialOne";
import WhyChooseOne from "@/sections/home-one/WhyChooseOne";

export default function Home() {
  return (
    <div className='page-wrapper'>
      <Header />
      <Banner />
      <SlidingTextOne />
      <AboutOne />
      <ServicesOne />
      <SlidingTestTow />
      <CounterOne />
      <BeforeAfter />
      <WhyChooseOne />
      <ProjectOne />
      <TeamOne />
      <ContactOne />
      <TestimonialOne />
      <BrandOne />
      <OfficeLocation />
      <PricingOne />
      <BlogOne />
      <NewsLetterOne />
      <FooterOne />
      <StrickyNavHomeOne />
      <SearchProp />
    </div>
  );
}
