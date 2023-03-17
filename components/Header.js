import Image from "next/image";
import {
    Bars3Icon, HeartIcon, MagnifyingGlassIcon, PaperAirplaneIcon, PlusCircleIcon, UserGroupIcon
} from '@heroicons/react/24/outline';
import {HomeIcon} from "@heroicons/react/24/solid";

function Header() {
    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
                {/* left */}
                <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>

                <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png?20210403190622"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>

                {/* Middle - Search Input Field */}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500"/>
                        </div>
                        <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md
                    focus:ring-black focus:border-black "
                               type="text" placeholder="Search"/>
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="navBtn"/>
                    <Bars3Icon className="h-6 md:hidden cursor-pointer"/>
                    <div className="relative navBtn">
                        <PaperAirplaneIcon className="navBtn rotate"/>
                        <div
                            className="absolute bottom-2
                             left-4 text-xs w-4 h-4 bg-red-500 rounded-full flex item-center justify-center animate-pulse text-white">
                            3
                        </div>
                    </div>
                    <PlusCircleIcon className="navBtn"/>
                    <UserGroupIcon className="navBtn"/>
                    <HeartIcon className="navBtn"/>

                    <img
                        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80"
                        alt="profile"
                        className="h-10 w-10 rounded-full cursor-pointer"
                    />
                </div>

            </div>
        </div>)
}
export default Header