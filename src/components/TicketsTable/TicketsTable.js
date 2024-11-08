import useArrowNavigation from "@/hooks/useArrowNavigation";
import { Table } from "antd";
import { useLayoutEffect, useState } from "react";

const dataSource = [
  {
    key: "1",
    priority: "High",
    id: "T001",
    status: "Open",
    labels: ["Bug", "Urgent"],
    name: "Fix login issue",
    dueDate: "2024-11-15",
    created: "2024-11-08",
    assignee: "Mike Johnson",
  },
  {
    key: "2",
    priority: "Medium",
    id: "T002",
    status: "In Progress",
    labels: ["Enhancement"],
    name: "Improve dashboard UI",
    dueDate: "2024-11-20",
    created: "2024-11-08",
    assignee: "Jane Smith",
  },
  {
    key: "3",
    priority: "Low",
    id: "T003",
    status: "Closed",
    labels: ["Documentation"],
    name: "Update API docs",
    dueDate: "2024-11-10",
    created: "2024-11-07",
    assignee: "Alice Johnson",
  },
  {
    key: "4",
    priority: "High",
    id: "T004",
    status: "Open",
    labels: ["Feature", "Critical"],
    name: "Implement user authentication",
    dueDate: "2024-12-01",
    created: "2024-11-05",
    assignee: "Chris Green",
  },
  {
    key: "5",
    priority: "Medium",
    id: "T005",
    status: "In Progress",
    labels: ["Bug"],
    name: "Resolve payment gateway issue",
    dueDate: "2024-11-18",
    created: "2024-11-08",
    assignee: "Sophia Brown",
  },
  {
    key: "6",
    priority: "Low",
    id: "T006",
    status: "Closed",
    labels: ["Refactor"],
    name: "Refactor API integration",
    dueDate: "2024-11-12",
    created: "2024-11-06",
    assignee: "David Lee",
  },
  {
    key: "7",
    priority: "High",
    id: "T007",
    status: "Open",
    labels: ["Security", "Urgent"],
    name: "Patch vulnerability in login module",
    dueDate: "2024-11-25",
    created: "2024-11-09",
    assignee: "Olivia Martinez",
  },
  {
    key: "8",
    priority: "Medium",
    id: "T008",
    status: "In Progress",
    labels: ["UI", "Enhancement"],
    name: "Add dark mode feature",
    dueDate: "2024-11-22",
    created: "2024-11-08",
    assignee: "Liam Wilson",
  },
  {
    key: "9",
    priority: "Low",
    id: "T009",
    status: "Closed",
    labels: ["Optimization"],
    name: "Optimize image loading on homepage",
    dueDate: "2024-11-13",
    created: "2024-11-07",
    assignee: "Emma Thompson",
  },
  {
    key: "10",
    priority: "Medium",
    id: "T010",
    status: "Open",
    labels: ["Database", "Bug"],
    name: "Resolve data inconsistency issue",
    dueDate: "2024-11-28",
    created: "2024-11-08",
    assignee: "Noah White",
  },
];

const columns = [
  {
    title: "Priority",
    dataIndex: "priority",
    key: "priority",
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Labels",
    dataIndex: "labels",
    key: "labels",
    render: (labels) => labels.join(", "),
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Due Date",
    dataIndex: "dueDate",
    key: "dueDate",
  },
  {
    title: "Created",
    dataIndex: "created",
    key: "created",
  },
  {
    title: "Assignee",
    dataIndex: "assignee",
    key: "assignee",
  },
];
export default function TicketsTable() {
    
  useArrowNavigation(".enable-arrow-navigation");

  return (
    <Table
      bordered
      dataSource={dataSource}
      columns={columns}
      rowClassName={"enable-arrow-navigation"}
      pagination={false}
      onRow={() => ({
        tabIndex: 0,
      })}
    />
  );
}
