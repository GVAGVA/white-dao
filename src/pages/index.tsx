import { Button } from "@material-tailwind/react";
import { IconBrandDiscordFilled, IconBrandGithubFilled, IconBrandTwitterFilled, IconCurrencyEthereum, IconSettings } from "@tabler/icons-react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import React from "react";
import ServiceCard from "@/components/service-card";
import Web3NewsCard from "@/components/web3-news-card";
import Block from "@/components/block";

const data = [
  {
    label: "Dashboard",
    value: "dashboard",
    icon: IconBrandGithubFilled,
    desc: (
      <div className="mx-auto lg:w-3/4" style={{ color: 'rgba(255, 255, 255, 0.87)' }}>
        <h3 className="text-center mt-3">One-click project imports</h3>
        <p className="text-center mx-auto lg:w-3/4 mb-6">Import a smart contract from any chain, or via GitHub repository URL to get started</p>
        <div className="flex justify-between">
          <div className="mr-1 w-full rounded-lg bg-gradient-to-b from-indigo-700 to-light-blue-700 p-[2px] opacity-75 hover:opacity-100">
            <div className="rounded-lg bg-gradient-to-r h-full from-[#29234E] to-[#0D0C21] flex justify-between items-center py-2">
              <p className="pl-3">Github repository or smart contract address</p>
              <div className="flex items-center">
                <span className="px-2 border-r border-gray-600">
                  <IconSettings width={18} className="cursor-pointer" />
                </span>
                <span className="px-2">
                  <IconCurrencyEthereum className="cursor-pointer" />
                </span>
              </div>
            </div>
          </div>
          <Button>Import</Button>
        </div>
        <div className="flex justify-between items-center p-6 rounded-lg mt-16 bg-[#0F0D24] border border-gray-900">
          <p>Use your GitHub to log in and simplify your workflow with one-click imports from your public and private repos.</p>
          <div className="flex items-center gap-2 rounded-lg px-3 py-2 border border-gray-900 hover:border-[#796adb] hover:bg-[#191533] cursor-pointer duration-300">
            <IconBrandGithubFilled />
            <p className="w-full">Connect Github</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Profile",
    value: "profile",
    icon: IconBrandGithubFilled,
    desc: (
      <div className="mx-auto lg:w-3/4" style={{ color: 'rgba(255, 255, 255, 0.87)' }}>
        <h3 className="text-center mt-3">One-click project imports</h3>
        <p className="text-center mx-auto lg:w-3/4 mb-6">Import a smart contract from any chain, or via GitHub repository URL to get started</p>
        <div className="flex justify-between">
          <div className="mr-1 w-full rounded-lg bg-gradient-to-b from-indigo-700 to-light-blue-700 p-[2px] opacity-75 hover:opacity-100">
            <div className="rounded-lg bg-gradient-to-r h-full from-[#29234E] to-[#0D0C21] flex justify-between items-center py-2">
              <p className="pl-3">Github repository or smart contract address</p>
              <div className="flex items-center">
                <span className="px-2 border-r border-gray-600">
                  <IconSettings width={18} className="cursor-pointer" />
                </span>
                <span className="px-2">
                  <IconCurrencyEthereum className="cursor-pointer" />
                </span>
              </div>
            </div>
          </div>
          <Button>Import</Button>
        </div>
        <div className="flex justify-between items-center p-6 rounded-lg mt-16 bg-[#0F0D24] border border-gray-900">
          <p>Use your GitHub to log in and simplify your workflow with one-click imports from your public and private repos.</p>
          <div className="flex items-center gap-2 rounded-lg px-3 py-2 border border-gray-900 hover:border-[#796adb] hover:bg-[#191533] cursor-pointer duration-300">
            <IconBrandGithubFilled />
            <p className="w-full">Connect Github</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Settings",
    value: "settings",
    icon: IconBrandGithubFilled,
    desc: (
      <div className="mx-auto lg:w-3/4" style={{ color: 'rgba(255, 255, 255, 0.87)' }}>
        <h3 className="text-center mt-3">One-click project imports</h3>
        <p className="text-center mx-auto lg:w-3/4 mb-6">Import a smart contract from any chain, or via GitHub repository URL to get started</p>
        <div className="flex justify-between">
          <div className="mr-1 w-full rounded-lg bg-gradient-to-b from-indigo-700 to-light-blue-700 p-[2px] opacity-75 hover:opacity-100">
            <div className="rounded-lg bg-gradient-to-r h-full from-[#29234E] to-[#0D0C21] flex justify-between items-center py-2">
              <p className="pl-3">Github repository or smart contract address</p>
              <div className="flex items-center">
                <span className="px-2 border-r border-gray-600">
                  <IconSettings width={18} className="cursor-pointer" />
                </span>
                <span className="px-2">
                  <IconCurrencyEthereum className="cursor-pointer" />
                </span>
              </div>
            </div>
          </div>
          <Button>Import</Button>
        </div>
        <div className="flex justify-between items-center p-6 rounded-lg mt-16 bg-[#0F0D24] border border-gray-900">
          <p>Use your GitHub to log in and simplify your workflow with one-click imports from your public and private repos.</p>
          <div className="flex items-center gap-2 rounded-lg px-3 py-2 border border-gray-900 hover:border-[#796adb] hover:bg-[#191533] cursor-pointer duration-300">
            <IconBrandGithubFilled />
            <p className="w-full">Connect Github</p>
          </div>
        </div>
      </div>
    ),
  },
];

const Pages = () => {
  return (
    <div className="d-flex justify-center">
      <div className="container mx-auto">
        {/* nav */}
        <nav className="flex justify-between items-center py-4">
          <img src="/img/logo.png" alt="logo" width={48} />
          <div className="w-full flex justify-evenly">
            <a href='/home' className="text-lg p-4 font-semibold">HOME</a>
            <a href='/dao_governance' className="text-lg p-4 font-semibold">DAO GOVERNANCE</a>
            <a href='/audit' className="text-lg p-4 font-semibold">AUDIT</a>
            <a href='/gift_cards' className="text-lg p-4 font-semibold">GIFT CARDS</a>
          </div>
          <Button>CONNECT</Button>
        </nav>
        {/* nav end */}

        {/* home */}
        <div className="text-center rounded-md my-8 py-4 px-3">
          <h1 className="bg-gradient-to-r from-[#B13892] to-[#4F619D] inline-block text-transparent bg-clip-text font-extrabold mb-4">WHITE HAT DAO</h1>
          <p className="w-3/4 mx-auto mb-12">Safety and security should be at the heart of all platforms, especially pubic goods services, which is why we are passionate about providing technical support and high level security integration for projects from all blockchains and backgrounds.</p>
          <a href="#">
            <Button size="lg" variant="text" color="green" fullWidth>Join the WHD Discussion on Governance / Proposals / Blogposts</Button>
          </a>
        </div>
        {/* home end */}

        {/* tab */}
        <Block>
          <Tabs value="dashboard">
            <TabsHeader>
              {data.map(({ label, value, icon }) => (
                <Tab key={value} value={value}>
                  <div className="flex items-center gap-2">
                    {React.createElement(icon, { className: "w-5 h-5" })}
                    {label}
                  </div>
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </Block>
        {/* tab end */}

        {/* service */}
        <Block>
          <h2 className="text-center font-extrabold mb-8">SERVICES</h2>
          <div className="flex gap-8">
            <div className="basis-1/3">
              <ServiceCard />
            </div>
            <div className="basis-1/3">
              <ServiceCard />
            </div>
            <div className="basis-1/3">
              <ServiceCard />
            </div>
          </div>
        </Block>
        {/* service end */}

        {/* top brands */}
        <Block className="!p-0">
          <div className="bg-[#39384587] py-3 rounded-t-lg">
            <h3 className="text-center font-bold">Trusted by top brands</h3>
          </div>
          <div className="py-10 flex justify-center gap-12 items-center">
            <a href="https://www.layer2dao.org/" target="_blank">
              <img src="/assets/images/brands/Layer2DAO.png" width="75" alt="img" />
            </a>
            <a href="https://parcel.money/" target="_blank">
              <img src="/assets/images/brands/percel.svg" width="55" alt="img" />
            </a>
            <a href="https://unlock-protocol.com/" target="_blank">
              <img src="/assets/images/brands/unlock.svg" width="120" alt="img" />
            </a>
            <a href="https://daostar.one/" target="_blank">
              <img src="/assets/images/brands/daostar.jpg" width="75" alt="img" />
            </a>
            <a href="https://dework.xyz/" target="_blank">
              <img src="/assets/images/brands/dework.png" width="75" alt="img" />
            </a>
          </div>
        </Block>
        {/* top brands end */}

        {/* web3 news */}
        <Block>
          <h1 className="text-center font-extrabold mb-8">Web3 News</h1>
          <div className="flex gap-8">
            <div className="basis-1/4">
              <Web3NewsCard />
            </div>
            <div className="basis-1/4">
              <Web3NewsCard />
            </div>
            <div className="basis-1/4">
              <Web3NewsCard />
            </div>
            <div className="basis-1/4">
              <Web3NewsCard />
            </div>
          </div>
        </Block>
        {/* web3 news end */}

        {/* footer */}
        <div className="border-t border-light-blue-800 pb-4">
          <div className="flex items-center my-9">
            <img src="/img/logo.png" width={52} alt="logo" className="mr-2" />
            <h4 className="font-extrabold">WHITE HAT DAO</h4>
          </div>
          <div className="flex gap-4">
            <div className="basis-1/2 pr-8">
              <p className="text-[16px]">At <strong>White Hat DAO</strong>, we want to make it easy for everyone to embrace web3 technology / eco-system in a secure, decentralised and future-proof way. Join us in this Journey.</p>
            </div>
            <div className="basis-1/4">
              <p className="text-[20px] mb-2">Contact Us</p>
              <p className="text-[20px] text-[#CC2D8F]">hello@whitehatdao.com</p>
            </div>
            <div className="basis-1/4">
              <div className="flex gap-4">
                <a href="https://whitehatdao.com/White_Hat_DAO" target="_blank" className="w-14 h-14 rounded-full flex justify-center items-center cst-footer-icon">
                  <IconBrandTwitterFilled color="#346DA1" size={28} />
                </a>
                <a href="https://whitehatdao.com/White_Hat_DAO" target="_blank" className="w-14 h-14 rounded-full flex justify-center items-center cst-footer-icon">
                  <IconBrandGithubFilled color="#346DA1" size={28} />
                </a>
                <a href="https://whitehatdao.com/White_Hat_DAO" target="_blank" className="w-14 h-14 rounded-full flex justify-center items-center cst-footer-icon">
                  <IconBrandDiscordFilled color="#346DA1" size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* footer end */}
      </div>
    </div>
  )
}

export default Pages
