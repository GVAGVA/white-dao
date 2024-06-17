import ContainerBig from "../container-big";

export default function Product() {
    return (
        <div className="min-h-[100vh] grid content-between pt-[150px] pb-[20px] border-b border-borderColor">
            <div className="flex h-[100px]">
                <div className="w-[17vw] h-full" />
                <div className="w-[33vw] flex relative">
                    <div className="absolute top-0 left-0 flex">
                        <div className="w-[33vw] border border-white text-white flex text-xl">
                            <div className="w-1/5 h-[100px] flex justify-center items-center border-r border-white">01</div>
                            <div className="w-4/5 h-[100px] flex justify-center items-center">SMART CONTRACT DEVELOPMENT</div>
                        </div>
                        <div className="w-[33vw] border border-borderColor flex text-xl">
                            <div className="w-1/5 h-[100px] flex justify-center items-center opacity-40 border-r border-borderColor">02</div>
                            <div className="w-4/5 h-[100px] flex justify-center items-center opacity-40">SMART CONTRACT DEVELOPMENT</div>
                        </div>
                        <div className="w-[33vw] border border-borderColor flex text-xl">
                            <div className="w-1/5 h-[100px] flex justify-center items-center opacity-40 border-r border-borderColor">02</div>
                            <div className="w-4/5 h-[100px] flex justify-center items-center opacity-40">SMART CONTRACT DEVELOPMENT</div>
                        </div>
                        <div className="w-[33vw] border border-borderColor flex text-xl">
                            <div className="w-1/5 h-[100px] flex justify-center items-center opacity-40 border-r border-borderColor">02</div>
                            <div className="w-4/5 h-[100px] flex justify-center items-center opacity-40">SMART CONTRACT DEVELOPMENT</div>
                        </div>
                        <div className="w-[33vw] border border-borderColor flex text-xl">
                            <div className="w-1/5 h-[100px] flex justify-center items-center opacity-40 border-r border-borderColor">02</div>
                            <div className="w-4/5 h-[100px] flex justify-center items-center opacity-40">SMART CONTRACT DEVELOPMENT</div>
                        </div>
                        <div className="w-[33vw] border border-borderColor flex text-xl">
                            <div className="w-1/5 h-[100px] flex justify-center items-center opacity-40 border-r border-borderColor">02</div>
                            <div className="w-4/5 h-[100px] flex justify-center items-center opacity-40">SMART CONTRACT DEVELOPMENT</div>
                        </div>
                        <div className="w-[33vw] border border-borderColor flex text-xl">
                            <div className="w-1/5 h-[100px] flex justify-center items-center opacity-40 border-r border-borderColor">02</div>
                            <div className="w-4/5 h-[100px] flex justify-center items-center opacity-40">SMART CONTRACT DEVELOPMENT</div>
                        </div>
                        <div className="w-[33vw] border border-borderColor flex text-xl">
                            <div className="w-1/5 h-[100px] flex justify-center items-center opacity-40 border-r border-borderColor">02</div>
                            <div className="w-4/5 h-[100px] flex justify-center items-center opacity-40">SMART CONTRACT DEVELOPMENT</div>
                        </div>
                        <div className="w-[33vw] border border-borderColor flex text-xl">
                            <div className="w-1/5 h-[100px] flex justify-center items-center opacity-40 border-r border-borderColor">02</div>
                            <div className="w-4/5 h-[100px] flex justify-center items-center opacity-40">SMART CONTRACT DEVELOPMENT</div>
                        </div>
                    </div>
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/643550c922d6d34b8dffd28d_corner.svg" loading="lazy" alt="" className="absolute bottom-full right-full translate-x-[-7px]" />
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/643550c922d6d34b8dffd28d_corner.svg" loading="lazy" alt="" className="absolute bottom-full left-full translate-x-[7px] rotate-90" />
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/643550c922d6d34b8dffd28d_corner.svg" loading="lazy" alt="" className="absolute top-full left-full translate-x-[7px] rotate-180" />
                    <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/643550c922d6d34b8dffd28d_corner.svg" loading="lazy" alt="" className="absolute top-full right-full translate-x-[-7px] -rotate-90" />
                </div>
                <div className="w-[50vw] h-full" />
            </div>
            <ContainerBig className="pt-12 flex justify-between items-end">
                <div>
                    <div className="mb-6 flex">
                        <span className="w-1 h-1 block rounded-full bg-white mx-2" />
                        <span className="w-1 h-1 block rounded-full bg-white" />
                    </div>
                    <div>
                        <div className="mt-2 ml-2 px-4 relative">
                            <h1 className="text-[70px] leading-[1.2]">Your Gateway</h1>
                            <span className="absolute -top-2 left-2 w-full h-[1px] bg-borderColor" />
                            <span className="absolute bottom-2 -right-2 w-[1px] h-full bg-borderColor" />
                            <span className="absolute -bottom-2 right-2 w-full h-[1px] bg-borderColor" />
                            <span className="absolute top-2 -left-2 w-[1px] h-full bg-borderColor" />
                            <span className="absolute top-0 -translate-y-1/2 left-0 w-[1px] h-[1.414rem] rotate-45 bg-borderColor" />
                            <span className="absolute bottom-0 translate-y-1/2 right-0 w-[1px] h-[1.414rem] rotate-45 bg-borderColor" />
                        </div>
                    </div>
                    <h1 className="text-[70px]">To Web3 AI</h1>
                </div>
                <div className="mr-[14.8vw] pr-12 w-[12vw] text-white text-2xl pb-8">
                For individuals, developers, and businesses.
                </div>
            </ContainerBig>
        </div>
    )
}
