import Image from "next/image";
import NavLinks from "./NavLinks";
import UserInfo from "./userInfo";

const Header = () => {

const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full"
})

    return (
        <div className="relative">

<div className="flex flex-col items-center gap-2 pt-4 pb-3">
    <div className="flex items-center gap-2">
    <img className="h-10 w-10"
     height={50}width={40} src="/logo (1).webp" alt=" " />

     <div>
        <div className="flex flex-col items-center sm:items-start">
            <span className="text-2xl font-bold text-red-700">
Bangla News 24
            </span>
            <span className="text-xs text-neutral-500">{date}</span>
        </div>
{/* 
        <h2>Bangla News 24</h2>
<div>{date}</div> */}

</div>
</div>
</div>

<UserInfo/>

{/* <div className="absolute right-4 top-4 flex items-center gap-3 text-sm">
<button className="btn btn-ghost text-neutral-700 transition-colors hover:text-red-700">সাইন ইন</button>
<button className="btn  bg-red-700 px-3 py-1.5 font-semibold text-white transition-colors hover:text-red-700">সাইন আপ

</button>
</div> */}

<NavLinks />

        </div>
    );
};

export default Header;