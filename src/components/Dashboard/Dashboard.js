"use client"

import { Tabs } from 'antd';
import { useMemo } from 'react';



export default function Dashboard() {

    const items = useMemo(()=>{
        return [
            {
              label: <div className="font-medium">Open</div>,
              key: "1",
              children: "Content of Open tab",
            },
            {
              label: <div className="font-medium">In Progress</div>,
              key: "2",
              children: "Content of In Progress tab",
            },
            {
              label: <div className="font-medium">Closed</div>,
              key: "3",
              children: "Content of Closed tab",
            },
          ];
    }, [])


  return (
    <div className='w-screen h-screen flex justify-center'>
    <div className='w-[90%]'>
      <Tabs
        defaultActiveKey="1"
        type="line"
        size={'small'}
        items={items}
        animated={{ inkBar: true, tabPane: true }}
      />
    </div>
    </div>
  );
}
