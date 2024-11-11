import useIsVisible from "@/hooks/useIsVisible";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Typography } from "antd";
import { useEffect, useLayoutEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useIntersectionObserver } from "usehooks-ts";

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

const Table = ({ loading, columns, bodyRef, data, onBottom, onClick, isLast, isFetching }) => {

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  })

  useEffect(()=>{
    if(isFetching) return
    if (isIntersecting) onBottom();
  }, [isFetching, isIntersecting, ref])

  return (
    <div className="overflow-hidden border border-gray100 rounded-[8px] mb-8 mt-4 h-max max-h-[50vh]">
      <div className="overflow-auto table-container-scroll bg-white w-full h-max max-h-[50vh]">
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
          <div className="w-full h-[200px] grid place-items-center"> <Spin indicator={<LoadingOutlined spin />} size="large" /></div>
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
         {!isLast && <div  ref={ref} className="flex w-full border-t border-gray100 justify-center py-2"><Text type="secondary">Loading...</Text></div> }
          </div>
             </>
        )}
      </div>
    </div>
  );
};

export default Table;
