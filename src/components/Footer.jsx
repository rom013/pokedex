import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { memo } from "react";

function Footer(){
    return(
        <footer 
            className="pb-16 pt-8 flex justify-center text-white gap-4 border-t border-t-gray-100 mt-10"
        >
            <a href="https://github.com/rom013">
                <GithubLogo size={24}/>
            </a>
            <a href="#">
                <LinkedinLogo size={24}/>
            </a>
            <a href="https://instagram.com/romu_013">
                <InstagramLogo size={24}/>
            </a>
        </footer>
    )
}

export default memo(Footer)