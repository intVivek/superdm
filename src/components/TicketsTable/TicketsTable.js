import { Table } from "antd";

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
  return <Table bordered dataSource={dataSource} columns={columns} />;
}
