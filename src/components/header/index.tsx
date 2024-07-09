import { Link } from "react-router-dom"
import ConnectWalletBtn from "./connect-wallet-btn"
import WHDFeatures from "./whd-features"
import DAOGovernance from "./dao-governance"
import SafetyRating from "./safety-rating"
import AIAudit from "./ai-audit"
import Launchpad from "./launchpad"
import GovToken from "./gov-token"
import Community from "./community"

export default function Header() {
    return (
        <nav className="sticky top-0 left-0 w-full flex items-center border-b border-borderColor bg-bgColor z-[9999]">
            <div className="w-[17vw] pl-[4.3vw] lg:pl-[2.2vw] flex items-center select-none">
                <Link to='/' className="flex items-center cursor-pointer">
                    <img src="/assets/images/logo.png" alt="logo" width={64} />
                    <h4 className="ml-4">WHD</h4>
                </Link>
            </div>
            <div className="w-[66vw] flex items-center border-x border-borderColor text-[13px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]">
                <WHDFeatures />
                <div className="w-[79.5%] flex items-center justify-evenly">
                    <DAOGovernance />
                    <SafetyRating />
                    <AIAudit />
                    <Launchpad />
                    <GovToken />
                    <Community />
                </div>
            </div>
            <div className="w-[17vw] flex justify-end pr-[4.3%] lg:pr-[2.2vw]">
                <ConnectWalletBtn />
            </div>
        </nav>
    )
}
