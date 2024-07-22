import { Link } from "react-router-dom";
import ContainerSmall from "../container-small";

export default function OurToken() {
    return (
        <div className="px-[2.2vw] lg-max:px-[4.3vw]">
            <div className="pb-8">
                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/646201707951b1100b67ddfd_double-dots.svg" loading="lazy" alt="Robot Eyes" className="h-[4px] ml-2 mb-10" />
                <div className="flex">
                    <div className="w-1/2">
                        <div>
                            <div className="relative justify-center items-center mb-12 inline-block">
                                <h2 className="px-6 py-4">WHD Gov Token</h2>
                                <svg viewBox="0 0 604 99" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full">
                                    <path className="path-anim path-anim-sm-1" d="M2 97V19.2426C2 18.447 2.31607 17.6839 2.87868 17.1213L17.1213 2.87868C17.6839 2.31607 18.447 2 19.2426 2H600" stroke="rgb(200, 200, 200)" strokeWidth="2.5" strokeLinecap="round"></path>
                                    <defs>
                                        <linearGradient id="paint0_linear_4345_782" x1="416.5" y1="-9.49999" x2="25.7658" y2="-140.863" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.236372" stopColor="#724CE8"></stop>
                                            <stop offset="1" stopColor="#26F4D0"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <svg viewBox="0 0 298 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 w-1/2">
                                    <path className="path-anim path-anim-sm-2" d="M1.5 17H272.257C274.053 17 274.816 16.6839 276.379 16.1213L294 1.5" stroke="rgb(200, 200, 200)" strokeWidth="2.5" strokeLinecap="round"></path>
                                    <defs>
                                        <linearGradient id="paint0_linear_4345_781" x1="-204.5" y1="24.0001" x2="156.5" y2="-2.00001" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#F8CF3E"></stop>
                                            <stop offset="1" stopColor="#FC6756"></stop>
                                            <stop offset="1" stopColor="#FC6756"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="flex">
                                <div className="w-[21vw]">
                                    <p className="text-xl text-white mb-3">WHD ecosystem is powered by our Gov token. It grants voting power to DAO members to accept or decline any DAO proposals.</p>
                                    <p className="text-xl text-white">Gov token also allows token holders to access various DAO features & services.</p>
                                </div>
                                <div className="w-[26.8vw] lg-max:w-[24.7vw] flex justify-center items-center">
                                    <img src="/assets/images/logo.png" width={200} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[33vw] text-right text-xl *:pr-4 *:border-b *:border-borderColor">
                        <p className="opacity-50 pb-6">FEATURES OF THE TOKEN</p>
                        <p className="py-3">Access into DAO Gov</p>
                        <p className="py-3">Voting on DAO Proposals</p>
                        <p className="py-3">Access into DAO Senate</p>
                        <p className="py-3">Access DAO Products & Features</p>
                        <p className="py-3">Access Partners Services</p>
                    </div>
                </div>
            </div>
            <div className="pb-14">
                <p className="text-xl uppercase opacity-50 mb-6">audited by</p>
                <div className="inline-flex border border-borderColor items-center bg-bgColor z-[990] relative">
                    <div className="px-5 py-4 flex items-center text-xl">
                        <p className="mr-12">To Be Determind</p>
                        <p className="text-white">0x...f00f98</p>
                    </div>
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6447b3caf7dd5f1c0f9f8547_ico-copy.png" loading="lazy" width="16" alt="IDO Copy Icon" data-copy="00" className="cursor-pointer mr-4 hover:opacity-60 duration-200" />
                    <div className="px-4 py-3 border-l border-borderColor hover:opacity-60 duration-200">
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64e883e33124c9b0acc5bdfb_ico-bullet-down.svg" loading="lazy" width="10" alt="Open List" className="contractor-action-icon" />
                    </div>
                </div>
            </div>
            <ContainerSmall>
                <div className="border-y border-borderColor flex relative">
                    <div className="absolute top-0 right-full w-[14.8vw] h-full border-y border-l border-borderColor pl-6 flex items-center text-xl">BUY FROM:</div>
                    <div className="w-1/2 p-10">
                        <Link to='#' className="opacity-80 hover:opacity-100 duration-200 flex justify-between items-center">
                            <h4 className="text-center w-full">TBD</h4>
                            <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e3d7ca7fd751544d4e7e8_icon-link-arrow-simple.svg" alt="" />
                        </Link>
                    </div>
                    <div className="w-1/2 p-10">
                        <Link to='#' className="opacity-80 hover:opacity-100 duration-200 flex justify-between items-center">
                            <h4 className="text-center w-full">TBD</h4>
                            <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e3d7ca7fd751544d4e7e8_icon-link-arrow-simple.svg" alt="" />
                        </Link>
                    </div>
                </div>
            </ContainerSmall>
        </div>
    )
}
