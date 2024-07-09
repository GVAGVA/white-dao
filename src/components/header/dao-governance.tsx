import { Link } from "react-router-dom";

export default function DAOGovernance() {
    return (
        <div className="relative group/whole">
            <div className="py-8 flex items-center gap-2 cursor-pointer group/item relative">
                DAO-Governance
                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64491fa5649dfb767a0c35ee_arrow-down.svg" alt="" />
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white group-hover/item:w-full duration-300 z-10" />
            </div>
            <div className="absolute top-full -left-5 hidden group-hover/whole:flex border border-borderColor bg-bgColor">
                <div className="border-r border-borderColor w-max">
                    <div className="w-max p-6 opacity-opacity1">
                        JOIN THE DAO GOVERNANCE
                    </div>
                    <div className="px-5 py-2 border-t border-borderColor flex justify-between items-center hover:opacity-70 duration-200">
                        <Link to="#" target="_blank" className="flex items-center gap-4 mr-14 w-max">
                            <img src="/assets/images/logo.webp" className="w-8 lg:w-10 xl:w-12 2xl:w-14" alt="" />
                            <p className="text-white">DAO Gov</p>
                        </Link>
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64491f577f22d780663c25d1_ico-arrow.svg" className="w-3 h-3" alt="" />
                    </div>
                    <div className="px-5 py-2 border-t border-borderColor flex justify-between items-center hover:opacity-70 duration-200">
                        <Link to="#" target="_blank" className="flex items-center gap-4 mr-14 w-max">
                            <img src="/assets/images/logo.webp" className="w-8 lg:w-10 xl:w-12 2xl:w-14" alt="" />
                            <p className="text-white">DAO Senate</p>
                        </Link>
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64491f577f22d780663c25d1_ico-arrow.svg" className="w-3 h-3" alt="" />
                    </div>
                    <div className="px-5 py-2 border-t border-borderColor flex justify-between items-center hover:opacity-70 duration-200">
                        <Link to="#" target="_blank" className="flex items-center gap-4 mr-14 w-max">
                            <img src="/assets/images/logo.webp" className="w-8 lg:w-10 xl:w-12 2xl:w-14" alt="" />
                            <p className="text-white">Elder Council</p>
                        </Link>
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64491f577f22d780663c25d1_ico-arrow.svg" className="w-3 h-3" alt="" />
                    </div>
                    <div className="px-5 py-2 border-t border-borderColor flex justify-between items-center hover:opacity-70 duration-200">
                        <Link to="#" target="_blank" className="flex items-center gap-4 mr-14 w-max">
                            <img src="/assets/images/logo.webp" className="w-8 lg:w-10 xl:w-12 2xl:w-14" alt="" />
                            <p className="text-white">Office of Augustus</p>
                        </Link>
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64491f577f22d780663c25d1_ico-arrow.svg" className="w-3 h-3" alt="" />
                    </div>
                </div>
                <div className="border-r border-borderColor w-max">
                    <div className="w-max p-6 opacity-opacity1">
                        Active Discussions
                    </div>
                    <div className="px-5 py-2 border-t border-borderColor flex justify-between items-center hover:opacity-70 duration-200">
                        <Link to="#" target="_blank" className="flex items-center gap-4 mr-14 w-max">
                            <img src="/assets/images/logo.webp" className="w-8 lg:w-10 xl:w-12 2xl:w-14" alt="" />
                            <p className="text-white">DAO Proposals</p>
                        </Link>
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64491f577f22d780663c25d1_ico-arrow.svg" className="w-3 h-3" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}