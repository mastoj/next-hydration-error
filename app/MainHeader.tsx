"use client";
import React from "react";

type MainHeaderProps = {};
const MainHeader = ({}: MainHeaderProps) => {
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
