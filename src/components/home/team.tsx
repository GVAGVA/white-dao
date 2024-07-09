import { Link } from "react-router-dom";
import ContainerSmall from "../container-small";

export default function Team() {
    return (
        <div className="pt-[114px] pb-[76px] px-[2.2vw] lg-max:px-[4.3vw]">
            <div className="pb-28">
                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/646201707951b1100b67ddfd_double-dots.svg" loading="lazy" alt="Robot Eyes" className="h-[4px] ml-2 mb-10" />
                <div className="flex text-white">
                    <div className="w-1/2">
                        <h2>
                            <span className="px-4 mr-6 relative">
                                DAO
                                <span className="absolute -top-2 left-2 w-full h-[1px] bg-borderColorThick" />
                                <span className="absolute bottom-2 -right-2 w-[1px] h-full bg-borderColorThick" />
                                <span className="absolute -bottom-2 right-2 w-full h-[1px] bg-borderColorThick" />
                                <span className="absolute top-2 -left-2 w-[1px] h-full bg-borderColorThick" />
                                <span className="absolute top-0 -translate-y-1/2 left-0 w-[1px] h-[1.414rem] rotate-45 bg-borderColorThick" />
                                <span className="absolute bottom-0 translate-y-1/2 right-0 w-[1px] h-[1.414rem] rotate-45 bg-borderColorThick" />
                            </span>
                            <span>Governing</span>
                        </h2>
                        <h2>Members</h2>
                    </div>
                </div>
                <ContainerSmall className="flex items-center">
                    <div className="w-1/2 flex justify-center">
                        <Link to='#' className="w-2/3 h-20 text-xl text-white flex justify-center items-center relative">
                            DAO members count 51
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
                            Join our Community to learn more about our members, partners & advisors
                        </Link>
                    </div>
                </ContainerSmall>
            </div>
            <div className="w-[33vw] ml-[14.8vw] mb-32 relative">
                {/* <div className="absolute top-0 right-full w-[14.8vw] flex gap-4">
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6446951576624313547bb1bd_arrow-next.svg" className="w-[64px] h-[64px] cursor-pointer hover:opacity-70 duration-150 rotate-180" alt="" />
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6446951576624313547bb1bd_arrow-next.svg" className="w-[64px] h-[64px] cursor-pointer hover:opacity-70 duration-150" alt="" />
                </div> */}
                <div className="flex w-max">
                    <div className="w-[33vw] p-6 border-y border-borderColor">
                        <div className="rounded border border-borderColor p-4">
                            <div className="flex mb-4">
                                <div className="rounded border border-borderColor p-2 mr-4">
                                    <img src="/assets/images/users/man.jpg" alt="" className="w-48" />
                                </div>
                                <div className="h-full grid items-stretch">
                                    <h5 className="mb-10">Matt Lopez</h5>
                                    <div className="mb-8 text-lg">
                                        <p>DAO Governer</p>
                                        <p>[ Elective ]</p>
                                    </div>
                                    <div className="text-lg">
                                        <p>Member of Elder Council</p>
                                        <p>[ Selective ]</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded border border-borderColor p-4">
                                "Everyone wants to sit on the dinner table and enjoy the food but nobody is willing to cook. We are cooking so come join us."
                            </div>
                        </div>
                    </div>
                    <div className="w-[33vw] p-6 border-y border-borderColor">
                        <div className="rounded border border-borderColor p-4">
                            <div className="flex mb-4">
                                <div className="rounded border border-borderColor p-2 mr-4">
                                    <img src="/assets/images/users/man.jpg" alt="" className="w-48" />
                                </div>
                                <div className="h-full grid items-stretch">
                                    <h5 className="mb-10">Angela Stefan</h5>
                                    <div className="mb-8 text-lg">
                                        <p>DAO Governer</p>
                                        <p>[ Elective ]</p>
                                    </div>
                                    <div className="text-lg">
                                        <p>Member of Dev Team</p>
                                        <p>[ Selective ]</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded border border-borderColor p-4">
                                “Invest for the long haul. Don't get too greedy and don't get too scared”
                            </div>
                        </div>
                    </div>
                    <div className="w-[33vw] p-6 border-y border-borderColor">
                        <div className="rounded border border-borderColor p-4">
                            <div className="flex mb-4">
                                <div className="rounded border border-borderColor p-2 mr-4">
                                    <img src="/assets/images/users/man.jpg" alt="" className="w-48" />
                                </div>
                                <div className="h-full grid items-stretch">
                                    <h5 className="mb-10">Lelouch X</h5>
                                    <div className="mb-8 text-lg">
                                        <p>DAO Governer</p>
                                        <p>[ Elective ]</p>
                                    </div>
                                    <div className="text-lg">
                                        <p>Office of Augustus</p>
                                        <p>[ Selective ]</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded border border-borderColor p-4">
                                “We are Decentralized ! So long our ideas converges towards the same path of standing together for common benefit”
                            </div>
                        </div>
                    </div>
                    <div className="w-[33vw] p-6 border-y border-borderColor">
                        <div className="rounded border border-borderColor p-4">
                            <div className="flex mb-4">
                                <div className="rounded border border-borderColor p-2 mr-4">
                                    <img src="/assets/images/users/man.jpg" alt="" className="w-48" />
                                </div>
                                <div className="h-full grid items-stretch">
                                    <h5 className="mb-10">Itsuki Minomoto</h5>
                                    <div className="mb-8 text-lg">
                                        <p>Member of DAO Senate</p>
                                        <p>[ Elective ]</p>
                                    </div>
                                    <div className="text-lg">
                                        <p>Member of Elder Council</p>
                                        <p>[ Selective ]</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded border border-borderColor p-4">
                                “Invest for the long haul. Don't get too greedy and don't get too scared”
                            </div>
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
