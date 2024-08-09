import { Link } from "react-router-dom";
import ContainerSmall from "../container-small";
import Slider from "../ui/slider";

const content = [
    <div className="w-[33vw] p-6">
        <div className="rounded border border-borderColor p-4">
            <div className="flex mb-4">
                <div className="rounded border border-borderColor p-2 mr-4">
                    <img src="/assets/images/members/matt_lopez.png" alt="" className="w-48" />
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
                "Flectere si nequeo superos, Acheronta movebo."
            </div>
        </div>
    </div>,
    <div className="w-[33vw] p-6">
        <div className="rounded border border-borderColor p-4">
            <div className="flex mb-4">
                <div className="rounded border border-borderColor p-2 mr-4">
                    <img src="/assets/images/members/lelouch_x.png" alt="" className="w-48" />
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
    </div>,
    <div className="w-[33vw] p-6">
        <div className="rounded border border-borderColor p-4">
            <div className="flex mb-4">
                <div className="rounded border border-borderColor p-2 mr-4">
                    <img src="/assets/images/members/itsuki_minomoto.png" alt="" className="w-48" />
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
    </div>,
    <div className="w-[33vw] p-6">
        <div className="rounded border border-borderColor p-4">
            <div className="flex mb-4">
                <div className="rounded border border-borderColor p-2 mr-4">
                    <img src="/assets/images/members/Boss.png" alt="" className="w-48" />
                </div>
                <div className="h-full grid items-stretch">
                    <h5 className="mb-10">Oleksandr Makovoz</h5>
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
                “The greatest glory in living lies not in never falling, but in rising every time we fall.”
            </div>
        </div>
    </div>,
    <div className="w-[33vw] p-6">
        <div className="rounded border border-borderColor p-4">
            <div className="flex mb-4">
                <div className="rounded border border-borderColor p-2 mr-4">
                    <img src="/assets/images/members/angela.png" alt="" className="w-48" />
                </div>
                <div className="h-full grid items-stretch">
                    <h5 className="mb-10">Angela Steffens</h5>
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
                “Lets keep working for innovation & decentralization. We will get there.”
            </div>
        </div>
    </div>
]

export default function Team() {
    // const [num, setNum] = useState<number>(0)

    // const onClickPre = () => {
    //     num && setNum(num - 1)
    // }

    // const onClickNext = () => {
    //     num < 4 && setNum(num + 1)
    // }

    return (
        <div className="pt-[80px] px-[2.2vw] lg-max:px-[4.3vw]">
            <div className="pb-8">
                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/646201707951b1100b67ddfd_double-dots.svg" loading="lazy" alt="Robot Eyes" className="h-[4px] ml-2 mb-10" />
                <div className="flex text-white">
                    <div className="w-1/2">
                        <h2>
                            <span className="px-4 mr-6 relative">
                                DAO
                                <span className="absolute -top-2 left-2 w-full h-[1px] bg-gray-500" />
                                <span className="absolute bottom-2 -right-2 w-[1px] h-full bg-gray-500" />
                                <span className="absolute -bottom-2 right-2 w-full h-[1px] bg-gray-500" />
                                <span className="absolute top-2 -left-2 w-[1px] h-full bg-gray-500" />
                                <span className="absolute top-0 -translate-y-1/2 left-0 w-[1px] h-[1.414rem] rotate-45 bg-gray-500" />
                                <span className="absolute bottom-0 translate-y-1/2 right-0 w-[1px] h-[1.414rem] rotate-45 bg-gray-500" />
                            </span>
                            <span>Governing</span>
                        </h2>
                        <h2>Members</h2>
                    </div>
                </div>
                <ContainerSmall className="flex items-center">
                    <div className="w-1/2 flex justify-center">
                        <Link to='#' className="w-2/3 h-20 text-xl text-white flex justify-center items-center relative">
                            DAO members count 167
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
            <div className="w-[83vw] ml-[14.8vw] relative overflow-hidden border-y border-borderColor">
                {/* <div className="absolute top-0 right-full w-[14.8vw] flex gap-4">
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6446951576624313547bb1bd_arrow-next.svg" className="w-[64px] h-[64px] cursor-pointer hover:opacity-70 duration-150 rotate-180" alt="" />
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6446951576624313547bb1bd_arrow-next.svg" className="w-[64px] h-[64px] cursor-pointer hover:opacity-70 duration-150" alt="" />
                </div> */}
                <Slider content={content} duration={5000} />
            </div>
            {/* <div className="flex">
                <div className="w-[14.8vw]" />
                <div className="w-[33vw]">
                    <p className="flex gap-6 text-xl pl-4 pb-6 opacity-60">
                        <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180" />
                        PARTNERS & BACKERS [ 96 ]
                    </p>
                </div>
            </div>
            <div className="w-[83vw] ml-[14.8vw] relative">
                <div className="absolute top-0 right-full w-[14.8vw] flex gap-4">
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6446951576624313547bb1bd_arrow-next.svg" className="w-[64px] h-[64px] cursor-pointer hover:opacity-70 duration-150 rotate-180" alt="" onClick={onClickPre} />
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6446951576624313547bb1bd_arrow-next.svg" className="w-[64px] h-[64px] cursor-pointer hover:opacity-70 duration-150" alt="" onClick={onClickNext} />
                </div>
                <div className="overflow-hidden">
                <div className="flex w-max duration-200" style={{ translate: `-${num * 33}vw` }}>
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
            </div> */}
        </div>
    )
}
