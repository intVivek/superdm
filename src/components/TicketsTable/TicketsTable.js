import useArrowNavigation from "@/hooks/useArrowNavigation";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Table from "../Table/Table";
import moment from "moment";
import DetailsModal, { getPriorityBadge } from "../DetailsModal/DetailsModal";
import { useDebounceCallback } from "usehooks-ts";
import useTickets from "@/hooks/useTickets";
import Badge from "../Badge/Badge";
import { Select, Typography } from "antd";

const { Title } = Typography;

const columns = [
  {
    title: "Priority",
    key: "priority",
    render: (item) => getPriorityBadge(item),
  },
  {
    title: "ID",
    key: "id",
  },
  {
    title: "Status",
    key: "status",
  },
  {
    title: "Labels",
    key: "labels",
    render: (items) => (
      <div className="flex gap-1">
        {items.map((item, i) => (
          <Badge key={i} label={item} />
        ))}
      </div>
    ),
  },
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Due Date",
    key: "dueDate",
    render: (item) => moment(item).format("DD-MMM-YY"),
  },
  {
    title: "Created",
    key: "created",
    render: (item) => moment(item).format("DD-MMM-YY"),
  },
  {
    title: "Assignee",
    key: "assignee",
  },
];

const prirorityOptions = [
  { value: "All", label: "All" },
  { value: "High", label: "High" },
  { value: "Medium", label: "Medium" },
  { value: "Low", label: "Low" },
];

export default function TicketsTable({
  selectedTab,
  selectedRow,
  setSelectedRow,
}) {

  const selectRef = useRef()
  const [selectedPrirority, setSelectedPrirority] = useState(prirorityOptions[0].value)
  const [isLast, setIsLast] = useState(false);
  const [page, setPage] = useState(1);

  const { data, isFetching, refetch } = useTickets({
    page,
    selectedTab,
    priority: selectedPrirority,
  });

  const { ref, resetNavigation } = useArrowNavigation({
    disabled: selectedRow !== -1,
    deps: [selectedTab, page, data],
  });

  const onBottomHandler = () => {
    setPage((p) => p + 1);
  };

  const debouncedOnBottomHandler = useDebounceCallback(onBottomHandler, 200);

  const onClickHandler = (row, i) => {
    setSelectedRow(row);
  };

  useEffect(() => {
    resetNavigation();
    setPage(1);
    setSelectedPrirority(prirorityOptions[0].value)
  }, [selectedTab]);

  useEffect(() => {
    setIsLast(data?.meta?.isLast);
  }, [data?.meta?.isLast]);

  const handlePrirorityFilter = async (value) => {
    setSelectedPrirority(value)
    selectRef?.current?.blur()
  };

  return (
    <>
      <div className="flex items-center gap-4 flex-wrap w-full">
        <Title className="" level={5}>
          Filter By
        </Title>
        <Select
        ref={selectRef}
          style={{ width: 160 }}
          placeholder={"Select Prirority"}
          onChange={handlePrirorityFilter}
          options={prirorityOptions}
        />
        <Title className="ml-auto" level={4}>
          Total {data?.meta?.total}
        </Title>
      </div>
      <Table
        bodyRef={ref}
        columns={columns}
        onBottom={debouncedOnBottomHandler}
        data={data?.data}
        onClick={onClickHandler}
        isLast={isLast}
        isFetching={isFetching}
        loading={isFetching && page === 1}
      />
      {selectedRow !== -1 && (
        <DetailsModal
          data={selectedRow}
          isOpen={selectedRow !== -1}
          onClose={() => setSelectedRow(-1)}
          onSuccess={async () =>
            await refetch({ page, selectedTab, priority: value })
          }
        />
      )}
    </>
  );
}
