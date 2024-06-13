import { IconDots, IconLoader2 } from "@tabler/icons-react"
import { useWeb3Modal } from "@web3modal/wagmi/react"
import { useAccount } from "wagmi"

const ConnectWalletBtn = () => {
  const { open } = useWeb3Modal()
  const { isConnecting, isConnected } = useAccount()

  return (
    <span
      className="inline-block bg-gradient-to-br from-[#FB7054] via-[#617CDB] to-[#74E79A] p-[12px] cursor-pointer"
      onClick={() => open()}
    >
      <span className="bg-[#0A090F] h-min w-max flex gap-2 justify-between items-center px-2 relative">
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

        {/* fill backcolor basic */}
        <span className="absolute bottom-[100%] left-0 w-[100%] h-[10px] bg-[#0A090F]"></span>
        <span className="absolute top-[100%] left-0 w-[100%] h-[10px] bg-[#0A090F]"></span>
        <span className="absolute left-[100%] top-0 h-[100%] w-[10px] bg-[#0A090F]"></span>
        <span className="absolute right-[100%] top-0 h-[100%] w-[10px] bg-[#0A090F]"></span>

        {/* fill backcolor top left corner */}
        <span className="absolute left-[-7px] top-[-7px] rotate-45 h-[13.5px] w-[13.5px] bg-[#0A090F]"></span>
        <span className="absolute left-[-19px] top-[-19px] rotate-45 h-[14px] w-[14px] bg-[#0A090F]"></span>

        {/* fill backcolor top right corner */}
        <span className="absolute left-[100%] bottom-[100%] h-[10px] w-[10px] bg-[#0A090F]"></span>

        {/* fill backcolor bottom right corner */}
        <span className="absolute right-[-6.5px] bottom-[-6.5px] rotate-45 h-[13.5px] w-[13.5px] bg-[#0A090F]"></span>
        <span className="absolute right-[-19px] bottom-[-19px] rotate-45 h-[14px] w-[14px] bg-[#0A090F]"></span>

        {/* fill backcolor bottom left corner */}
        <span className="absolute right-[100%] top-[100%] h-[10px] w-[10px] bg-[#0A090F]"></span>

        {/* break left border */}
        <span className="absolute left-[-12px] top-[-2px] h-[12px] w-[4px] bg-[#0A090F]"></span>
      </span>
    </span>
  )
}

export default ConnectWalletBtn
