import { Link } from "react-router-dom";
import ContainerSmall from "../container-small";

export default function Roadmap() {
    return (
        <div className="pt-[114px] pb-[76px] px-[2.2vw] lg-max:px-[4.3vw]">
            <div className="pb-28">
                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/646201707951b1100b67ddfd_double-dots.svg" loading="lazy" alt="Robot Eyes" className="h-[4px] ml-2 mb-10" />
                <div className="flex text-white">
                    <div className="w-1/2">
                        <h1>Explore our</h1>
                        <h1>
                            <span className="px-4 mr-6 relative">
                                Roadmap
                                <span className="absolute -top-2 left-2 w-full h-[1px] bg-borderColorThick" />
                                <span className="absolute bottom-2 -right-2 w-[1px] h-full bg-borderColorThick" />
                                <span className="absolute -bottom-2 right-2 w-full h-[1px] bg-borderColorThick" />
                                <span className="absolute top-2 -left-2 w-[1px] h-full bg-borderColorThick" />
                                <span className="absolute top-0 -translate-y-1/2 left-0 w-[1px] h-[1.414rem] rotate-45 bg-borderColorThick" />
                                <span className="absolute bottom-0 translate-y-1/2 right-0 w-[1px] h-[1.414rem] rotate-45 bg-borderColorThick" />
                            </span>
                        </h1>
                    </div>
                    <div className="w-[30vw] px-6 py-4">
                        <p className="text-2xl">
                            This is a short version of our roadmap.
                            <br />
                            Read full version{' '}
                            <Link to='#' className="underline hover:no-underline">here</Link>
                        </p>
                    </div>
                </div>
                <ContainerSmall className="flex items-center mt-16 mb-4">
                    <img src="https://assets-global.website-files.com/64354b8ce4872ad8cd1c7b04/65685205c7249ff1f0975fcf_roadmap.webp" loading="lazy" alt="Roadmap Illustration: parts of a robot." className="w-full" />
                </ContainerSmall>
            </div>
            <div className="w-[33vw] ml-[14.8vw] mb-32 relative">
                <div className="absolute top-0 right-full w-[14.8vw] flex gap-4">
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6446951576624313547bb1bd_arrow-next.svg" className="w-[64px] h-[64px] cursor-pointer hover:opacity-70 duration-150 rotate-180" alt="" />
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6446951576624313547bb1bd_arrow-next.svg" className="w-[64px] h-[64px] cursor-pointer hover:opacity-70 duration-150" alt="" />
                </div>
                <div className="flex w-max">
                    <div className="w-[33vw] border-y border-borderColor flex flex-col">
                        <div className="flex">
                            <p className="flex gap-6 border-b border-borderColor px-8 py-6 opacity-60">
                                <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180" />
                                RDMP 1
                            </p>
                            <p className="border border-white px-8 flex items-center text-xl">IN PROGRESS</p>
                        </div>
                        <div className="px-8 py-6 text-2xl text-white border-b border-borderColor">
                            2024-2025 INITIATIVE
                        </div>
                        <div className="p-8 h-full grid content-between">
                            <div>
                                <div className="text-white text-2xl mb-4 flex items-start gap-4">
                                    <img alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 w-3 py-3 opacity-60" />
                                    <p>Creation of a bespoke Layer-1 blockchain meticulously designed for the training and execution of AI models</p>
                                </div>
                                <div className="text-white text-2xl mb-4 flex items-start gap-4">
                                    <img alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 w-3 py-3 opacity-60" />
                                    <p>Creation of a bespoke Layer-1 blockchain meticulously designed for the training and execution of AI models</p>
                                </div>
                                <div className="mb-12 flex items-center gap-4">
                                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/65688365501249abd807f646_ico-plus-color.svg" loading="lazy" alt="" className="w-3 h-3" />
                                    <p className="opacity-60">AND 3 MORE ITEMS</p>
                                </div>
                            </div>
                            <Link to='#' className="border border-borderColor p-8 flex justify-between items-center">
                                <p>MORE DETAILS</p>
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6437b8bc549a694211710a04_arrow-right-color.svg"
                                    alt=""
                                    className="w-6 h-6"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="w-[33vw] border-y border-borderColor flex flex-col">
                        <div className="flex">
                            <p className="flex gap-6 border-b border-borderColor px-8 py-6 opacity-60">
                                <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180" />
                                RDMP 1
                            </p>
                            <p className="border border-white px-8 flex items-center text-xl">IN PROGRESS</p>
                        </div>
                        <div className="px-8 py-6 text-2xl text-white border-b border-borderColor">
                            2024-2025 INITIATIVE
                        </div>
                        <div className="p-8 h-full grid content-between">
                            <div>
                                <div className="text-white text-2xl mb-4 flex items-start gap-4">
                                    <img alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 w-3 py-3 opacity-60" />
                                    <p>Creation of a bespoke Layer-1 blockchain meticulously designed for the training and execution of AI models</p>
                                </div>
                                <div className="text-white text-2xl mb-4 flex items-start gap-4">
                                    <img alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 w-3 py-3 opacity-60" />
                                    <p>Creation of a bespoke Layer-1 blockchain meticulously designed for the training and execution of AI models</p>
                                </div>
                                <div className="text-white text-2xl mb-4 flex items-start gap-4">
                                    <img alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 w-3 py-3 opacity-60" />
                                    <p>Creation of a bespoke Layer-1 blockchain meticulously designed for the training and execution of AI models</p>
                                </div>
                                <div className="text-white text-2xl mb-4 flex items-start gap-4">
                                    <img alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 w-3 py-3 opacity-60" />
                                    <p>Creation of a bespoke Layer-1 blockchain meticulously designed for the training and execution of AI models</p>
                                </div>
                                <div className="mb-12 flex items-center gap-4">
                                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/65688365501249abd807f646_ico-plus-color.svg" loading="lazy" alt="" className="w-3 h-3" />
                                    <p className="opacity-60">AND 41 MORE ITEMS</p>
                                </div>
                            </div>
                            <Link to='#' className="border border-borderColor p-8 flex justify-between items-center">
                                <p>MORE DETAILS</p>
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6437b8bc549a694211710a04_arrow-right-color.svg"
                                    alt=""
                                    className="w-6 h-6"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="w-[33vw] border-y border-borderColor flex flex-col">
                        <div className="flex">
                            <p className="flex gap-6 border-b border-borderColor px-8 py-6 opacity-60">
                                <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180" />
                                RDMP 1
                            </p>
                            <p className="border border-white px-8 flex items-center text-xl">IN PROGRESS</p>
                        </div>
                        <div className="px-8 py-6 text-2xl text-white border-b border-borderColor">
                            2024-2025 INITIATIVE
                        </div>
                        <div className="p-8 h-full grid content-between">
                            <div>
                                <div className="text-white text-2xl mb-4 flex items-start gap-4">
                                    <img alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 w-3 py-3 opacity-60" />
                                    <p>Creation of a bespoke Layer-1 blockchain meticulously designed for the training and execution of AI models</p>
                                </div>
                                <div className="text-white text-2xl mb-4 flex items-start gap-4">
                                    <img alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 w-3 py-3 opacity-60" />
                                    <p>Creation of a bespoke Layer-1 blockchain meticulously designed for the training and execution of AI models</p>
                                </div>
                                <div className="mb-12 flex items-center gap-4">
                                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/65688365501249abd807f646_ico-plus-color.svg" loading="lazy" alt="" className="w-3 h-3" />
                                    <p className="opacity-60">AND 3 MORE ITEMS</p>
                                </div>
                            </div>
                            <Link to='#' className="border border-borderColor p-8 flex justify-between items-center">
                                <p>MORE DETAILS</p>
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6437b8bc549a694211710a04_arrow-right-color.svg"
                                    alt=""
                                    className="w-6 h-6"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="w-[33vw] border-y border-borderColor flex flex-col">
                        <div className="flex">
                            <p className="flex gap-6 border-b border-borderColor px-8 py-6 opacity-60">
                                <img width="5" height="6" alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180" />
                                RDMP 1
                            </p>
                            <p className="border border-white px-8 flex items-center text-xl">IN PROGRESS</p>
                        </div>
                        <div className="px-8 py-6 text-2xl text-white border-b border-borderColor">
                            2024-2025 INITIATIVE
                        </div>
                        <div className="p-8 h-full grid content-between">
                            <div>
                                <div className="text-white text-2xl mb-4 flex items-start gap-4">
                                    <img alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 w-3 py-3 opacity-60" />
                                    <p>Creation of a bespoke Layer-1 blockchain meticulously designed for the training and execution of AI models</p>
                                </div>
                                <div className="text-white text-2xl mb-4 flex items-start gap-4">
                                    <img alt="" src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" loading="lazy" className="rotate-180 w-3 py-3 opacity-60" />
                                    <p>Creation of a bespoke Layer-1 blockchain meticulously designed for the training and execution of AI models</p>
                                </div>
                                <div className="mb-12 flex items-center gap-4">
                                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/65688365501249abd807f646_ico-plus-color.svg" loading="lazy" alt="" className="w-3 h-3" />
                                    <p className="opacity-60">AND 3 MORE ITEMS</p>
                                </div>
                            </div>
                            <Link to='#' className="border border-borderColor p-8 flex justify-between items-center">
                                <p>MORE DETAILS</p>
                                <img
                                    src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6437b8bc549a694211710a04_arrow-right-color.svg"
                                    alt=""
                                    className="w-6 h-6"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
