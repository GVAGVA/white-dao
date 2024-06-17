import { Link } from "react-router-dom";
import ContainerSmall from "../container-small";

export default function Join() {
    return (
        <div className="relative">
            <div className="h-[2vw] relative">
                <div className="w-[96vw] h-[1px] bg-borderColor mx-auto" />
                <div className="absolute top-[-0.414vw] left-[1vw] -translate-x-1/2 w-[1px] h-[2.828vw] bg-borderColor rotate-45" />
                <div className="absolute top-[-0.414vw] right-[1vw] translate-x-1/2 w-[1px] h-[2.828vw] bg-borderColor -rotate-45" />
            </div>
            <div className="pt-[114px] px-[2.2vw] lg-max:px-[4.3vw]">
                <div className="flex justify-center">
                    <div>
                        <div className="flex gap-6 items-center mb-6">
                            <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/646201707951b1100b67ddfd_double-dots.svg" loading="lazy" alt="Robot Eyes" className="h-[4px]" />
                            <p className="text-xl">JOIN THE</p>
                        </div>
                        <div className="flex gap-12">
                            <div className="relative">
                                <div className="pl-5 text-[80px] leading-[1.2]">AI</div>
                                <div className="absolute top-1/2 -translate-y-1/2 left-0">
                                    <svg className="svg-stroke-left" width="116" height="96" viewBox="0 0 116 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="path-anim path-anim-left-1 path-anim-delay-8" d="M62 94H19.2426C18.447 94 17.6839 93.6839 17.1213 93.1213L2.87868 78.8787C2.31607 78.3161 2 77.553 2 76.7574V5C2 3.34315 3.33144 2 4.9883 2C12.1553 2 30.7121 2 44 2" stroke="url(#paint0_linear_2353_8410)" stroke-width="2.5" stroke-linecap="round"></path>
                                        <path className="path-anim path-anim-right-2 path-anim-delay-105" d="M62 94H111C112.657 94 114 92.6569 114 91V19.2426C114 18.447 113.684 17.6839 113.121 17.1213L101.5 5.5" stroke="url(#paint1_linear_2353_8410)" stroke-width="2.5" stroke-linecap="round"></path>
                                        <defs>
                                            <linearGradient id="paint0_linear_2353_8410" x1="2" y1="5" x2="123" y2="94" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#26F4D0"></stop>
                                                <stop offset="0.634676" stop-color="#F8CF3E"></stop>
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_2353_8410" x1="45" y1="89.5" x2="120" y2="27" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.436639" stop-color="#F8CF3E"></stop>
                                                <stop offset="1" stop-color="#FC6756"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="relative">
                                <h1 className="pl-5 text-[80px] leading-[1.2]">Revolution</h1>
                                <div className="absolute top-1/2 -translate-y-1/2 left-0">
                                    <svg className="svg-stroke-right" width="411" height="96" viewBox="0 0 411 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="path-anim path-anim-2 path-anim-delay-1-1" d="M263.5 94H18.7426C17.947 94 17.1839 93.6839 16.6213 93.1213L2 78.5" stroke="url(#paint0_linear_2353_8412)" stroke-width="2.5" stroke-linecap="round"></path>
                                        <path className="path-anim path-anim-1 path-anim-delay-95" d="M409 77V19.2426C409 18.447 408.684 17.6839 408.121 17.1213L393.879 2.87868C393.316 2.31607 392.553 2 391.757 2H4" stroke="url(#paint1_linear_2353_8412)" stroke-width="2.5" stroke-linecap="round"></path>
                                        <defs>
                                            <linearGradient id="paint0_linear_2353_8412" x1="353.5" y1="101" x2="-7.5" y2="75" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#F8CF3E"></stop>
                                                <stop offset="1" stop-color="#FC6756"></stop>
                                                <stop offset="1" stop-color="#FC6756"></stop>
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_2353_8412" x1="-6.49989" y1="-9.50001" x2="384.234" y2="-140.863" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.236372" stop-color="#724CE8"></stop>
                                                <stop offset="1" stop-color="#26F4D0"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="hero-bottom-line"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex pt-[85.7px]">
                    <div className="w-[14.8vw] h-min p-12 border-y border-l border-borderColor text-white text-xl">
                        AS SEEN ON:
                    </div>
                    <div className="w-[66vw] border border-borderColor py-6 overflow-hidden bg-bgColor z-10 whitespace-nowrap">
                        <div className="w-max flex">
                            <Link to='#' className="w-[33vw] px-8 hover:opacity-60 duration-200">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="flex items-center">
                                        <div className="p-2 relative mr-6">
                                            <img src="https://cdn.prod.website-files.com/64354b8ce4872a52ac1c7b06/658012ea6f74b290df4f5ffd_bnb-chain.webp" loading="lazy" width="56" alt="BNB Chain" />
                                            <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/644fa7cd9bc7d5ed92d90f21_corner-top-left.svg" alt="" className="absolute top-0 left-0" />
                                            <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/644fa7cd9bc7d5ed92d90f21_corner-top-left.svg" alt="" className="absolute bottom-0 right-0 rotate-180" />
                                        </div>
                                        <div>
                                            <p className="text-white text-xl">Chainlink</p>
                                            <p className="text-lg text-gray-600">@chainlink</p>
                                        </div>
                                    </div>
                                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/65253abefb080a7f70032ab6_twitter-x.svg" loading="lazy" width="26" height="26" alt="Twitter X Logo" className="mt-4" />
                                </div>
                                <div className="text-xl text-gray-600">
                                    <p className="mb-8 text-wrap">This collaboration with <Link className="text-white underline" to='#'>@Chain_GPT</Link> is a game-changer for the <Link className="text-white underline" to="https://twitter.com/hashtag/TRON?src=hashtag_click">#TRON</Link> community!Together, we usher in a new era of <Link className="text-white underline" to="https://twitter.com/hashtag/AI?src=hashtag_click">#AI</Link> accessibility and flexibility on the <Link className="text-white underline" to="https://twitter.com/hashtag/TRON?src=hashtag_click">#TRON</Link> network.</p>
                                    <p className="text-wrap"> From minting <Link className="text-white underline" to="https://twitter.com/hashtag/NFTs?src=hashtag_click">#NFTs</Link> to deploying and auditing smart contracts, there's so much you can do!</p>
                                </div>
                            </Link>
                            <Link to='#' className="w-[33vw] px-8 border-l border-borderColor hover:opacity-60 duration-200">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="flex items-center">
                                        <div className="p-2 relative mr-6">
                                            <img src="https://cdn.prod.website-files.com/64354b8ce4872a52ac1c7b06/658012ea6f74b290df4f5ffd_bnb-chain.webp" loading="lazy" width="56" alt="BNB Chain" />
                                            <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/644fa7cd9bc7d5ed92d90f21_corner-top-left.svg" alt="" className="absolute top-0 left-0" />
                                            <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/644fa7cd9bc7d5ed92d90f21_corner-top-left.svg" alt="" className="absolute bottom-0 right-0 rotate-180" />
                                        </div>
                                        <div>
                                            <p className="text-white text-xl">Chainlink</p>
                                            <p className="text-lg text-gray-600">@chainlink</p>
                                        </div>
                                    </div>
                                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/65253abefb080a7f70032ab6_twitter-x.svg" loading="lazy" width="26" height="26" alt="Twitter X Logo" className="mt-4" />
                                </div>
                                <div className="text-xl text-gray-600">
                                    <p className="mb-8 text-wrap">This collaboration with <Link className="text-white underline" to='#'>@Chain_GPT</Link> is a game-changer for the <Link className="text-white underline" to="https://twitter.com/hashtag/TRON?src=hashtag_click">#TRON</Link> network.</p>
                                    <p className="text-wrap"> From minting <Link className="text-white underline" to="https://twitter.com/hashtag/NFTs?src=hashtag_click">#NFTs</Link> to deploying and auditing smart contracts, there's so much you can do!</p>
                                </div>
                            </Link>
                            <Link to='#' className="w-[33vw] px-8 border-l border-borderColor hover:opacity-60 duration-200">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="flex items-center">
                                        <div className="p-2 relative mr-6">
                                            <img src="https://cdn.prod.website-files.com/64354b8ce4872a52ac1c7b06/658012ea6f74b290df4f5ffd_bnb-chain.webp" loading="lazy" width="56" alt="BNB Chain" />
                                            <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/644fa7cd9bc7d5ed92d90f21_corner-top-left.svg" alt="" className="absolute top-0 left-0" />
                                            <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/644fa7cd9bc7d5ed92d90f21_corner-top-left.svg" alt="" className="absolute bottom-0 right-0 rotate-180" />
                                        </div>
                                        <div>
                                            <p className="text-white text-xl">Chainlink</p>
                                            <p className="text-lg text-gray-600">@chainlink</p>
                                        </div>
                                    </div>
                                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/65253abefb080a7f70032ab6_twitter-x.svg" loading="lazy" width="26" height="26" alt="Twitter X Logo" className="mt-4" />
                                </div>
                                <div className="text-xl text-gray-600">
                                    <p className="mb-8 text-wrap">This collaboration with <Link className="text-white underline" to='#'>@Chain_GPT</Link> is a game-changer for the <Link className="text-white underline" to="https://twitter.com/hashtag/TRON?src=hashtag_click">#TRON</Link> community!Together, we usher in a new era of <Link className="text-white underline" to="https://twitter.com/hashtag/AI?src=hashtag_click">#AI</Link> accessibility and flexibility on the <Link className="text-white underline" to="https://twitter.com/hashtag/TRON?src=hashtag_click">#TRON</Link> network.</p>
                                    <p className="text-wrap"> From minting <Link className="text-white underline" to="https://twitter.com/hashtag/NFTs?src=hashtag_click">#NFTs</Link> to deploying and auditing smart contracts, there's so much you can do!</p>
                                </div>
                            </Link>
                            <Link to='#' className="w-[33vw] px-8 border-l border-borderColor hover:opacity-60 duration-200">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="flex items-center">
                                        <div className="p-2 relative mr-6">
                                            <img src="https://cdn.prod.website-files.com/64354b8ce4872a52ac1c7b06/658012ea6f74b290df4f5ffd_bnb-chain.webp" loading="lazy" width="56" alt="BNB Chain" />
                                            <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/644fa7cd9bc7d5ed92d90f21_corner-top-left.svg" alt="" className="absolute top-0 left-0" />
                                            <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/644fa7cd9bc7d5ed92d90f21_corner-top-left.svg" alt="" className="absolute bottom-0 right-0 rotate-180" />
                                        </div>
                                        <div>
                                            <p className="text-white text-xl">Chainlink</p>
                                            <p className="text-lg text-gray-600">@chainlink</p>
                                        </div>
                                    </div>
                                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/65253abefb080a7f70032ab6_twitter-x.svg" loading="lazy" width="26" height="26" alt="Twitter X Logo" className="mt-4" />
                                </div>
                                <div className="text-xl text-gray-600">
                                    <p className="mb-8 text-wrap">This collaboration with <Link className="text-white underline" to='#'>@Chain_GPT</Link> is a game-changer for the <Link className="text-white underline" to="https://twitter.com/hashtag/TRON?src=hashtag_click">#TRON</Link> community!Together, we usher in a new era of <Link className="text-white underline" to="https://twitter.com/hashtag/AI?src=hashtag_click">#AI</Link> accessibility and flexibility on the <Link className="text-white underline" to="https://twitter.com/hashtag/TRON?src=hashtag_click">#TRON</Link> network.</p>
                                    <p className="text-wrap"> From minting <Link className="text-white underline" to="https://twitter.com/hashtag/NFTs?src=hashtag_click">#NFTs</Link> to deploying and auditing smart contracts, there's so much you can do!</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <ContainerSmall>
                    <div className="flex border-x border-b border-borderColor overflow-hidden bg-bgColor z-10 whitespace-nowrap">
                        <div className="w-max flex">
                            <Link to='#' className="p-8 mx-4 h-32 w-48 opacity-60 hover:opacity-100 duration-150">
                                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/644921afb8d66809f9f93ad2_logoNews.svg" loading="lazy" className="h-full" alt="Yahoo Finance Logo" />
                            </Link>
                            <Link to='#' className="p-8 mx-4 h-32 w-48 opacity-60 hover:opacity-100 duration-150">
                                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64f5be15ccdbbce5cc2d49c2_finbold.svg" loading="lazy" className="h-full" alt="Yahoo Finance Logo" />
                            </Link>
                            <Link to='#' className="p-8 mx-4 h-32 w-48 opacity-60 hover:opacity-100 duration-150">
                                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/644921afb8d66809f9f93ad2_logoNews.svg" loading="lazy" className="h-full" alt="Yahoo Finance Logo" />
                            </Link>
                            <Link to='#' className="p-8 mx-4 h-32 w-48 opacity-60 hover:opacity-100 duration-150">
                                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64f5be11ef4abb8f61dd8bca_blockonomi.svg" loading="lazy" className="h-full" alt="Yahoo Finance Logo" />
                            </Link>
                            <Link to='#' className="p-8 mx-4 h-32 w-48 opacity-60 hover:opacity-100 duration-150">
                                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/644921afb8d66809f9f93ad2_logoNews.svg" loading="lazy" className="h-full" alt="Yahoo Finance Logo" />
                            </Link>
                            <Link to='#' className="p-8 mx-4 h-32 w-48 opacity-60 hover:opacity-100 duration-150">
                                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64f5be15ccdbbce5cc2d49c2_finbold.svg" loading="lazy" className="h-full" alt="Yahoo Finance Logo" />
                            </Link>
                            <Link to='#' className="p-8 mx-4 h-32 w-48 opacity-60 hover:opacity-100 duration-150">
                                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/644921afb8d66809f9f93ad2_logoNews.svg" loading="lazy" className="h-full" alt="Yahoo Finance Logo" />
                            </Link>
                            <Link to='#' className="p-8 mx-4 h-32 w-48 opacity-60 hover:opacity-100 duration-150">
                                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64f5be11ef4abb8f61dd8bca_blockonomi.svg" loading="lazy" className="h-full" alt="Yahoo Finance Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-[33vw] px-8 border-b border-borderColor py-24">
                                <p className="opacity-60 mb-4">JOIN OUR</p>
                                <Link to='#' className="text-3xl flex items-center hover:opacity-60 duration-200">
                                    <p className="mr-4">Telegram</p>
                                    <svg className="revolution-ico-link" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.71869 1.51632L9.37756 1.58317C11.2354 1.55428 12.3974 1.2358 13.5785 0.523391C14.2138 0.140181 15.0737 0.186111 15.6444 0.757756C16.298 1.41241 16.383 2.46284 15.7039 3.14306C15.0248 3.82327 0.0102084 18.8624 0.0102084 18.8624C-0.00340314 18.876 -0.00340224 18.8981 0.0102077 18.9118L1.08646 19.9898C1.10007 20.0034 1.12213 20.0034 1.13575 19.9898L16.8294 4.27043C18.2107 2.88692 20.4276 4.78085 19.4373 6.40414C18.696 7.61924 18.3559 8.82359 18.3568 10.8318L18.4499 17.277C18.4501 17.2959 18.4654 17.3111 18.4842 17.3114L19.9304 17.3323C19.9502 17.3326 19.9662 17.3165 19.9658 17.2967L20 0.0342172C19.9996 0.0154551 19.9845 0.000344554 19.9658 5.81168e-06L2.69877 5.81167e-06C2.67908 -0.000350137 2.66301 0.0156907 2.66329 0.0354147L2.68419 1.48192C2.68446 1.50086 2.69977 1.51613 2.71869 1.51632Z" fill="currentColor"></path>
                                    </svg>
                                </Link>
                        </div>
                        <div className="w-[33vw] px-8 border-b border-borderColor py-24 text-right">
                                <p className="opacity-60 mb-4">HOP INTO</p>
                                <Link to='#' className="text-3xl flex items-center justify-end hover:opacity-60 duration-200">
                                    <p className="mr-4">Discord</p>
                                    <svg className="revolution-ico-link" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.71869 1.51632L9.37756 1.58317C11.2354 1.55428 12.3974 1.2358 13.5785 0.523391C14.2138 0.140181 15.0737 0.186111 15.6444 0.757756C16.298 1.41241 16.383 2.46284 15.7039 3.14306C15.0248 3.82327 0.0102084 18.8624 0.0102084 18.8624C-0.00340314 18.876 -0.00340224 18.8981 0.0102077 18.9118L1.08646 19.9898C1.10007 20.0034 1.12213 20.0034 1.13575 19.9898L16.8294 4.27043C18.2107 2.88692 20.4276 4.78085 19.4373 6.40414C18.696 7.61924 18.3559 8.82359 18.3568 10.8318L18.4499 17.277C18.4501 17.2959 18.4654 17.3111 18.4842 17.3114L19.9304 17.3323C19.9502 17.3326 19.9662 17.3165 19.9658 17.2967L20 0.0342172C19.9996 0.0154551 19.9845 0.000344554 19.9658 5.81168e-06L2.69877 5.81167e-06C2.67908 -0.000350137 2.66301 0.0156907 2.66329 0.0354147L2.68419 1.48192C2.68446 1.50086 2.69977 1.51613 2.71869 1.51632Z" fill="currentColor"></path>
                                    </svg>
                                </Link>
                        </div>
                        <div className="w-[33vw] px-8 py-24">
                                <p className="opacity-60 mb-4">JOIN OUR</p>
                                <Link to='#' className="text-3xl flex items-center hover:opacity-60 duration-200">
                                    <p className="mr-4">Telegram</p>
                                    <svg className="revolution-ico-link" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.71869 1.51632L9.37756 1.58317C11.2354 1.55428 12.3974 1.2358 13.5785 0.523391C14.2138 0.140181 15.0737 0.186111 15.6444 0.757756C16.298 1.41241 16.383 2.46284 15.7039 3.14306C15.0248 3.82327 0.0102084 18.8624 0.0102084 18.8624C-0.00340314 18.876 -0.00340224 18.8981 0.0102077 18.9118L1.08646 19.9898C1.10007 20.0034 1.12213 20.0034 1.13575 19.9898L16.8294 4.27043C18.2107 2.88692 20.4276 4.78085 19.4373 6.40414C18.696 7.61924 18.3559 8.82359 18.3568 10.8318L18.4499 17.277C18.4501 17.2959 18.4654 17.3111 18.4842 17.3114L19.9304 17.3323C19.9502 17.3326 19.9662 17.3165 19.9658 17.2967L20 0.0342172C19.9996 0.0154551 19.9845 0.000344554 19.9658 5.81168e-06L2.69877 5.81167e-06C2.67908 -0.000350137 2.66301 0.0156907 2.66329 0.0354147L2.68419 1.48192C2.68446 1.50086 2.69977 1.51613 2.71869 1.51632Z" fill="currentColor"></path>
                                    </svg>
                                </Link>
                        </div>
                        <div className="w-[33vw] px-8 py-24 text-right">
                                <p className="opacity-60 mb-4">HOP INTO</p>
                                <Link to='#' className="text-3xl flex items-center justify-end hover:opacity-60 duration-200">
                                    <p className="mr-4">Discord</p>
                                    <svg className="revolution-ico-link" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.71869 1.51632L9.37756 1.58317C11.2354 1.55428 12.3974 1.2358 13.5785 0.523391C14.2138 0.140181 15.0737 0.186111 15.6444 0.757756C16.298 1.41241 16.383 2.46284 15.7039 3.14306C15.0248 3.82327 0.0102084 18.8624 0.0102084 18.8624C-0.00340314 18.876 -0.00340224 18.8981 0.0102077 18.9118L1.08646 19.9898C1.10007 20.0034 1.12213 20.0034 1.13575 19.9898L16.8294 4.27043C18.2107 2.88692 20.4276 4.78085 19.4373 6.40414C18.696 7.61924 18.3559 8.82359 18.3568 10.8318L18.4499 17.277C18.4501 17.2959 18.4654 17.3111 18.4842 17.3114L19.9304 17.3323C19.9502 17.3326 19.9662 17.3165 19.9658 17.2967L20 0.0342172C19.9996 0.0154551 19.9845 0.000344554 19.9658 5.81168e-06L2.69877 5.81167e-06C2.67908 -0.000350137 2.66301 0.0156907 2.66329 0.0354147L2.68419 1.48192C2.68446 1.50086 2.69977 1.51613 2.71869 1.51632Z" fill="currentColor"></path>
                                    </svg>
                                </Link>
                        </div>
                    </div>
                </ContainerSmall>
            </div>
        </div>
    )
}
