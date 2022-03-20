import Image from "next/image";
import CustomLink from "../components/CustomLink";

export default function CloudCard() {
    return (
        <>
            {/* add random dollar link */}
            <div>
                <span className="flex flex-row justify-center" data-aos="fade-down" data-aos-delay="300">
                    <Image src="/assets/images/cloud-membership-token.svg" width="100" height="120" alt="Cloud Membership Token" 
                />
                </span>
                {/* <div>
                    <span className="text-gray-400 dark:text-gray-400">`{<Name />}`</span>
                    <h1 className="font-medium dark:text-white text-gray-50 hover:underline">`{<Username />}`</h1>
                </div> */}
            </div>
        </>
    )
}