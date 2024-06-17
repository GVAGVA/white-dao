import { useState } from "react"

interface propsType {
    title: string
    content: React.ReactElement
}

const Accordion = (props: propsType) => {
    const { title, content } = props

    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className="border border-borderColor bg-bgColor z-10 relative text-2xl overflow-hidden px-8">
            <div
                className="flex items-center justify-between cursor-pointer py-8"
                onClick={() => setOpen(!open)}
            >
                <p className="text-white max-w-[calc(100%-3rem)]">{title}</p>
                <div className={"w-8 h-8 relative duration-300" + (open ? ' rotate-45' : '')}>
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[2px] bg-borderColor" />
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-borderColor" />
                </div>
            </div>
            <div className={"duration-300" + (open ? ' h-max pb-8' : ' h-0')}>{content}</div>
        </div>
    )
}

export default Accordion
