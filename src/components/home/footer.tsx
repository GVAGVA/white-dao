import ContainerBig from "../container-big";

export default function Footer() {
    return (
        <div className="bg-bgColor relative z-[99]">
            <div className="w-[91.6vw] lg:w-[93.2vw] mx-auto h-[1.2vw] border-t border-borderColor relative">
                <div className="w-[1px] h-[1.69705vw] bg-borderColor absolute -top-[0.24853vw] -left-[0.6vw] rotate-45 lg-max:hidden" />
                <div className="w-[1px] h-[1.69705vw] bg-borderColor absolute -top-[0.24853vw] -right-[0.6vw] -rotate-45 lg-max:hidden" />
            </div>
            <ContainerBig className="border-x border-borderColor pt-16 pb-12">
                <div className="flex">
                    <div className="w-[14.8vw] pl-[4vw]">
                        <img src="/assets/images/logo.webp" alt="" className="w-14" />
                    </div>
                    <div className="w-[66vw]">
                        <p className="text-white text-xl mb-10">We want to make it easy for everyone to embrace the web3 ecosystem in a secure, decentralized and future-proof way. Join us in this Journey.</p>
                        <div className="flex justify-between items-center pb-2 border-b border-borderColor mb-4">
                            <input type="text" className="border-0 p-0 m-0 outline-none text-xl w-[calc(100%-160px)] bg-transparent" placeholder="White Hat DAO LLC" />
                            <span className="py-1 px-10 text-white text-lg relative cursor-pointer hover:text-opacity-60 duration-200 w-max">
                                Email Us
                                <span className="absolute -top-1 left-1 w-full h-[1px] bg-borderColor" />
                                <span className="absolute bottom-1 -right-1 w-[1px] h-full bg-borderColor" />
                                <span className="absolute -bottom-1 right-1 w-full h-[1px] bg-borderColor" />
                                <span className="absolute -bottom-1 -left-1 w-[1px] h-3/4 bg-borderColor" />
                                <span className="absolute top-0 -translate-y-1/2 left-0 w-[1px] h-[0.707rem] rotate-45 bg-borderColor" />
                                <span className="absolute bottom-0 translate-y-1/2 right-0 w-[1px] h-[0.707rem] rotate-45 bg-borderColor" />
                            </span>
                        </div>
                        <div className="flex justify-between items-center mb-12 ">
                            <div className="flex gap-6 flex-wrap pl-1">
                                <span className="py-1 px-10 text-white text-lg relative cursor-pointer hover:text-opacity-60 duration-200 inline-block">
                                    DAO Gov
                                    <span className="absolute -top-1 left-1 w-full h-[1px] bg-borderColor" />
                                    <span className="absolute bottom-1 -right-1 w-[1px] h-full bg-borderColor" />
                                    <span className="absolute -bottom-1 right-1 w-full h-[1px] bg-borderColor" />
                                    <span className="absolute -bottom-1 -left-1 w-[1px] h-3/4 bg-borderColor" />
                                    <span className="absolute top-0 -translate-y-1/2 left-0 w-[1px] h-[0.707rem] rotate-45 bg-borderColor" />
                                    <span className="absolute bottom-0 translate-y-1/2 right-0 w-[1px] h-[0.707rem] rotate-45 bg-borderColor" />
                                </span>
                                <span className="py-1 px-10 text-white text-lg relative cursor-pointer hover:text-opacity-60 duration-200 inline-block">
                                    Github
                                    <span className="absolute -top-1 left-1 w-full h-[1px] bg-borderColor" />
                                    <span className="absolute bottom-1 -right-1 w-[1px] h-full bg-borderColor" />
                                    <span className="absolute -bottom-1 right-1 w-full h-[1px] bg-borderColor" />
                                    <span className="absolute -bottom-1 -left-1 w-[1px] h-3/4 bg-borderColor" />
                                    <span className="absolute top-0 -translate-y-1/2 left-0 w-[1px] h-[0.707rem] rotate-45 bg-borderColor" />
                                    <span className="absolute bottom-0 translate-y-1/2 right-0 w-[1px] h-[0.707rem] rotate-45 bg-borderColor" />
                                </span>
                                <span className="py-1 px-10 text-white text-lg relative cursor-pointer hover:text-opacity-60 duration-200 inline-block">
                                    Hire Us
                                    <span className="absolute -top-1 left-1 w-full h-[1px] bg-borderColor" />
                                    <span className="absolute bottom-1 -right-1 w-[1px] h-full bg-borderColor" />
                                    <span className="absolute -bottom-1 right-1 w-full h-[1px] bg-borderColor" />
                                    <span className="absolute -bottom-1 -left-1 w-[1px] h-3/4 bg-borderColor" />
                                    <span className="absolute top-0 -translate-y-1/2 left-0 w-[1px] h-[0.707rem] rotate-45 bg-borderColor" />
                                    <span className="absolute bottom-0 translate-y-1/2 right-0 w-[1px] h-[0.707rem] rotate-45 bg-borderColor" />
                                </span>
                                <span className="py-1 px-10 text-white text-lg relative cursor-pointer hover:text-opacity-60 duration-200 inline-block">
                                    Apply as Dev
                                    <span className="absolute -top-1 left-1 w-full h-[1px] bg-borderColor" />
                                    <span className="absolute bottom-1 -right-1 w-[1px] h-full bg-borderColor" />
                                    <span className="absolute -bottom-1 right-1 w-full h-[1px] bg-borderColor" />
                                    <span className="absolute -bottom-1 -left-1 w-[1px] h-3/4 bg-borderColor" />
                                    <span className="absolute top-0 -translate-y-1/2 left-0 w-[1px] h-[0.707rem] rotate-45 bg-borderColor" />
                                    <span className="absolute bottom-0 translate-y-1/2 right-0 w-[1px] h-[0.707rem] rotate-45 bg-borderColor" />
                                </span>
                            </div>
                            <span>Social Logos</span>
                        </div>
                        {/* <div className="flex gap-2 text-lg mb-10">
                            <div className="w-1/4 flex flex-col gap-6">
                                <p className="opacity-50">AI SOLUTIONS</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                            </div>
                            <div className="w-1/4 flex flex-col gap-6">
                                <p className="opacity-50">AI SOLUTIONS</p>
                                <p>ChainGPT Pad</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                            </div>
                            <div className="w-1/4 flex flex-col gap-6">
                                <p className="opacity-50">AI SOLUTIONS</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                                <p>ChainGPT Chat Bot</p>
                            </div>
                            <div className="w-1/4 flex flex-col gap-4">
                                <a href="/" className="flex items-center justify-end gap-3 opacity-60 hover:opacity-100 duration-150">
                                    TELEGRAM
                                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e3d7ca7fd751544d4e7e8_icon-link-arrow-simple.svg" alt="" className="w-4 h-4" />
                                </a>
                                <a href="/" className="flex items-center justify-end gap-3 opacity-60 hover:opacity-100 duration-150">
                                    DISCORD
                                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e3d7ca7fd751544d4e7e8_icon-link-arrow-simple.svg" alt="" className="w-4 h-4" />
                                </a>
                                <a href="/" className="flex items-center justify-end gap-3 opacity-60 hover:opacity-100 duration-150">
                                    SKYPE
                                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e3d7ca7fd751544d4e7e8_icon-link-arrow-simple.svg" alt="" className="w-4 h-4" />
                                </a>
                                <a href="/" className="flex items-center justify-end gap-3 opacity-60 hover:opacity-100 duration-150">
                                    TELEGRAM
                                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e3d7ca7fd751544d4e7e8_icon-link-arrow-simple.svg" alt="" className="w-4 h-4" />
                                </a>
                                <a href="/" className="flex items-center justify-end gap-3 opacity-60 hover:opacity-100 duration-150">
                                    YOUTUBE
                                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e3d7ca7fd751544d4e7e8_icon-link-arrow-simple.svg" alt="" className="w-4 h-4" />
                                </a>
                                <a href="/" className="flex items-center justify-end gap-3 opacity-60 hover:opacity-100 duration-150">
                                    MEDIUM
                                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e3d7ca7fd751544d4e7e8_icon-link-arrow-simple.svg" alt="" className="w-4 h-4" />
                                </a>
                                <a href="/" className="flex items-center justify-end gap-3 opacity-60 hover:opacity-100 duration-150">
                                    LINKEDIN
                                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e3d7ca7fd751544d4e7e8_icon-link-arrow-simple.svg" alt="" className="w-4 h-4" />
                                </a>
                                <a href="/" className="flex items-center justify-end gap-3 opacity-60 hover:opacity-100 duration-150">
                                    FACEBOOK
                                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e3d7ca7fd751544d4e7e8_icon-link-arrow-simple.svg" alt="" className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                        <div className="mb-10 flex justify-end">
                            <a href="https://www.producthunt.com/posts/chaingpt?utm_source=badge-featured&amp;utm_medium=badge&amp;utm_souce=badge-chaingpt" target="_blank" rel="noopener noreferrer nofollow">
                                <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=378970&amp;theme=dark" alt="ChainGPT - Unleash the power of Blockchain AI with ChainGPT | Product Hunt" width="205" height="44" />
                            </a>
                        </div> */}
                    </div>
                </div>
                <div className="flex text-[12px] opacity-70">
                    <div className="w-[14.8vw] pl-[4vw]">
                        <p>© 2023</p>
                    </div>
                    <div className="w-[66vw]">
                        <p>ALL RIGHTS RESERVED BY CHAINGPT.ORG.</p>
                    </div>
                    <div className="w-[14.8vw] pr-[3vw] flex justify-end">
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/646201707951b1100b67ddfd_double-dots.svg" loading="lazy" alt="Robot Eyes" className="h-[4px] -translate-y-full" />
                    </div>
                </div>
            </ContainerBig>
        </div>
    )
}
