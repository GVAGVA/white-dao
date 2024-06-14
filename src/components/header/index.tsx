import LearnMenu from "./learn-menu"
import SolutionsMenu from "./solutions-menu"
import DevelopersMenu from "./developers-menu"
import CGPTMenu from "./cgpt-menu"
import CommunityMenu from "./community-menu"
import ContactUs from "./contact-us"
import ConnectWalletBtn from "./connect-wallet-btn"
import OurProjects from "./our-projects"

export default function Header() {
    return (
        <nav className="sticky top-0 left-0 w-full flex items-center border-b border-borderColor bg-bgColor z-[9999]">
            <div className="w-[17vw] pl-[4.3vw] lg:pl-[2.2vw] flex items-center">
                <img src="/assets/images/logo.webp" alt="logo" width={42} />
                <h4 className="ml-4">WHD</h4>
            </div>
            <div className="w-[66vw] flex items-center border-x border-borderColor text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                <OurProjects />
                <div className="w-[79.5%] flex items-center justify-evenly">
                    <SolutionsMenu />
                    <DevelopersMenu />
                    <LearnMenu />
                    <CGPTMenu />
                    <CommunityMenu />
                    <ContactUs />
                </div>
            </div>
            <div className="w-[17vw] flex justify-end pr-[4.3%] lg:pr-[2.2vw]">
                <ConnectWalletBtn />
            </div>
        </nav>
    )
}
