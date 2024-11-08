import { twMerge } from "tailwind-merge";

const Cell = ({ className, ...props }) => (
  <div
    className={
      twMerge("flex-1 border-t text-grayInk p-4 text-sm border-gray100 border-l", className && className)
    }
    {...props}
  />
);

const Table = ({ loading, columns, bodyRef, data }) => {
  return (
    <div className="overflow-hidden border border-gray100  rounded-[8px] mt-4 h-max max-h-[60vh]">
      <div className="overflow-auto bg-white overflow-x-hidden w-full h-max max-h-[60vh]">
        <div className="bg-gray120 sticky top-0 z-10 flex">
          {columns.map((item, i) => (
            <Cell key={i} className={twMerge('font-medium', 'border-t-[0px]', i===0 && 'border-l-[0px]')}>{item.title}</Cell>
          ))}
        </div>
        {loading ? (
          <TableSkeletonLoading />
        ) : (
          <div ref={bodyRef} className="bg-white">
            {data?.map((row, index) => {
              return (
                <div tabIndex={0}  key={index} className={"flex arrow-navigation-row"}>
                  {columns.map((item, i)=><Cell key={i} className={twMerge(i===0 && 'border-l-[0px]')}>{row[item.key]}</Cell>)}
                </div>
              );
            })}
          </div>
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
