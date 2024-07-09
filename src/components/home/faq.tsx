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
                        <h2>Frequently asked</h2>
                        <h2>
                            <span className="px-4 mr-6 relative">
                                Questions
                                <span className="absolute -top-2 left-2 w-full h-[1px] bg-borderColorThick" />
                                <span className="absolute bottom-2 -right-2 w-[1px] h-full bg-borderColorThick" />
                                <span className="absolute -bottom-2 right-2 w-full h-[1px] bg-borderColorThick" />
                                <span className="absolute top-2 -left-2 w-[1px] h-full bg-borderColorThick" />
                                <span className="absolute top-0 -translate-y-1/2 left-0 w-[1px] h-[1.414rem] rotate-45 bg-borderColorThick" />
                                <span className="absolute bottom-0 translate-y-1/2 right-0 w-[1px] h-[1.414rem] rotate-45 bg-borderColorThick" />
                            </span>
                        </h2>
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
                            <p className="opacity-60">What is the purpose of White Hat DAO ?</p>
                        )}
                    />
                    <Accordion
                        title="Are ChainGPT AI products already available?"
                        content={(
                            <p className="opacity-60">DeFi and web3 in general can be overwhelming, especially considering the amount of due diligence and analysis that stems from engaging with each new project. White Hat DAO aims to lower the risk of entry to web3 space by providing a safety rating platform to aggregate safety and security data on web3 projects, and act as a hub for web3 infosec activities.</p>
                        )}
                    />
                    <Accordion
                        title="What are the products White Hat DAO working on?"
                        content={(
                            <div className="opacity-60">
                                <p>Our Products are below:</p>
                                <p>Ai-Smart Contract Security Audit (We do manual audit as well)</p>
                                <p>Safety Rating ( available only for deployed contracts )</p>
                                <p>WHD Launchpad ( Multichain )</p>
                                <p>DAO Gov App</p>
                            </div>
                        )}
                    />
                    <Accordion
                        title="What is the mission & vision?"
                        content={(
                            <p className="opacity-60">White Hat DAO is a Decentralized Autonomous Organization and aims to build a better, safer environment for the web3 community. WHD provides solutions through research, education, web3 tools. Our safety & security applications will provide much needed security details for web3 users and investors before investing in any projects.</p>
                        )}
                    />
                    <Accordion
                        title="Who are your competitors?"
                        content={(
                            <p className="opacity-60">We are not here for competition; rather, we would like to work with all projects from different content niches and industries as long as we can raise awareness to create a safer environment in the web3 space.</p>
                        )}
                    />
                    <Accordion
                        title="What is the legal status of White Hat DAO?"
                        content={(
                            <p className="opacity-60">White Hat DAO has been registered as a legal entity under the name of ( White Hat DAO LLC ) as a Decentralized Autonomous Organization. Governed by a clear set of rules and executes actions automatically. Thus, effectively disregarding intermediaries. White Hat DAO controlled by Governance token holders. It does not have any employees. DAO Governors may propose any proposals drafted via our community forum. Once submitted the token holders will vote on whether to approve or reject these proposals.</p>
                        )}
                    />
                </div>
            </ContainerSmall>
        </div>
    )
}
