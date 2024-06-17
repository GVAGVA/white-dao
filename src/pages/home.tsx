import Header from "@/components/header/index";
import Solutions from "@/components/home/solutions";
import AwardedBy from "@/components/home/awarded-by";
import Intro from "@/components/home/intro";
import Reviews from "@/components/home/reviews";
import Footer from "@/components/home/footer";
import Product from "@/components/home/product";
import Ecosystem from "@/components/home/ecosystem";
import AiModel from "@/components/home/ai-model";
import OurToken from "@/components/home/our-token";
import Media from "@/components/home/media";
import Team from "@/components/home/team";

const Home = () => {
  return (
    <div className="relative">

      {/* background image */}
      <div className="fixed w-full h-[100vh] flex items-center justify-center -z-10">
        <img src="/assets/images/bg-img.png" className="w-2/5" alt="bg-img" />
      </div>
      {/* background image end */}

      {/* dividers */}
      <div className="w-[1px] h-full absolute top-0 left-[4.3vw] lg:left-[17vw] bg-borderColor" />
      <div className="w-[1px] h-full absolute top-0 left-1/2 bg-borderColor" />
      <div className="w-[1px] h-full absolute top-0 right-[4.3vw] lg:right-[17vw] bg-borderColor" />
      {/* dividers end */}

      <Header />

      <Intro />

      <Product />

      <Reviews />

      <AwardedBy />

      <Solutions />

      <Ecosystem />

      <AiModel />

      <OurToken />

      <Media />

      <Team />

      <Footer />

    </div>
  )
}

export default Home
