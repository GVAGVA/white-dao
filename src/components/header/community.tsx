import { Link } from "react-router-dom";

export default function Community() {
    return (
        <Link to='#' target="_blank" className="py-8 cursor-pointer group relative">
            Community
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white group-hover:w-full duration-300 z-10" />
        </Link>
    )
}
