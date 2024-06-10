import React from "react"

interface propsType {
    className?: string
    children: React.ReactNode
}

export default function Block({ children, className }: propsType) {
    return (
        <div className={"bg-[#211f3199] mb-28 p-3 rounded-lg " + className}>
            {children}
        </div>
    )
}
