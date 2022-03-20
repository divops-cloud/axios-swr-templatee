import Image from "next/image";
import CustomLink from "../CustomLink";

export default function RightSidebarLogo() {
  return (
    <>
      {/* add random dollar link */}
      <div>
        <span>
          <Image className="flex flex-row item-center bg-transparent hover:border-green-500 cursor-pointer dark:hover:border-gold-100 ease-out" src="/images/DivOps.svg" width="300" height="100" alt="Right Sidebar Logo" />
        </span>
      </div>
    </>
  )
}