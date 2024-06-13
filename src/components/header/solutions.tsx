import ContainerBig from "../container-big"

export default function Solutions() {
    return (
        <ContainerBig className="pt-[114px] pb-[76px]">
            <div className="mb-6 flex">
                <span className="w-1 h-1 block rounded-full bg-white mx-2" />
                <span className="w-1 h-1 block rounded-full bg-white" />
            </div>
            <div className="relative inline-block">
                <h1 className="inline-block text-[95px] ml-2 mt-2 px-4 leading-[1.125]">Our Solutions</h1>
                <span className="absolute w-[1px] h-[80%] bg-borderColor top-2 -left-2" />
                <span className="absolute w-full h-[1px] bg-borderColor -top-2 left-2" />
                <span className="absolute w-[70%] h-[1px] bg-borderColor -bottom-2 right-2" />
                <span className="absolute h-[1.414rem] w-[1px] bg-borderColor top-0 left-0 -translate-y-1/2 rotate-45" />
                <span className="absolute h-[1.414rem] w-[1px] bg-borderColor bottom-0 right-0 translate-y-1/2 rotate-45" />
            </div>
        </ContainerBig>
    )
}
