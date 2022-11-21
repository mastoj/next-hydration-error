"use client";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchField = () => {
    return (
        <div className="flex px-4 h-16 w-full justify-center items-center">
            <input
                type="text"
                className="transition-border duration-500 rounded-3xl bg-secondary-neutral pl-4 pr-14 py-2 outline-0 focus:border focus:border-accent-neutral focus:rounded-sm focus:bg-white focus:shadow-primary-extra-light focus:shadow-md text-sm text-ellipsis w-full"
                placeholder="Søk etter produkter, merker og mer"
            />
            <div className="h-6 w-6 flex items-center justify-center -ml-8">
                <IoSearchOutline className="h-5 w-5 hover:h-6 hover:w-6 text-accent-neutral justify-self-center" />
            </div>
        </div>
    );
};

type MainHeaderProps = {};
const MainHeader = ({}: MainHeaderProps) => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <div className="z-30 h-32 md:h-16 overflow-y-visible bg-white">
                <div className="w-full relative grid auto-cols-[fit-content(20%)_auto_fit-content(20%)_fit-content(20%)] md:auto-cols-[fit-content(10%)_fit-content(20%)_auto_fit-content(20%)_fit-content(20%)] h-32 md:h-16 border-b items-center">
                    <div className="border-b h-16 xl:col-start-2 flex justify-start xl:w-auto"></div>
                    <div className="border-b h-16 flex justify-start items-center pl-2 xl:col-start-1 xl:row-start-1"></div>
                    <div className="flex flex-row justify-end items-center border-b h-16 gap-2 xl:col-start-4"></div>
                    <div className="border-b h-16 flex justify-end items-center md:row-start-1 md:col-start-5"></div>
                    <div className="col-span-4 md:col-start-3 md:row-start-1 md:col-span-1 h-16 border-b flex items-center"></div>
                </div>
            </div>
        </>
    );
};

export default MainHeader;
