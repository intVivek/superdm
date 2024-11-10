import {
  Avatar,
  Button,
  Card,
  Modal,
  Statistic,
  Typography,
  Badge as Tag,
  Row,
  Col,
  Select,
} from "antd";
import Badge from "../Badge/Badge";
import { useEffect, useState } from "react";
import useTicketsMutation from "@/hooks/useTicketsMutation";
import Comments from "../Comments/Comments";

const { Text } = Typography;

export const getPriorityBadge = (priority) => {
  switch (priority) {
    case "High":
      return <Tag count="High Priority" />;
    case "Medium":
      return <Tag color="#faad14" count="Medium Priority" />;
    case "Low":
      return <Tag color="#52c41a" count="Low Priority" />;
    default:
      return <Tag count="Unknown Priority" />;
  }
};

const statusOptions = [
  { value: "Open", label: "Open" },
  { value: "In Progress", label: "In Progress" },
  { value: "Closed", label: "Closed" },
]

const Details = ({ title, value }) => {
  return (
    <div className="flex flex-col">
      <Text type="secondary">{title}</Text>
      <Text className={"mt-2"} type="strong">
        {value}
      </Text>
    </div>
  );
};

export default function DetailsModal({ data, isOpen, onClose, onSuccess }) {

  const [openConfirmModal, setOpenConfirmModal] = useState(-1);

  const updateTickets = useTicketsMutation()

  const handleChangeStatus = async () => {
    await updateTickets.mutateAsync({id: data.id, data: {status: openConfirmModal}})
    await onSuccess()
    setOpenConfirmModal(-1)
  }

  return (
    <Modal
      className="tickets-details-modal"
      title={data.name}
      open={isOpen}
      onCancel={onClose}
      onOk={onClose}
      centered
      footer={[
        <Button key="back" type="primary" onClick={onClose}>
          Close
        </Button>,
      ]}
      width={780}
    >
      <div className="flex justify-between items-center mb-4">
        {getPriorityBadge(data.priority)}
        <Select
          defaultValue={data.status}
          style={{ width: 120 }}
          onChange={(value)=>setOpenConfirmModal(value)}
          options={statusOptions}
        />
      </div>
      <Tag.Ribbon text={`#${data.id}`}>
        <Card>
          <Row gutter={[32, 32]}>
            <Col span={12}>
              <Details
                title={"Assignee"}
                value={
                  <div className="flex items-center gap-2">
                    <Avatar
                      style={{
                        backgroundColor: "#f56a00",
                        verticalAlign: "middle",
                      }}
                      size={18}
                    >
                      <div className="text-[10px]">
                        {data.assignee.charAt(0)}
                      </div>
                    </Avatar>
                    {data.assignee}
                  </div>
                }
              />
            </Col>
            <Col span={12}>
              <Details title="Created At" value={data?.created} />
            </Col>

            <Col span={12}>
              <Details
                title={"Tags"}
                value={
                  <div>
                    {data?.labels.map((tag, i) => {
                      return <Badge key={i} label={tag} />;
                    })}
                  </div>
                }
              />
            </Col>
            <Col span={12}>
              <Details title="Due Date" value={data?.dueDate} />
            </Col>
          </Row>
        </Card>
      </Tag.Ribbon>
      <Comments ticket={data}/>
      {openConfirmModal!==-1 && <Modal
        title="Change Status"
        open={openConfirmModal!==-1}
        onOk={handleChangeStatus}
        onCancel={()=>setOpenConfirmModal(-1)}
        okText="Confirm"
        cancelText="Cancel"
        width={400}
        centered
        okButtonProps={{ disabled: updateTickets.isLoading, loading: updateTickets.isLoading }}
      >
        <p>Are you sure you want to change the status ?</p>
        </Modal>}
    </Modal>
  );
}
