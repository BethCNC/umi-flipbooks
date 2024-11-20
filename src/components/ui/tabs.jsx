import React, { useState } from 'react';
import { cn } from "@/lib/utils";

// Individual Tab Component
const Tab = ({ label, isSelected, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-[3px] flex flex-row items-start justify-start py-1.5 px-3 transition-all",
        isSelected ? [
          "bg-surface-selected border-b-2 border-solid border-[#1d2e40]",
          "text-base text-[#1d2e40] font-medium",
          "font-neulisCursive"
        ] : [
          "text-sm text-text-disabled-dark",
          "font-neulisSans"
        ],
        className
      )}
    >
      <span className="relative leading-[20px]">
        {label}
      </span>
    </button>
  );
};

// Tab Bar Component
const TabBar = ({ tabs, selectedTab, onChange, className }) => {
  return (
    <div className={cn(
      "relative rounded-md bg-surface-action-light w-full flex flex-row items-center justify-start p-1",
      className
    )}>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          isSelected={selectedTab === index}
          onClick={() => onChange(index)}
        />
      ))}
    </div>
  );
};

// Single Tab Set Component
const TabSet = ({ tabs, selectedTab, onChange, className }) => {
  return (
    <div className={cn(
      "w-full relative rounded-[5px] border-[#9747ff] border border-dashed h-[72px] overflow-hidden",
      className
    )}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={cn(
            "absolute top-[20px]",
            index === 0 ? "left-[20px]" : `left-[${119 + (index - 1) * 100}px]`
          )}
        >
          <Tab
            label={tab.label}
            isSelected={selectedTab === index}
            onClick={() => onChange(index)}
          />
        </div>
      ))}
    </div>
  );
};

// Main Tabs Container Component
export const Tabs = ({ variant = "bar", tabs, defaultTab = 0 }) => {
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return variant === "bar" ? (
    <TabBar
      tabs={tabs}
      selectedTab={selectedTab}
      onChange={handleTabChange}
    />
  ) : (
    <TabSet
      tabs={tabs}
      selectedTab={selectedTab}
      onChange={handleTabChange}
    />
  );
};

export default Tabs;