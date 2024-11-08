import { Button, Modal } from "antd";

export default function DetailsModal({data, isOpen, onClose}) {
    console.log(data)
  return (
    <Modal
      title="Details"
      open={isOpen}
      onCancel={onClose}
      onOk={onClose}
      centered
      footer={[
        <Button key="back" type="primary" onClick={onClose}>
          Close
        </Button>]}
           width={1000}
    >
    {JSON.stringify(data)}
    </Modal>
  );
}
