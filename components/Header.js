import HeaderIcon from "./HeaderIcon";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/24/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { BsSearch, BsFillChatDotsFill } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";
// import { signOut, useSession } from "next-auth/react";

import Image from "next/image";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg--white flex items-center p-2 lg:px-5 shadow-md">
      {/* image/input */}

      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />

        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <BsSearch className="h-6 text-gray-600 " />
          <input
            className=" hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="serch facebook"
          ></input>
        </div>
      </div>
      {/* iconsCenter */}
      <div className="flex  justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
    </div>
  );
}

export default Header;
