import { Link } from "react-router-dom";
import ContainerSmall from "../container-small";
import Accordion from "../ui/accordion";

export default function Faq() {
    return (
        <div className="pt-[114px] pb-[76px] px-[2.2vw] lg-max:px-[4.3vw]">
            <div className="pb-28">
                <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/646201707951b1100b67ddfd_double-dots.svg" loading="lazy" alt="Robot Eyes" className="h-[4px] ml-2 mb-10" />
                <div className="flex text-white">
                    <div className="w-1/2">
                        <h1>Frequently asked</h1>
                        <h1>
                            <span className="px-4 mr-6 relative">
                                Questions
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
                            Can’t find an answer to your question?
                            <br />
                            Feel free to{' '}
                            <Link to='#' className="underline hover:no-underline">contact us.</Link>
                        </p>
                    </div>
                </div>
            </div>
            <ContainerSmall>
                <div className="flex justify-between px-8 pb-16">
                    <Link to='#' className="p-8 uppercase text-lg text-white relative">
                        about ChainGPT ai
                        <img
                            src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/644fa7ccf9e72f37ae5162ad_corner-bottom-right.svg"
                            alt=""
                            className="absolute top-0 left-0 rotate-180"
                        />
                        <img
                            src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/644fa7ccf9e72f37ae5162ad_corner-bottom-right.svg"
                            alt=""
                            className="absolute top-0 right-0 -rotate-90"
                        />
                        <img
                            src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/644fa7ccf9e72f37ae5162ad_corner-bottom-right.svg"
                            alt=""
                            className="absolute bottom-0 right-0"
                        />
                        <img
                            src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/644fa7ccf9e72f37ae5162ad_corner-bottom-right.svg"
                            alt=""
                            className="absolute bottom-0 left-0 rotate-90"
                        />
                    </Link>
                    <Link to='#' className="p-8 uppercase text-lg opacity-60">
                        $cgpt utility token
                    </Link>
                    <Link to='#' className="p-8 uppercase text-lg opacity-60">
                        staking & dao
                    </Link>
                </div>
                <div>
                    <Accordion
                        title="What is ChainGPT?"
                        content={(
                            <p className="opacity-60">ChainGPT is a cutting-edge AI infrastructure focused on developing AI-enhanced solutions for the Web3, Blockchain, and Cryptocurrency sectors. It aims to make the decentralized digital space more accessible and efficient for users and startups by offering a suite of AI-powered tools and applications tailored for the evolving digital landscape.</p>
                        )}
                    />
                    <Accordion
                        title="Are ChainGPT AI products already available?"
                        content={(
                            <>
                                <p className="opacity-60 mb-8">Yes ChainGPT AI products are fully available!</p>
                                <div className="flex">
                                    <p className="opacity-60">
                                        Crypto AI Hub (most AI tools are here):
                                    </p>
                                    <Link to='#' className="underline ml-2">
                                        https://app.chaingpt.org
                                    </Link>
                                </div>
                                <div className="flex">
                                    <p className="opacity-60">
                                        Crypto AI Hub (most AI tools are here):
                                    </p>
                                    <Link to='#' className="underline ml-2">
                                        https://app.chaingpt.org
                                    </Link>
                                </div>
                                <div className="flex">
                                    <p className="opacity-60">
                                        Crypto AI Hub (most AI tools are here):
                                    </p>
                                    <Link to='#' className="underline ml-2">
                                        https://app.chaingpt.org
                                    </Link>
                                </div>
                                <div className="flex mb-8">
                                    <p className="opacity-60">
                                        Crypto AI Hub (most AI tools are here):
                                    </p>
                                    <Link to='#' className="underline ml-2">
                                        https://app.chaingpt.org
                                    </Link>
                                </div>
                                <div className="flex italic">
                                    <p className="opacity-60">
                                        Crypto AI Hub (most AI tools are here):
                                    </p>
                                    <Link to='#' className="underline ml-2">
                                        https://app.chaingpt.org
                                    </Link>
                                </div>
                            </>
                        )}
                    />
                    <Accordion
                        title="What is ChainGPT?"
                        content={(
                            <p className="opacity-60">ChainGPT is a cutting-edge AI infrastructure focused on developing AI-enhanced solutions for the Web3, Blockchain, and Cryptocurrency sectors. It aims to make the decentralized digital space more accessible and efficient for users and startups by offering a suite of AI-powered tools and applications tailored for the evolving digital landscape.</p>
                        )}
                    />
                    <Accordion
                        title="What is ChainGPT?"
                        content={(
                            <p className="opacity-60">ChainGPT is a cutting-edge AI infrastructure focused on developing AI-enhanced solutions for the Web3, Blockchain, and Cryptocurrency sectors. It aims to make the decentralized digital space more accessible and efficient for users and startups by offering a suite of AI-powered tools and applications tailored for the evolving digital landscape.</p>
                        )}
                    />
                    <Accordion
                        title="What are the legal terms on the NFTs generated? What are the legal terms of the Smart Contracts generated by ChainGPT in my collection?"
                        content={(
                            <p className="opacity-60">Smart contracts that are generated by ChainGPT’s AI are fully owned by the user. Legality relating to IP such as copyrights, trademarks, and so on is subject to the laws of the jurisdiction in which the user is residing.</p>
                        )}
                    />
                </div>
            </ContainerSmall>
        </div>
    )
}
