import Slider from "../ui/slider";

const content = [
    <div className="w-[33vw] border border-white flex text-xl">
        <div className="w-[80px] h-[78px] flex justify-center items-center border-r border-white">01</div>
        <div className="w-[calc(100%-80px)] h-[78px] flex justify-center items-center">Decentralized Governance</div>
    </div>,
    <div className="w-[33vw] border border-white flex text-xl">
        <div className="w-[80px] h-[78px] flex justify-center items-center border-r border-white">02</div>
        <div className="w-[calc(100%-80px)] h-[78px] flex justify-center items-center">AI Security Audit</div>
    </div>,
    <div className="w-[33vw] border border-white flex text-xl">
        <div className="w-[80px] h-[78px] flex justify-center items-center border-r border-white">03</div>
        <div className="w-[calc(100%-80px)] h-[78px] flex justify-center items-center">Safety Rating</div>
    </div>,
    <div className="w-[33vw] border border-white flex text-xl">
        <div className="w-[80px] h-[78px] flex justify-center items-center border-r border-white">04</div>
        <div className="w-[calc(100%-80px)] h-[78px] flex justify-center items-center">Decentralized Launchpad</div>
    </div>,
    <div className="w-[33vw] border border-white flex text-xl">
        <div className="w-[80px] h-[78px] flex justify-center items-center border-r border-white">05</div>
        <div className="w-[calc(100%-80px)] h-[78px] flex justify-center items-center">Development & Growth</div>
    </div>,
    <div className="w-[33vw] border border-white flex text-xl">
        <div className="w-[80px] h-[78px] flex justify-center items-center border-r border-white">06</div>
        <div className="w-[calc(100%-80px)] h-[78px] flex justify-center items-center">Building Partnership & Cooperation</div>
    </div>
]

export default function Product() {
    return (
        <div className="pt-4">
            <div className="flex h-[80px]">
                <div className="w-[17vw] h-full bg-[#0a090f] z-10 relative" />
                <div className="w-[33vw] flex relative">
                    <Slider content={content} duration={5000} />
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/643550c922d6d34b8dffd28d_corner.svg" loading="lazy" alt="" className="absolute bottom-full right-full translate-x-[-7px]" />
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/643550c922d6d34b8dffd28d_corner.svg" loading="lazy" alt="" className="absolute bottom-full left-full translate-x-[7px] rotate-90" />
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/643550c922d6d34b8dffd28d_corner.svg" loading="lazy" alt="" className="absolute top-full left-full translate-x-[7px] rotate-180" />
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/643550c922d6d34b8dffd28d_corner.svg" loading="lazy" alt="" className="absolute top-full right-full translate-x-[-7px] -rotate-90" />
                </div>
                <div className="w-[50vw] h-full bg-[#0a090faa] z-10 relative" />
            </div>
            {/* <ContainerBig className="pt-12 flex justify-between items-end">
                <div>
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/646201707951b1100b67ddfd_double-dots.svg" loading="lazy" alt="Robot Eyes" className="h-[4px] ml-2 mb-10" />
                    <div>
                        <div className="m-2 px-3 leading-[1] relative">
                            <h2>Your Gateway</h2>
                            <span className="absolute -top-2 left-2 w-full h-[1px] bg-borderColorThick" />
                            <span className="absolute bottom-2 -right-2 w-[1px] h-full bg-borderColorThick" />
                            <span className="absolute -bottom-2 right-2 w-full h-[1px] bg-borderColorThick" />
                            <span className="absolute top-2 -left-2 w-[1px] h-full bg-borderColorThick" />
                            <span className="absolute top-0 -translate-y-1/2 left-0 w-[1px] h-[1.414rem] rotate-45 bg-borderColorThick" />
                            <span className="absolute bottom-0 translate-y-1/2 right-0 w-[1px] h-[1.414rem] rotate-45 bg-borderColorThick" />
                        </div>
                    </div>
                    <h2>To Web3 AI</h2>
                </div>
                <div className="mr-[14.8vw] pr-12 w-[12vw] text-white text-2xl pb-8">
                    For individuals, developers, and businesses.
                </div>
            </ContainerBig> */}
        </div>
    )
}
