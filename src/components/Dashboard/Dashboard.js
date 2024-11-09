"use client";

import { Tabs } from "antd";
import { useEffect, useMemo, useState } from "react";
import { Typography } from "antd";
import TicketsTable from "../TicketsTable/TicketsTable";

const { Title } = Typography;

const tabsType = ["Open", "In Progress", "Closed"];

const items = tabsType.map((tab, index) => ({
  label: <div className="font-medium">{tab}</div>,
  key: String(index + 1),
}));

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("1");

  const handleTabChange = (key) => {
    console.log(key);
    setSelectedTab(key);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const tabKeys = tabsType.map((_, index) => String(index + 1));
      if (tabKeys.includes(e.key)) {
        setSelectedTab(e.key);
      } else if (e.key === "ArrowLeft") {
        setSelectedTab((prevTab) => {
          const newTabIndex = parseInt(prevTab) - 1;
          return newTabIndex >= 1 ? String(newTabIndex) : prevTab;
        });
      } else if (e.key === "ArrowRight") {
        setSelectedTab((prevTab) => {
          const newTabIndex = parseInt(prevTab) + 1;
          return newTabIndex <= tabsType.length ? String(newTabIndex) : prevTab;
        });
      }
    };
    const keydownHandler = (e) => handleKeyDown(e);

    window.addEventListener("keydown", keydownHandler);
    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, [selectedTab]);

  return (
    <div className="w-screen flex justify-center">
      <div className="w-[90%]">
        <div className="mt-12">
          <Title>Tickets</Title>
          <Title level={5}>View and manage your tickets</Title>
        </div>
        <Tabs
          defaultActiveKey={"1"}
          type="line"
          size={"small"}
          items={items}
          activeKey={selectedTab}
          animated={{ inkBar: true, tabPane: true }}
          className="mt-8"
          onChange={handleTabChange}
        />
        <TicketsTable selectedTab={tabsType[selectedTab-1]} />
      </div>
    </div>
  );
}
