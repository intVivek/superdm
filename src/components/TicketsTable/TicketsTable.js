import useArrowNavigation from "@/hooks/useArrowNavigation";

import { useCallback, useEffect, useMemo, useState } from "react";
import Table from "../Table/Table";
import moment from "moment";
import DetailsModal from "../DetailsModal/DetailsModal";
import { useDebounceCallback } from "usehooks-ts";

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
  const [data, setData] = useState([]);
  const [isLast, setIsLast] = useState(false);
  const [page, setPage] = useState(1);

  const [selectedRow, setSelectedRow] = useState(-1);

  const { ref, resetNavigation } = useArrowNavigation({deps: [selectedTab, page]});

  const fetchTickets = useCallback(async () => {
    try {
      const response = await fetch(`/api/ticket?pageSize=${page * 5}&status=${selectedTab}`);
      const data = await response.json();
      console.log(data);
      setData(data.data);
      setIsLast(data?.meta?.isLast);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  }, [page, selectedTab]); 

  const onBottomHandler = () => {
    setPage((p) => p + 1);
  };

  const debouncedFetchTickets = useDebounceCallback(fetchTickets, 200)
  const debouncedOnBottomHandler = useDebounceCallback(onBottomHandler, 200)

  const onClickHandler = (row, i) => {
    setSelectedRow(row.id);
  };

  useEffect(()=>{
    setData([])
    setPage(1)
    setIsLast(false)
    resetNavigation()
  }, [selectedTab])

  useEffect(() => {
    if(isLast) return;
    debouncedFetchTickets();
  }, [page, selectedTab, isLast]);

  return (
    <>
      <Table
        bodyRef={ref}
        columns={columns}
        onBottom={debouncedOnBottomHandler}
        data={data}
        onClick={onClickHandler}
        isLast={isLast}
      />
      {selectedRow !== -1 && (
        <DetailsModal
          data={data?.find((item) => item.id === selectedRow)}
          isOpen={selectedRow !== -1}
          onClose={() => setSelectedRow(-1)}
        />
      )}
    </>
  );
}
