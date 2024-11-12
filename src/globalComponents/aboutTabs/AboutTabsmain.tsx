"use client";
import React, { useState } from "react";
import SkillsTab from "./SkillsTab";
import CredentialsTab from "./CredentialsTab";
import AwardsTab from "./AwardsTab";
import ExperienceTab from "./ExperienceTab";


const AboutTabsmain = () => {
    const [activeTab, setActiveTab] = useState(0);
    const DentistryTabs = [
        { id: 1, label: "Skills", content: <SkillsTab /> },
        { id: 2, label: "Awards", content: <AwardsTab /> },
        { id: 3, label: "Experience", content: <ExperienceTab /> },
        { id: 4, label: "Credentials", content: <CredentialsTab /> },

    ];
    return (
        <div className="min-[1281px]:h-[430px] h-auto max-[620px]:h-[120px]">
            <div className="flex items-start ">
                <div className=" w-full justify-start items-start py-2 flex gap-6 max-[410px]:gap-4 max-[410px]:justify-between max-[410px]:flex max-[410px]:w-full max-w-full  ">
                    {DentistryTabs.map((tab, index) => (
                        <button
                            key={tab.id}
                            className={`${activeTab === index
                                ? "  border-b border-[#d3352f] text-[#d3352f] whitespace-nowrap w-auto font-medium text-[15px] max-[410px]:text-[12px] max-[370px]:text-[10px] h-9 px-2 justify-center items-center "
                                : " text-white border-b border-[#E0E2E7] font-medium text-[14px] whitespace-nowrap max-[410px]:text-[12px]  px-2 max-[370px]:text-[10px]  h-9 justify-center items-center"
                                } py-3 flex gap-[2px] justify-center items-center `}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

            </div>
            <div className="mt-2 reviews-tabs-scroll">
                {DentistryTabs[activeTab].content}
                <div className="flex justify-center mt-10">
                    <div className="w-[40px]">
                        <button title={activeTab === 5 ? "Done" : "Next"} className="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTabsmain