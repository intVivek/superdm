import useArrowNavigation from "@/hooks/useArrowNavigation";

import { useCallback, useEffect, useMemo, useState } from "react";
import Table from "../Table/Table";
import moment from "moment";
import DetailsModal from "../DetailsModal/DetailsModal";
import { useDebounceCallback } from "usehooks-ts";
import useTickets from "@/hooks/useTickets";

const columns = [
  {
    title: "Priority",
    key: "priority",
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
    render: (item) => item.reduce((a, c) => a + ", " + c),
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

export default function TicketsTable({selectedTab}) {
  const [isLast, setIsLast] = useState(false);
  const [page, setPage] = useState(1);

  const [selectedRow, setSelectedRow] = useState(-1);

  
  const { data, isFetching, refetch } = useTickets(page, selectedTab);

  const { ref, resetNavigation } = useArrowNavigation({deps: [selectedTab, page, data]});

  useEffect(()=>{
    refetch(page, selectedTab)
  }, [page, selectedTab])

  const onBottomHandler = () => {
    setPage((p) => p + 1);
  };

  const debouncedOnBottomHandler = useDebounceCallback(onBottomHandler, 200)

  const onClickHandler = (row, i) => {
    setSelectedRow(row);
  };

  useEffect(()=>{
    setPage(1)
    resetNavigation()
  }, [selectedTab])

  useEffect(()=>{
    setIsLast(data?.meta?.isLast)
  }, [data?.meta?.isLast])

  return (
    <>
      <Table
        bodyRef={ref}
        columns={columns}
        onBottom={debouncedOnBottomHandler}
        data={data?.data}
        onClick={onClickHandler}
        isLast={isLast}
      />
      {selectedRow !== -1 && (
        <DetailsModal
          data={selectedRow}
          isOpen={selectedRow !== -1}
          onClose={() => setSelectedRow(-1)}
          onSuccess={async()=>await refetch(page, selectedTab)}
        />
      )}
    </>
  );
}
