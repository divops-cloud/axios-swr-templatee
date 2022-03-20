import Image from "next/image";
import CustomLink from "../components/CustomLink";

export default function AstronautIcon() {
    return (
        <>
            {/* add random dollar link */}
            <div>
                <span className="flex flex-row justify-center" data-aos="fade-down" data-aos-delay="300">
                    <Image className="flex flex-col justify-center mr-3 mb-0 hover:outline-none hover:ring-2 hover:border-transparent hover:ring-purple-400 bg-transparent hover:border-green-500 cursor-pointer dark:hover:border-gold-100 ease-out  hover:animate-float" src="/assets/images/astronaut-2.svg" width="100" height="120" alt="Astronaut Icon" />
                </span>
                {/* <div>
                    <span className="text-gray-400 dark:text-gray-400">`{<Name />}`</span>
                    <h1 className="font-medium dark:text-white text-gray-50 hover:underline">`{<Username />}`</h1>
                </div> */}
            </div>
        </>
    )
}