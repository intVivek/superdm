"use client";

import { Tabs } from "antd";
import { useMemo } from "react";
import { Typography } from "antd";
import Header from "../Header/Header";

const { Title } = Typography;

export default function Dashboard() {
  const items = useMemo(() => {
    return [
      {
        label: <div className="font-medium">Open</div>,
        key: "1",
        children: "Content of Open tab",
      },
      {
        label: <div className="font-medium">In Progress</div>,
        key: "2",
        children: "Content of In Progress tab",
      },
      {
        label: <div className="font-medium">Closed</div>,
        key: "3",
        children: "Content of Closed tab",
      },
    ];
  }, []);

  return (
    <div className="w-screen flex justify-center">
      <div className="w-[90%]">
        <div className="mt-12">
          <Title>Tickets</Title>
          <Title level={5}>View and manage your tickets</Title>
        </div>
        <Tabs
          defaultActiveKey="1"
          type="line"
          size={"small"}
          items={items}
          animated={{ inkBar: true, tabPane: true }}
          className="mt-8"
        />
      </div>
    </div>
  );
}
