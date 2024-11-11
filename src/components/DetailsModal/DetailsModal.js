import {
  Avatar,
  Button,
  Card,
  Modal,
  Typography,
  Badge as Tag,
  Row,
  Col,
  Select,
} from "antd";
import Badge from "../Badge/Badge";
import { useEffect, useMemo, useRef, useState } from "react";
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

  const [status, setStatus] = useState(data?.status)
  const [ openConfirmModal, setOpenConfirmModal] = useState(-1);
  const confirmButtonRef = useRef();

  const statusOptions = useMemo(() => {
    return [
      { value: 'Open', label: 'Open', disabled: status === 'Open' },
      { value: 'In Progress', label: 'In Progress', disabled: status === 'In Progress' },
      { value: 'Closed', label: 'Closed', disabled: status === 'Closed' },
    ];
  }, [status]);

  const updateTickets = useTicketsMutation()

  const handleChangeStatus = async () => {
    if(openConfirmModal===-1) return;
    await updateTickets.mutateAsync({id: data?.id, data: {status: openConfirmModal}})
      onSuccess()
      setStatus(openConfirmModal);
      setOpenConfirmModal(-1)
    if(updateTickets.isError){
      setStatus(data?.status);
      setOpenConfirmModal(-1)
    }

  }

  useEffect(()=>{
    confirmButtonRef?.current?.focus();
    const handleKeyDown = async (e) => {

      if(e.key==='Escape'){
        onClose()
      }
      const tabKeys = statusOptions.map((_, index) => String(index + 1));
      if (tabKeys.includes(e.key) && statusOptions[e.key-1].value!=status && openConfirmModal===-1) {
        setOpenConfirmModal(statusOptions[e.key-1].value)
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return ()=>window.removeEventListener('keydown', handleKeyDown);
  }, [openConfirmModal])

  return (
    <Modal
      className=""
      title={data?.name}
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
        {getPriorityBadge(data?.priority)}
        <Select
          style={{ width: 120 }}
          value={status}
          onChange={(value)=>{
            setOpenConfirmModal(value)
          }}
          options={statusOptions}
        />
      </div>
      <Tag.Ribbon text={`#${data?.id}`}>
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
                        {data?.assignee?.charAt(0)}
                      </div>
                    </Avatar>
                    {data?.assignee}
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
      {openConfirmModal!=-1 && <Modal
        title="Change Status"
        open={openConfirmModal!=-1}
        onOk={handleChangeStatus}
        onCancel={()=>{
          setOpenConfirmModal(-1)
        }}
        on
        okText="Confirm"
        cancelText="Cancel"
        width={400}
        centered
        okButtonProps={{ disabled: updateTickets.isLoading, loading: updateTickets.isLoading, ref: confirmButtonRef }}
      >
        <p>{`Are you sure you want to change the status to ${openConfirmModal}?`}</p>
        </Modal>}
    </Modal>
  );
}
