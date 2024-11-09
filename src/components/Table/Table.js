import useIsVisible from "@/hooks/useIsVisible";
import { Typography } from "antd";
import { useLayoutEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

const { Text } = Typography;

const Cell = ({ className, ...props }) => (
  <div
    className={twMerge(
      "flex-1 min-w-[120px] border-t text-grayInk p-4 text-sm border-gray100 border-l",
      className && className
    )}
    {...props}
  />
);

const Table = ({ loading, columns, bodyRef, data, onBottom, onClick, isLast }) => {
  const bottomRef = useRef();

  const isVisible = useIsVisible(bottomRef);

  useLayoutEffect(() => {
    if (isVisible) onBottom();
  }, [isVisible, bottomRef]);

  return (
    <div className="overflow-hidden border border-gray100 rounded-[8px] mb-8 mt-4 h-max max-h-[50vh]">
      <div className="overflow-auto bg-white w-full h-max max-h-[50vh]">
        <div className="bg-gray120 sticky top-0 z-10 flex">
          {columns.map((item, i) => (
            <Cell
              key={i}
              className={twMerge(
                "font-medium",
                "border-t-[0px]",
                i === 0 && "border-l-[0px]",
                item.className && item.className
              )}
            >
              {item.title}
            </Cell>
          ))}
        </div>
        {loading ? (
          <TableSkeletonLoading />
        ) : (<>
          <div ref={bodyRef} className="bg-white relative">
            {data?.map((row, index) => {
              return (
                <div
                  tabIndex={0}
                  key={index}
                  className={"flex arrow-navigation-row"}
                  onClick={(e) => onClick(row, index, e)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onClick(row, index, e);
                    }
                  }}
                >
                  {columns.map(({ render, key }, i) => (
                    <Cell
                      key={i}
                      className={twMerge(i === 0 && "border-l-[0px]")}
                    >
                      {render ? render(row[key]) : row[key]}
                    </Cell>
                  ))}
                </div>
              );
            })}
        
          </div>
              {!isLast && <div  ref={bottomRef} className="flex w-full border-t border-gray100 justify-center py-2"><Text type="secondary">Loading...</Text></div> }</>
        )}
      </div>
    </div>
  );
};

export default Table;

const TableSkeletonLoading = ({ rows = 5 }) => {
  return (
    <div className="w-full h-max bg-white overflow-hidden">
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className="flex mx-1 w-full justify-around mt-4 animate-pulse"
        >
          <div className="w-[90px] flex-shrink-0 h-[26px] bg-graySkeleton rounded"></div>
          <div className="w-[90px] flex-shrink-0 h-[26px] bg-graySkeleton rounded"></div>
          <div className="w-[90px] flex-shrink-0 h-[26px] bg-graySkeleton rounded"></div>
        </div>
      ))}
    </div>
  );
};
