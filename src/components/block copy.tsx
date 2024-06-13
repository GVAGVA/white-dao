import React from "react"

interface propsType {
    className?: string
    children: React.ReactNode
}

export default function Block({ children, className }: propsType) {
    return (
        <div className={"mb-32 " + (className || '')}>
            {children}
        </div>
    )
}
