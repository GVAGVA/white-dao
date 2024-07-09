import { Link } from "react-router-dom";
import ContainerSmall from "../container-small";

export default function Roadmap() {
    return (
        <div className="pt-[114px] pb-[76px] px-[2.2vw] lg-max:px-[4.3vw]">
            <div className="pb-28">
                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/646201707951b1100b67ddfd_double-dots.svg" loading="lazy" alt="Robot Eyes" className="h-[4px] ml-2 mb-10" />
                <div className="flex text-white">
                    <div className="w-1/2">
                        <h2>Explore our</h2>
                        <h2>
                            <span className="px-4 mr-6 relative">
                                Roadmap
                                <span className="absolute -top-2 left-2 w-full h-[1px] bg-borderColorThick" />
                                <span className="absolute bottom-2 -right-2 w-[1px] h-full bg-borderColorThick" />
                                <span className="absolute -bottom-2 right-2 w-full h-[1px] bg-borderColorThick" />
                                <span className="absolute top-2 -left-2 w-[1px] h-full bg-borderColorThick" />
                                <span className="absolute top-0 -translate-y-1/2 left-0 w-[1px] h-[1.414rem] rotate-45 bg-borderColorThick" />
                                <span className="absolute bottom-0 translate-y-1/2 right-0 w-[1px] h-[1.414rem] rotate-45 bg-borderColorThick" />
                            </span>
                        </h2>
                    </div>
                    <div className="w-[30vw] px-6 py-4">
                        <p className="text-2xl">
                            This is a short version of our roadmap.
                            <br />
                            Read full version{' '}
                            <Link to='#' className="underline hover:no-underline">here</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[33vw] ml-[14.8vw] mb-32 relative">
                {/* <div className="absolute top-0 right-full w-[14.8vw] flex gap-4">
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6446951576624313547bb1bd_arrow-next.svg" className="w-[64px] h-[64px] cursor-pointer hover:opacity-70 duration-150 rotate-180" alt="" />
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6446951576624313547bb1bd_arrow-next.svg" className="w-[64px] h-[64px] cursor-pointer hover:opacity-70 duration-150" alt="" />
                </div> */}
                <div className="flex w-max">
                    <div className="w-[33vw] border-y border-borderColor flex flex-col">
                        <div className="flex">
                            <p className="flex gap-6 border-b border-borderColor px-8 py-6 opacity-60">
                                <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180" />
                                RDMP 1
                            </p>
                            <p className="border border-white px-8 flex items-center text-xl">IN PROGRESS</p>
                        </div>
                        <div className="px-8 py-6 text-2xl text-white border-b border-borderColor">
                            2024-2025 INITIATIVE
                        </div>
                        <div className="p-8 h-full text-xl grid content-between">
                            <div>
                                <div className="text-white mb-4 flex items-start gap-4">
                                    <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 my-2 opacity-60" />
                                    <p>DAO Framework and DAO Constitution (completed)</p>
                                </div>
                                <div className="text-white mb-4 flex items-start gap-4">
                                    <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 my-2 opacity-60" />
                                    <p>Legal Entity Registration (White Hat DAO LLC) (Completed)</p>
                                </div>
                                <div className="text-white mb-4 flex items-start gap-4">
                                    <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 my-2 opacity-60" />
                                    <p>WHD Platform and Safety Rating apps (undergoing optimization)</p>
                                </div>
                                <div className="text-white mb-4 flex items-start gap-4">
                                    <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 my-2 opacity-60" />
                                    <p>Development of safety analysts & educational Program</p>
                                </div>
                                <div className="text-white mb-4 flex items-start gap-4">
                                    <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 my-2 opacity-60" />
                                    <p>Quest-based DAO Membership NFT (Sybil Resistant)</p>
                                </div>
                                <div className="text-white mb-4 flex items-start gap-4">
                                    <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 my-2 opacity-60" />
                                    <p>Decentralized verification system</p>
                                </div>
                                <div className="text-white mb-4 flex items-start gap-4">
                                    <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 my-2 opacity-60" />
                                    <p>Distribute Membership NFTs</p>
                                </div>
                            </div>
                            <Link to='#' className="border border-borderColor p-8 flex justify-between items-center">
                                <p>MORE DETAILS</p>
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6437b8bc549a694211710a04_arrow-right-color.svg"
                                    alt=""
                                    className="w-6 h-6"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="w-[33vw] border-y border-borderColor flex flex-col">
                        <div className="flex">
                            <p className="flex gap-6 border-b border-r border-borderColor px-8 py-6 opacity-60">
                                <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180" />
                                RDMP 2
                            </p>
                        </div>
                        <div className="px-8 py-6 text-2xl text-white border-b border-borderColor">
                            2025-2026 INITIATIVE
                        </div>
                        <div className="p-8 h-full text-xl grid content-between">
                            <div>
                                <div className="text-white mb-4 flex items-start gap-4">
                                    <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 my-2 opacity-60" />
                                    <p>AI Security Audit App (Under development)</p>
                                </div>
                                <div className="text-white mb-4 flex items-start gap-4">
                                    <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 my-2 opacity-60" />
                                    <p>Governance App.</p>
                                </div>
                                <div className="text-white mb-4 flex items-start gap-4">
                                    <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 my-2 opacity-60" />
                                    <p>Decentralized Community Forum.</p>
                                </div>
                                <div className="text-white mb-4 flex items-start gap-4">
                                    <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 my-2 opacity-60" />
                                    <p>On-chain Governance Mechanism.</p>
                                </div>
                                <div className="text-white mb-4 flex items-start gap-4">
                                    <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 my-2 opacity-60" />
                                    <p>Live Safety Rating, API creation.</p>
                                </div>
                                <div className="text-white mb-4 flex items-start gap-4">
                                    <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 my-2 opacity-60" />
                                    <p>WHD Decentralized Launchpad (MultiChain)</p>
                                </div>
                                <div className="text-white mb-4 flex items-start gap-4">
                                    <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 my-2 opacity-60" />
                                    <p>Governance Token Launch.</p>
                                </div>
                                <div className="text-white mb-4 flex items-start gap-4">
                                    <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 my-2 opacity-60" />
                                    <p>Distribution of Governance tokens.</p>
                                </div>
                            </div>
                            <Link to='#' className="border border-borderColor p-8 flex justify-between items-center">
                                <p>MORE DETAILS</p>
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6437b8bc549a694211710a04_arrow-right-color.svg"
                                    alt=""
                                    className="w-6 h-6"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
