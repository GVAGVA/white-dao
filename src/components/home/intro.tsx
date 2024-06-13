import ContainerBig from "../container-big";
import ContainerSmall from "../container-small";

export default function Intro() {
    return (
        <ContainerBig className="min-h-[91vh] grid content-between pb-[20px]">
            <ContainerSmall className="relative">
                <div className="pt-[190px] pb-[100px] flex items-stretch">
                    <div className="w-1/2 relative">
                        <div className="absolute bottom-full left-0 border border-b-0 border-white w-[66px] h-[66px] flex justify-center items-center">
                            <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/643550c922d6d37de6ffd28c_ico-quote.svg" loading="lazy" width="20" height="16" alt="" />
                        </div>
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/643550c922d6d34b8dffd28d_corner.svg" loading="lazy" alt="" className="absolute bottom-full translate-y-[-66px] right-full translate-x-[-7px]" />
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/643550c922d6d34b8dffd28d_corner.svg" loading="lazy" alt="" className="absolute top-full right-full translate-x-[-7px] -rotate-90" />
                        <div className="h-full text-xl border border-white p-6 flex items-center relative">
                            HOW DO I RUN A BITCOIN WALLET
                            <br />
                            LOCALLY?
                            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-b from-[#09090e00] to-[#0a090f]" />
                        </div>
                        <div className="absolute top-full left-0 h-full text-xl p-6 flex items-center opacity-50">
                            PROVIDE ME WITH A DAILY CRYPTO
                            <br />
                            LOCALLY?
                        </div>
                    </div>
                    <div className="w-1/2 relative">
                        <div className="border-t border-borderColor">
                            <div className="flex justify-between items-center w-[50%] mr-4 ml-auto py-2">
                                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/643550c922d6d3e0dcffd28b_ico-indicator.svg" loading="lazy" alt="" className="w-[6px]" />
                                <p className="text-white">DEVELOPMENT</p>
                            </div>
                        </div>
                        <div className="border-t border-borderColor">
                            <div className="flex justify-between items-center w-[50%] mr-4 ml-auto py-2">
                                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/643550c922d6d3e0dcffd28b_ico-indicator.svg" loading="lazy" alt="" className="w-[6px]" />
                                <p className="text-white">MARKET ANALYSIS</p>
                            </div>
                        </div>
                        <div className="border-t border-borderColor">
                            <div className="flex justify-between items-center w-[50%] mr-4 ml-auto py-2">
                                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/643550c922d6d3e0dcffd28b_ico-indicator.svg" loading="lazy" alt="" className="w-[6px]" />
                                <p className="text-white">AI TRADING</p>
                            </div>
                        </div>
                        <div className="absolute top-full left-0 w-full border-t border-borderColor pr-4 py-2 text-right">
                            <p className="text-white opacity-60">AND MUCH MORE</p>
                        </div>
                    </div>
                </div>
            </ContainerSmall>
            <div>
                <p className="text-white text-2xl mb-8">UNLEASH THE POWER OF</p>
                <div>
                    <div className="relative">
                        <h1 className="pl-5 text-[80px] leading-[1.2]">Blockchain</h1>
                        <div className="absolute top-1/2 -translate-y-1/2 left-0">
                            <svg width="421" height="96" viewBox="0 0 421 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="path-anim path-anim-2" d="M157.5 94H402.257C403.053 94 403.816 93.6839 404.379 93.1213L419 78.5" stroke="url(#paint0_linear_2309_6568)" stroke-width="2.5" stroke-linecap="round"></path>
                                <path className="path-anim path-anim-1" d="M2 77V19.2426C2 18.447 2.31607 17.6839 2.87868 17.1213L17.1213 2.87868C17.6839 2.31607 18.447 2 19.2426 2H417" stroke="url(#paint1_linear_2309_6568)" stroke-width="2.5" stroke-linecap="round"></path>
                                <defs>
                                    <linearGradient id="paint0_linear_2309_6568" x1="67.5" y1="101" x2="428.5" y2="75" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F8CF3E"></stop>
                                        <stop offset="1" stop-color="#FC6756"></stop>
                                        <stop offset="1" stop-color="#FC6756"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_2309_6568" x1="416.5" y1="-9.50001" x2="25.7657" y2="-140.863" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.236372" stop-color="#724CE8"></stop>
                                        <stop offset="1" stop-color="#26F4D0"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="hero-bottom-line"></div>
                    </div>
                    <div className="relative">
                        <div className="pl-5 text-[80px] leading-[1.2]">AI</div>
                        <div className="absolute top-1/2 -translate-y-1/2 left-0">
                            <svg width="115" height="88" viewBox="0 0 115 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="path-anim path-anim-left" d="M2 2V68.7574C2 69.553 2.31607 70.3161 2.87868 70.8787L17.1213 85.1213C17.6839 85.6839 18.447 86 19.2426 86H62" stroke="url(#paint0_linear_2309_6569)" stroke-width="2.5" stroke-linecap="round"></path>
                                <path className="path-anim path-anim-right" d="M62 86H110C111.657 86 113 84.6569 113 83V15.2426C113 14.447 112.684 13.6839 112.121 13.1213L100.5 1.5" stroke="url(#paint1_linear_2309_6569)" stroke-width="2.5" stroke-linecap="round"></path>
                                <defs>
                                    <linearGradient id="paint0_linear_2309_6569" x1="1.5" y1="-1.3292e-06" x2="123" y2="86" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#26F4D0"></stop>
                                        <stop offset="0.634676" stop-color="#F8CF3E"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_2309_6569" x1="45" y1="81.5" x2="119" y2="24" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.436639" stop-color="#F8CF3E"></stop>
                                        <stop offset="1" stop-color="#FC6756"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerBig>
    )
}
