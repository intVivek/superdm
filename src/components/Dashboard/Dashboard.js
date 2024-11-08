"use client";

import { Tabs } from "antd";
import { useMemo } from "react";
import { Typography } from "antd";
import TicketsTable from "../TicketsTable/TicketsTable";

const { Title } = Typography;

const tabsType = ['Open', 'In Progress', 'Closed'];

const items = tabsType.map((tab, index) => ({
    label: <div className="font-medium">{tab}</div>,
    key: String(index + 1),
  }));
;

export default function Dashboard() {

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
        <TicketsTable />
      </div>
    </div>
  );
}
