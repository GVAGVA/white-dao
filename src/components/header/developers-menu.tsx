import { Link } from "react-router-dom";

export default function DevelopersMenu() {
    return (
        <div className="relative group/whole">
            <div className="py-8 flex items-center gap-2 cursor-pointer group/item relative">
                Developers
                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64491fa5649dfb767a0c35ee_arrow-down.svg" alt="" />
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white group-hover/item:w-full duration-300 z-10" />
            </div>
            <div className="absolute top-full -left-5 py-4 hidden group-hover/whole:block border border-borderColor bg-bgColor">
                <Link to="#" target="_blank" className="w-max px-6 py-4 flex justify-between items-center hover:opacity-70 duration-200">
                    <div className="flex items-center gap-4 mr-10 w-max">
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/65e19a31ef2063a786b0198c_ico-grant.svg" className="w-[18px]" alt="" />
                        <p className="text-white">ChainGPT Chat Bot</p>
                    </div>
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64491f577f22d780663c25d1_ico-arrow.svg" className="w-3 h-3" alt="" />
                </Link>
                <Link to="#" target="_blank" className="w-max px-6 py-4 flex justify-between items-center hover:opacity-70 duration-200">
                    <div className="flex items-center gap-4 mr-10 w-max">
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/65e19a31ef2063a786b0198c_ico-grant.svg" className="w-[18px]" alt="" />
                        <p className="text-white">ChainGPT Chat Bot</p>
                    </div>
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64491f577f22d780663c25d1_ico-arrow.svg" className="w-3 h-3" alt="" />
                </Link>
                <Link to="#" target="_blank" className="w-max px-6 py-4 flex justify-between items-center hover:opacity-70 duration-200">
                    <div className="flex items-center gap-4 mr-10 w-max">
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/65e19a31ef2063a786b0198c_ico-grant.svg" className="w-[18px]" alt="" />
                        <p className="text-white">ChainGPT Chat Bot</p>
                    </div>
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64491f577f22d780663c25d1_ico-arrow.svg" className="w-3 h-3" alt="" />
                </Link>
                <Link to="#" target="_blank" className="w-max px-6 py-4 flex justify-between items-center hover:opacity-70 duration-200">
                    <div className="flex items-center gap-4 mr-10 w-max">
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/65e19a31ef2063a786b0198c_ico-grant.svg" className="w-[18px]" alt="" />
                        <p className="text-white">ChainGPT Chat Bot</p>
                    </div>
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64491f577f22d780663c25d1_ico-arrow.svg" className="w-3 h-3" alt="" />
                </Link>
                <Link to="#" target="_blank" className="w-max px-6 py-4 flex justify-between items-center hover:opacity-70 duration-200">
                    <div className="flex items-center gap-4 mr-10 w-max">
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/65e19a31ef2063a786b0198c_ico-grant.svg" className="w-[18px]" alt="" />
                        <p className="text-white">ChainGPT Chat Bot</p>
                    </div>
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64491f577f22d780663c25d1_ico-arrow.svg" className="w-3 h-3" alt="" />
                </Link>
                <Link to="#" target="_blank" className="w-max px-6 py-4 flex justify-between items-center hover:opacity-70 duration-200">
                    <div className="flex items-center gap-4 mr-10 w-max">
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/65e19a31ef2063a786b0198c_ico-grant.svg" className="w-[18px]" alt="" />
                        <p className="text-white">ChainGPT Chat Bot</p>
                    </div>
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64491f577f22d780663c25d1_ico-arrow.svg" className="w-3 h-3" alt="" />
                </Link>
            </div>
        </div>
    )
}
