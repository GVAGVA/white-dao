import { Button } from "@material-tailwind/react"
import { IconCalendarMonth } from "@tabler/icons-react"

const Web3NewsCard = () => {
    return (
        <div className="rounded-lg bg-gray-800">
            <img src="/assets/images/blogs/blog-1.jpeg" alt="service" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-5">
                <div className="flex justify-between mb-3">
                    <div className="flex items-center gap-1">
                        <img width="25" height="25" src="/assets/images/blogs/coindesk.png" />
                        CoinDesk
                    </div>
                    <div className="flex items-center gap-1">
                        <IconCalendarMonth />
                        Sep 8, 2023
                    </div>
                </div>
                <h4 className="h-14 text-[18px]">NFT Video Startup Glass Falls</h4>
                <p className="h-24">The startup's founders say they're ending active development after two years.</p>
                <Button>Learn More</Button>
            </div>
        </div>
    )
}

export default Web3NewsCard
