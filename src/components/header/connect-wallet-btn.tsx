import { IconDots, IconLoader2 } from "@tabler/icons-react"
import { useWeb3Modal } from "@web3modal/wagmi/react"
import { useAccount } from "wagmi"

const ConnectWalletBtn = () => {
  const { open } = useWeb3Modal()
  const { isConnecting, isConnected } = useAccount()

  return (
    <span
      className="inline-block p-[8px] cursor-pointer relative"
      onClick={() => open()}
    >
      <span className="bg-[#0A090F] h-min w-max flex gap-2 justify-between items-center px-2">
        {isConnecting ? (
          <>
            <IconLoader2 className="animate-spin" />
            <p>CONNECTING ...</p>
          </>
        ) : isConnected ? (
            <p>CONNECTED</p>
        ) : (
          <>
            <IconDots />
            <p>CONNECT NOW</p>
          </>
        )}
      </span>
      <span className="bg-white w-full h-[1px] absolute top-[-4px] left-[4px]" />
      <span className="bg-white h-full w-[1px] absolute bottom-[4px] right-[-4px]" />
      <span className="bg-white w-full h-[1px] absolute bottom-[-4px] right-[4px]" />
      <span className="bg-white h-[70%] w-[1px] absolute bottom-[-4px] left-[-4px]" />
      <span className="bg-white h-[11.312px] w-[1px] absolute bottom-[-5.3px] right-0 rotate-45" />
      <span className="bg-white h-[11.312px] w-[1px] absolute top-[-5.3px] left-0 rotate-45" />
    </span>
  )
}

export default ConnectWalletBtn
