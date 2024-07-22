import { useEffect, useState } from "react"

interface propsType {
    content: React.ReactElement[]
    duration: number
}

const Slider = (props: propsType) => {
    const { content, duration } = props

    const [num, setNum] = useState<number>(0)

    useEffect(() => {
        let nextNum = 0
        let count = content.length
        setInterval(() => {
            nextNum = nextNum < count - 1 ? nextNum + 1 : 0
            setNum(nextNum)
        }, duration)
    }, [])

    return (
        <div className="flex w-max duration-500" style={{ translate: `-${num * 33}vw` }}>
            {content.map((dom, index) => (
                <div key={index}>{dom}</div>
            ))}
        </div>
    )
}

export default Slider
