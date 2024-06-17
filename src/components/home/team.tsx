import { Link } from "react-router-dom";
import ContainerSmall from "../container-small";

export default function Team() {
    return (
        <div className="pt-[114px] pb-[76px] px-[2.2vw] lg-max:px-[4.3vw]">
            <div className="pb-28">
                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/646201707951b1100b67ddfd_double-dots.svg" loading="lazy" alt="Robot Eyes" className="h-[4px] ml-2 mb-10" />
                <div className="flex text-white">
                    <div className="w-1/2">
                        <h1>
                            <span className="px-4 mr-6 relative">
                                Faces
                                <span className="absolute -top-2 left-2 w-full h-[1px] bg-borderColorThick" />
                                <span className="absolute bottom-2 -right-2 w-[1px] h-full bg-borderColorThick" />
                                <span className="absolute -bottom-2 right-2 w-full h-[1px] bg-borderColorThick" />
                                <span className="absolute top-2 -left-2 w-[1px] h-full bg-borderColorThick" />
                                <span className="absolute top-0 -translate-y-1/2 left-0 w-[1px] h-[1.414rem] rotate-45 bg-borderColorThick" />
                                <span className="absolute bottom-0 translate-y-1/2 right-0 w-[1px] h-[1.414rem] rotate-45 bg-borderColorThick" />
                            </span>
                            <span>behind </span>
                        </h1>
                        <h1>ChainGPT</h1>
                    </div>
                    <div className="w-[30vw] px-6 py-4">
                        <p className="text-xl">Learn more about our core team, and get familiar with our partners & advisors</p>
                    </div>
                </div>
                <ContainerSmall className="flex items-center">
                    <div className="w-1/2 flex justify-center">
                        <Link to='#' className="w-2/3 h-20 text-xl text-white flex justify-center items-center relative">
                            THE TEAM [ 45 ]
                            <img
                                src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/644fa7ccf9e72f37ae5162ad_corner-bottom-right.svg"
                                alt=""
                                className="absolute top-0 left-0 rotate-180"
                            />
                            <img
                                src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/644fa7ccf9e72f37ae5162ad_corner-bottom-right.svg"
                                alt=""
                                className="absolute top-0 right-0 -rotate-90"
                            />
                            <img
                                src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/644fa7ccf9e72f37ae5162ad_corner-bottom-right.svg"
                                alt=""
                                className="absolute bottom-0 right-0"
                            />
                            <img
                                src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/644fa7ccf9e72f37ae5162ad_corner-bottom-right.svg"
                                alt=""
                                className="absolute bottom-0 left-0 rotate-90"
                            />
                        </Link>
                    </div>
                    <div className="w-1/2 flex justify-center">
                        <Link to='#' className="w-2/3 h-20 text-xl text-white flex justify-center items-center opacity-60 hover:opacity-100 duration-150">
                            AMBOSORDER & AMBORSORDER AND DEPLOMAT
                        </Link>
                    </div>
                </ContainerSmall>
            </div>
            <div className="w-[33vw] ml-[14.8vw] text-xl mb-32 relative">
                <div className="absolute top-0 right-full w-[14.8vw] flex gap-4">
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6446951576624313547bb1bd_arrow-next.svg" className="w-[64px] h-[64px] cursor-pointer hover:opacity-70 duration-150 rotate-180" alt="" />
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6446951576624313547bb1bd_arrow-next.svg" className="w-[64px] h-[64px] cursor-pointer hover:opacity-70 duration-150" alt="" />
                </div>
                <div className="flex w-max">
                    <div className="w-[33vw] p-8 border-y border-borderColor">
                        <p className="flex gap-6 text-xl mb-6">
                            <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180" />
                            ILAN RAKHMANOV
                        </p>
                        <div className="flex justify-center">
                            <div className="w-1/2 team-member-outline-bg p-[1.6vw]">
                                <img width="252" height="252" alt="Photo Ilan Rakhmanov, Founder and CEO of CGPT" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e6588defe69ec3658f8c7_ilan-rakhmanov.webp" loading="lazy" />
                            </div>
                        </div>
                        <div className="flex items-end justify-between">
                            <p className="mb-2 text-[14px] opacity-60">FOUNDER & CEO</p>
                            <Link to='#' className="flex flex-col gap-3 hover:opacity-60 duration-200">
                                <p className="text-[13px] text-center">BIO</p>
                                <img width="28" height="28" alt="IDO Expand Icon" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6449229588370df9b2b29fc7_ico-expand.svg" loading="lazy" />
                            </Link>
                        </div>
                    </div>
                    <div className="w-[33vw] p-8 border-y border-borderColor">
                        <p className="flex gap-6 text-xl mb-6">
                            <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180" />
                            ILAN RAKHMANOV
                        </p>
                        <div className="flex justify-center">
                            <div className="w-1/2 team-member-outline-bg p-[1.6vw]">
                                <img width="252" height="252" alt="Photo Ilan Rakhmanov, Founder and CEO of CGPT" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e6588defe69ec3658f8c7_ilan-rakhmanov.webp" loading="lazy" />
                            </div>
                        </div>
                        <div className="flex items-end justify-between">
                            <p className="mb-2 text-[14px] opacity-60">FOUNDER & CEO</p>
                            <Link to='#' className="flex flex-col gap-3 hover:opacity-60 duration-200">
                                <p className="text-[13px] text-center">BIO</p>
                                <img width="28" height="28" alt="IDO Expand Icon" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6449229588370df9b2b29fc7_ico-expand.svg" loading="lazy" />
                            </Link>
                        </div>
                    </div>
                    <div className="w-[33vw] p-8 border-y border-borderColor">
                        <p className="flex gap-6 text-xl mb-6">
                            <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180" />
                            ILAN RAKHMANOV
                        </p>
                        <div className="flex justify-center">
                            <div className="w-1/2 team-member-outline-bg p-[1.6vw]">
                                <img width="252" height="252" alt="Photo Ilan Rakhmanov, Founder and CEO of CGPT" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e6588defe69ec3658f8c7_ilan-rakhmanov.webp" loading="lazy" />
                            </div>
                        </div>
                        <div className="flex items-end justify-between">
                            <p className="mb-2 text-[14px] opacity-60">FOUNDER & CEO</p>
                            <Link to='#' className="flex flex-col gap-3 hover:opacity-60 duration-200">
                                <p className="text-[13px] text-center">BIO</p>
                                <img width="28" height="28" alt="IDO Expand Icon" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6449229588370df9b2b29fc7_ico-expand.svg" loading="lazy" />
                            </Link>
                        </div>
                    </div>
                    <div className="w-[33vw] p-8 border-y border-borderColor">
                        <p className="flex gap-6 text-xl mb-6">
                            <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180" />
                            ILAN RAKHMANOV
                        </p>
                        <div className="flex justify-center">
                            <div className="w-1/2 team-member-outline-bg p-[1.6vw]">
                                <img width="252" height="252" alt="Photo Ilan Rakhmanov, Founder and CEO of CGPT" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e6588defe69ec3658f8c7_ilan-rakhmanov.webp" loading="lazy" />
                            </div>
                        </div>
                        <div className="flex items-end justify-between">
                            <p className="mb-2 text-[14px] opacity-60">FOUNDER & CEO</p>
                            <Link to='#' className="flex flex-col gap-3 hover:opacity-60 duration-200">
                                <p className="text-[13px] text-center">BIO</p>
                                <img width="28" height="28" alt="IDO Expand Icon" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6449229588370df9b2b29fc7_ico-expand.svg" loading="lazy" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="w-[14.8vw]" />
                <div className="w-[33vw]">
                    <p className="flex gap-6 text-xl pl-4 pb-6 opacity-60">
                        <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180" />
                        PARTNERS & BACKERS [ 96 ]
                    </p>
                </div>
            </div>
            <div className="w-[33vw] ml-[14.8vw] relative">
                <div className="absolute top-0 right-full w-[14.8vw] flex gap-4">
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6446951576624313547bb1bd_arrow-next.svg" className="w-[64px] h-[64px] cursor-pointer hover:opacity-70 duration-150 rotate-180" alt="" />
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6446951576624313547bb1bd_arrow-next.svg" className="w-[64px] h-[64px] cursor-pointer hover:opacity-70 duration-150" alt="" />
                </div>
                <div className="flex w-max">
                    <div className="w-[33vw]">
                        <div className="py-16 flex justify-center items-center border-y border-borderColor relative">
                            <div className="w-[14vw] p-2 relative">
                                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645ded453c5ce9bf7b27cc46_1_logo_bnb_chain.svg" loading="lazy" alt="BNB Chain Logo" className="w-full" />
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64527b20d8de852bcf4960b6_corner-bottom-right-l.svg"
                                    alt=""
                                    className="absolute top-0 left-0 rotate-180"
                                />
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64527b20d8de852bcf4960b6_corner-bottom-right-l.svg"
                                    alt=""
                                    className="absolute bottom-0 right-0"
                                />
                            </div>
                            <div className="absolute top-0 left-0 border-r border-b border-borderColor px-6 py-4 opacity-60">
                                PARTNER
                            </div>
                        </div>
                        <div className="py-16 flex justify-center items-center border-b border-borderColor relative">
                            <div className="w-[14vw] p-2 relative">
                                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645ded453c5ce9bf7b27cc46_1_logo_bnb_chain.svg" loading="lazy" alt="BNB Chain Logo" className="w-full" />
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64527b20d8de852bcf4960b6_corner-bottom-right-l.svg"
                                    alt=""
                                    className="absolute top-0 left-0 rotate-180"
                                />
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64527b20d8de852bcf4960b6_corner-bottom-right-l.svg"
                                    alt=""
                                    className="absolute bottom-0 right-0"
                                />
                            </div>
                            <div className="absolute top-0 left-0 border-r border-b border-borderColor px-6 py-4 opacity-60">
                                PARTNER
                            </div>
                        </div>
                    </div>
                    <div className="w-[33vw]">
                        <div className="py-16 flex justify-center items-center border-y border-borderColor relative">
                            <div className="w-[14vw] p-2 relative">
                                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645ded453c5ce9bf7b27cc46_1_logo_bnb_chain.svg" loading="lazy" alt="BNB Chain Logo" className="w-full" />
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64527b20d8de852bcf4960b6_corner-bottom-right-l.svg"
                                    alt=""
                                    className="absolute top-0 left-0 rotate-180"
                                />
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64527b20d8de852bcf4960b6_corner-bottom-right-l.svg"
                                    alt=""
                                    className="absolute bottom-0 right-0"
                                />
                            </div>
                            <div className="absolute top-0 left-0 border-r border-b border-borderColor px-6 py-4 opacity-60">
                                PARTNER
                            </div>
                        </div>
                        <div className="py-16 flex justify-center items-center border-b border-borderColor relative">
                            <div className="w-[14vw] p-2 relative">
                                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645ded453c5ce9bf7b27cc46_1_logo_bnb_chain.svg" loading="lazy" alt="BNB Chain Logo" className="w-full" />
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64527b20d8de852bcf4960b6_corner-bottom-right-l.svg"
                                    alt=""
                                    className="absolute top-0 left-0 rotate-180"
                                />
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64527b20d8de852bcf4960b6_corner-bottom-right-l.svg"
                                    alt=""
                                    className="absolute bottom-0 right-0"
                                />
                            </div>
                            <div className="absolute top-0 left-0 border-r border-b border-borderColor px-6 py-4 opacity-60">
                                PARTNER
                            </div>
                        </div>
                    </div>
                    <div className="w-[33vw]">
                        <div className="py-16 flex justify-center items-center border-y border-borderColor relative">
                            <div className="w-[14vw] p-2 relative">
                                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645ded453c5ce9bf7b27cc46_1_logo_bnb_chain.svg" loading="lazy" alt="BNB Chain Logo" className="w-full" />
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64527b20d8de852bcf4960b6_corner-bottom-right-l.svg"
                                    alt=""
                                    className="absolute top-0 left-0 rotate-180"
                                />
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64527b20d8de852bcf4960b6_corner-bottom-right-l.svg"
                                    alt=""
                                    className="absolute bottom-0 right-0"
                                />
                            </div>
                            <div className="absolute top-0 left-0 border-r border-b border-borderColor px-6 py-4 opacity-60">
                                PARTNER
                            </div>
                        </div>
                        <div className="py-16 flex justify-center items-center border-b border-borderColor relative">
                            <div className="w-[14vw] p-2 relative">
                                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645ded453c5ce9bf7b27cc46_1_logo_bnb_chain.svg" loading="lazy" alt="BNB Chain Logo" className="w-full" />
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64527b20d8de852bcf4960b6_corner-bottom-right-l.svg"
                                    alt=""
                                    className="absolute top-0 left-0 rotate-180"
                                />
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64527b20d8de852bcf4960b6_corner-bottom-right-l.svg"
                                    alt=""
                                    className="absolute bottom-0 right-0"
                                />
                            </div>
                            <div className="absolute top-0 left-0 border-r border-b border-borderColor px-6 py-4 opacity-60">
                                PARTNER
                            </div>
                        </div>
                    </div>
                    <div className="w-[33vw]">
                        <div className="py-16 flex justify-center items-center border-y border-borderColor relative">
                            <div className="w-[14vw] p-2 relative">
                                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645ded453c5ce9bf7b27cc46_1_logo_bnb_chain.svg" loading="lazy" alt="BNB Chain Logo" className="w-full" />
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64527b20d8de852bcf4960b6_corner-bottom-right-l.svg"
                                    alt=""
                                    className="absolute top-0 left-0 rotate-180"
                                />
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64527b20d8de852bcf4960b6_corner-bottom-right-l.svg"
                                    alt=""
                                    className="absolute bottom-0 right-0"
                                />
                            </div>
                            <div className="absolute top-0 left-0 border-r border-b border-borderColor px-6 py-4 opacity-60">
                                PARTNER
                            </div>
                        </div>
                        <div className="py-16 flex justify-center items-center border-b border-borderColor relative">
                            <div className="w-[14vw] p-2 relative">
                                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645ded453c5ce9bf7b27cc46_1_logo_bnb_chain.svg" loading="lazy" alt="BNB Chain Logo" className="w-full" />
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64527b20d8de852bcf4960b6_corner-bottom-right-l.svg"
                                    alt=""
                                    className="absolute top-0 left-0 rotate-180"
                                />
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64527b20d8de852bcf4960b6_corner-bottom-right-l.svg"
                                    alt=""
                                    className="absolute bottom-0 right-0"
                                />
                            </div>
                            <div className="absolute top-0 left-0 border-r border-b border-borderColor px-6 py-4 opacity-60">
                                PARTNER
                            </div>
                        </div>
                    </div>
                    <div className="w-[33vw]">
                        <div className="py-16 flex justify-center items-center border-y border-borderColor relative">
                            <div className="w-[14vw] p-2 relative">
                                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645ded453c5ce9bf7b27cc46_1_logo_bnb_chain.svg" loading="lazy" alt="BNB Chain Logo" className="w-full" />
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64527b20d8de852bcf4960b6_corner-bottom-right-l.svg"
                                    alt=""
                                    className="absolute top-0 left-0 rotate-180"
                                />
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64527b20d8de852bcf4960b6_corner-bottom-right-l.svg"
                                    alt=""
                                    className="absolute bottom-0 right-0"
                                />
                            </div>
                            <div className="absolute top-0 left-0 border-r border-b border-borderColor px-6 py-4 opacity-60">
                                PARTNER
                            </div>
                        </div>
                        <div className="py-16 flex justify-center items-center border-b border-borderColor relative">
                            <div className="w-[14vw] p-2 relative">
                                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645ded453c5ce9bf7b27cc46_1_logo_bnb_chain.svg" loading="lazy" alt="BNB Chain Logo" className="w-full" />
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64527b20d8de852bcf4960b6_corner-bottom-right-l.svg"
                                    alt=""
                                    className="absolute top-0 left-0 rotate-180"
                                />
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64527b20d8de852bcf4960b6_corner-bottom-right-l.svg"
                                    alt=""
                                    className="absolute bottom-0 right-0"
                                />
                            </div>
                            <div className="absolute top-0 left-0 border-r border-b border-borderColor px-6 py-4 opacity-60">
                                PARTNER
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
