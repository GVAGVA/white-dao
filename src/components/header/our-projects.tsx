import { useState } from "react"
import { Link } from "react-router-dom";

export default function OurProjects() {
    const [projectDropdownVisible, setProjectDropdownVisible] = useState<boolean>(false)

    return (
        <div className="relative w-[20.5%]">
            <div className="py-8 border-r border-borderColor relative flex items-center justify-center group cursor-pointer" onClick={() => setProjectDropdownVisible(!projectDropdownVisible)}>
                <div className="w-3 h-3 mr-3 relative group-hover:rotate-45 group-hover:scale-[1.667] duration-200">
                    <div className="w-1 h-1 bg-white rounded-full absolute top-0 left-0 group-hover:scale-[0.6] duration-200" />
                    <div className="w-1 h-1 bg-white rounded-full absolute top-0 right-0 group-hover:scale-[0.6] duration-200" />
                    <div className="w-1 h-1 bg-white rounded-full absolute bottom-0 right-0 group-hover:scale-[0.6] duration-200" />
                    <div className="w-1 h-1 bg-white rounded-full absolute bottom-0 left-0 group-hover:scale-[0.6] duration-200" />
                </div>
                OUR PRODUCTS
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FC6856] via-[#6DE79D] to-[#724EE8]" />
            </div>
            <div className={"absolute top-full left-0 p-2 border border-borderColor bg-bgColor " + (projectDropdownVisible ? 'block' : 'hidden')}>
                <Link rel="noopener noreferrer" to="/" target="_blank" className="inline-block w-full px-3 py-4 cst-link-item-bg-active mb-3" >
                    <div className="flex items-center justify-between mb-4">
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/65490b8a07a8b7aa78eff4f1_logo-chainGPT-dark.svg" loading="lazy" alt="" className="mr-3" />
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/65490b8aafd57d8ec5c22b86_selected-indicator.svg" loading="lazy" alt="Simple Link Arrow Icon" className="w-3" />
                    </div>
                    <p className="text-[11.7px]">MAIN WEBSITE</p>
                </Link>
                <Link rel="noopener noreferrer" to="/" target="_blank" className="inline-block w-full px-3 py-4 cst-link-item-bg mb-3" >
                    <div className="flex items-center justify-between mb-4">
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6613b25be8b895f732812334_logo-ai-hub.svg" loading="lazy" alt="" className="mr-3" />
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e3d7ca7fd751544d4e7e8_icon-link-arrow-simple.svg" loading="lazy" alt="Simple Link Arrow Icon" className="w-3" />
                    </div>
                    <p className="text-[11.7px]">CRYPTO AI HUB</p>
                </Link>
                <Link rel="noopener noreferrer" to="/" target="_blank" className="inline-block w-full px-3 py-4 cst-link-item-bg mb-3" >
                    <div className="flex items-center justify-between mb-4">
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/65490b8aeb8455bcc5cbf898_logo-Pad.svg" loading="lazy" alt="" className="mr-3" />
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e3d7ca7fd751544d4e7e8_icon-link-arrow-simple.svg" loading="lazy" alt="Simple Link Arrow Icon" className="w-3" />
                    </div>
                    <p className="text-[11.7px]">OUR LAUNCHPAD</p>
                </Link>
                <Link rel="noopener noreferrer" to="/" target="_blank" className="inline-block w-full px-3 py-4 cst-link-item-bg mb-3" >
                    <div className="flex items-center justify-between mb-4">
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6613b25be8b895f732812334_logo-ai-hub.svg" loading="lazy" alt="" className="mr-3" />
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e3d7ca7fd751544d4e7e8_icon-link-arrow-simple.svg" loading="lazy" alt="Simple Link Arrow Icon" className="w-3" />
                    </div>
                    <p className="text-[11.7px]">CRYPTO AI HUB</p>
                </Link>
                <Link rel="noopener noreferrer" to="/" target="_blank" className="inline-block w-full px-3 py-4 cst-link-item-bg mb-3" >
                    <div className="flex items-center justify-between mb-4">
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/65490b8a668f9f9f2645d7bb_logo-NFTGen.svg" loading="lazy" alt="" className="mr-3" />
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e3d7ca7fd751544d4e7e8_icon-link-arrow-simple.svg" loading="lazy" alt="Simple Link Arrow Icon" className="w-3" />
                    </div>
                    <p className="text-[11.7px]">AI NFT GENERATOR</p>
                </Link>
                <Link rel="noopener noreferrer" to="/" target="_blank" className="inline-block w-full px-3 py-4 cst-link-item-bg" >
                    <div className="flex items-center justify-between mb-4">
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/65fabe9856a4dd78f7a11faf_CryptoGuardLogo.svg" loading="lazy" alt="" className="mr-3" />
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e3d7ca7fd751544d4e7e8_icon-link-arrow-simple.svg" loading="lazy" alt="Simple Link Arrow Icon" className="w-3" />
                    </div>
                    <p className="text-[11.7px]">SECURITY EXTENSION</p>
                </Link>
            </div>
        </div>
    )
}
