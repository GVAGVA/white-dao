import { Button } from "@material-tailwind/react";
import { IconBrandDiscordFilled, IconBrandGithubFilled, IconBrandTwitterFilled, IconBug, IconComponents, IconCurrencyEthereum, IconDatabaseImport, IconDots, IconSettings } from "@tabler/icons-react";
import { useState } from "react";
import ServiceCard from "@/components/service-card";
import Web3NewsCard from "@/components/web3-news-card";
import Block from "@/components/block";

type navLinkLabelType = 'HOME' | 'DAO GOVERNANCE' | 'AUDIT' | 'GIFT CARDS'

type tabLabelType = 'Imports' | 'Contents' | 'Bounties'

const tabContent = (value: tabLabelType) => {
  switch (value) {
    case 'Imports':
      return (
        <div className="mx-auto lg:w-3/4" style={{ color: 'rgba(255, 255, 255, 0.87)' }}>
          <h4 className="text-center">One-click project imports</h4>
          <p className="text-center mx-auto lg:w-3/4 mb-6">Import a smart contract from any chain, or via GitHub repository URL to get started</p>
          <div className="flex justify-between">
            <div className="mr-1 w-full rounded-lg bg-gradient-to-b from-indigo-700 to-light-blue-700 p-[2px] opacity-75 hover:opacity-100">
              <div className="rounded-lg bg-gradient-to-r h-full from-[#29234E] to-[#0D0C21] flex justify-between items-center py-3">
                <p className="pl-3 text-lg">Github repository or smart contract address</p>
                <div className="flex items-center">
                  <span className="px-2 py-1 border-r border-gray-600">
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
      )

    case 'Contents':
      return (
        <div className="mx-auto lg:w-3/4" style={{ color: 'rgba(255, 255, 255, 0.87)' }}>
          <h4 className="text-center">One-click project imports</h4>
          <p className="text-center mx-auto lg:w-3/4 mb-6">Import a smart contract from any chain, or via GitHub repository URL to get started</p>
          <div className="flex justify-between">
            <div className="mr-1 w-full rounded-lg bg-gradient-to-b from-indigo-700 to-light-blue-700 p-[2px] opacity-75 hover:opacity-100">
              <div className="rounded-lg bg-gradient-to-r h-full from-[#29234E] to-[#0D0C21] flex justify-between items-center py-3">
                <p className="pl-3 text-lg">Github repository or smart contract address</p>
                <div className="flex items-center">
                  <span className="px-2 py-1 border-r border-gray-600">
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
      )

    case 'Bounties':
      return (
        <div className="mx-auto lg:w-3/4" style={{ color: 'rgba(255, 255, 255, 0.87)' }}>
          <h4 className="text-center">One-click project imports</h4>
          <p className="text-center mx-auto lg:w-3/4 mb-6">Import a smart contract from any chain, or via GitHub repository URL to get started</p>
          <div className="flex justify-between">
            <div className="mr-1 w-full rounded-lg bg-gradient-to-b from-indigo-700 to-light-blue-700 p-[2px] opacity-75 hover:opacity-100">
              <div className="rounded-lg bg-gradient-to-r h-full from-[#29234E] to-[#0D0C21] flex justify-between items-center py-3">
                <p className="pl-3 text-lg">Github repository or smart contract address</p>
                <div className="flex items-center">
                  <span className="px-2 py-1 border-r border-gray-600">
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
      )

    default:
      break;
  }
}

const Pages = () => {
  const [navLinkLabel, setNavLinkLabel] = useState<navLinkLabelType>('HOME')
  const [tabLabel, setTabLabel] = useState<tabLabelType>('Imports')

  return (
    <div>
      {/* background image */}
      <div className="fixed w-full h-[100vh] flex items-center justify-center -z-10">
        <img src="/assets/images/bg-img.png" className="w-2/5" alt="bg-img" />
      </div>
      {/* background image end */}

      <div className="container mx-auto">
        {/* nav */}
        <nav className="flex items-center">
          <img src="/assets/images/logo.png" alt="logo" width={48} />
          <div className="w-full flex justify-evenly">
            <a href='#' className={"pt-1 block" + (navLinkLabel === 'HOME' ? ' bg-gradient-to-r from-[#FC6856] via-[#6DE79D] to-[#724EE8]' : '')} onClick={() => setNavLinkLabel('HOME')}>
              <span className="block text-lg px-8 py-6 font-semibold bg-[#0A090F]">HOME</span>
            </a>
            <a href='#' className={"pt-1 block" + (navLinkLabel === 'DAO GOVERNANCE' ? ' bg-gradient-to-r from-[#FC6856] via-[#6DE79D] to-[#724EE8]' : '')} onClick={() => setNavLinkLabel('DAO GOVERNANCE')}>
              <span className="block text-lg px-8 py-6 font-semibold bg-[#0A090F]">DAO GOVERNANCE</span>
            </a>
            <a href='#' className={"pt-1 block" + (navLinkLabel === 'AUDIT' ? ' bg-gradient-to-r from-[#FC6856] via-[#6DE79D] to-[#724EE8]' : '')} onClick={() => setNavLinkLabel('AUDIT')}>
              <span className="block text-lg px-8 py-6 font-semibold bg-[#0A090F]">AUDIT</span>
            </a>
            <a href='#' className={"pt-1 block" + (navLinkLabel === 'GIFT CARDS' ? ' bg-gradient-to-r from-[#FC6856] via-[#6DE79D] to-[#724EE8]' : '')} onClick={() => setNavLinkLabel('GIFT CARDS')}>
              <span className="block text-lg px-8 py-6 font-semibold bg-[#0A090F]">GIFT CARDS</span>
            </a>
          </div>
          <div className="mr-1 bg-gradient-to-br from-[#FB7054] via-[#617CDB] to-[#74E79A] p-[2px] opacity-75 hover:opacity-100 cursor-pointer">
            <div className="bg-[#0A090F] h-min w-max flex gap-2 justify-between items-center py-2 px-3">
              <IconDots />
              <p>CONNECT NOW</p>
            </div>
          </div>
        </nav>
        {/* nav end */}

        {/* home */}
        <div className="text-center rounded-md mt-32 mb-32 px-3">
          <h1 className="bg-gradient-to-r from-[#B13892] to-[#4F619D] inline-block text-transparent bg-clip-text font-extrabold text-7xl mb-16">WHITE HAT DAO</h1>
          <p className="w-3/4 mx-auto text-2xl mb-16">Safety and security should be at the heart of all platforms, especially pubic goods services, which is why we are passionate about providing technical support and high level security integration for projects from all blockchains and backgrounds.</p>
          <a href="#" className="text-center text-green-800 text-xl hover:underline"> the WHD Discussion on Governance / Proposals / Blogposts</a>
        </div>
        {/* home end */}

        {/* tab */}
        <div className="mb-32">
          <div className="flex rounded-lg border-2 border-[#8870e64d] overflow-hidden mb-12">
            <div className={"w-1/3 flex justify-center items-center gap-2 text-[15px] p-2 text-gray-500 cursor-pointer hover:bg-[#ffffff14] duration-300 border-r border-r-[#8870e64d]" + (tabLabel === 'Imports' ? ' !bg-[#0d0c21]' : '')} onClick={() => setTabLabel('Imports')}>
              <IconDatabaseImport className="w-5 h-5" />
              Imports
            </div>
            <div className={"w-1/3 flex justify-center items-center gap-2 text-[15px] p-2 text-gray-500 cursor-pointer hover:bg-[#ffffff14] duration-300 border-r border-r-[#8870e64d]" + (tabLabel === 'Contents' ? ' !bg-[#0d0c21]' : '')} onClick={() => setTabLabel('Contents')}>
              <IconComponents className="w-5 h-5" />
              Contents
            </div>
            <div className={"w-1/3 flex justify-center items-center gap-2 text-[15px] p-2 text-gray-500 cursor-pointer hover:bg-[#ffffff14] duration-300" + (tabLabel === 'Bounties' ? ' !bg-[#0d0c21]' : '')} onClick={() => setTabLabel('Bounties')}>
              <IconBug className="w-5 h-5" />
              Bounties
            </div>
          </div>
          {tabContent(tabLabel)}
        </div>
        {/* tab end */}

        {/* service */}
        <Block>
          <h2 className="text-center font-extrabold mb-10">SERVICES</h2>
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
        <Block>
          <h3 className="text-center font-bold">Trusted by top brands</h3>
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
          <h2 className="text-center font-extrabold mb-10">Web3 News</h2>
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
            <img src="/assets/images/logo.png" width={52} alt="logo" className="mr-2" />
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
