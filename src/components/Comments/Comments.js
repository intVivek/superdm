import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Avatar, Button, Input, List, Skeleton, Space } from "antd";
import useComments from "@/hooks/useComments";
import { SendOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const Comments = ({ ticket }) => {
  const [page, setPage] = useState(1);
  const [comment, setComment] = useState("");
  const { data, isFetching, isLoading, refetch } = useComments(page, ticket?.id);
  //   const [initLoading, setInitLoading] = useState(true);

  const onLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    refetch(page, ticket?.id);  
  }, [page]);

  const loadMore = data?.cursor?.has_next_message ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button loading={isFetching} onClick={onLoadMore}>
          loading more
        </Button>
      </div>
    ) : null;

  const handleInputChange = (e) => {
    e.stopPropagation();
    setComment(e.target.value);
  };
  return (
    <div>
      <div className="flex items-end gap-4 mt-4">
        <TextArea
          placeholder="Add Comments"
          autoSize={{
            minRows: 2,
            maxRows: 6,
          }}
          value={comment}
          onChange={handleInputChange}
        />
        <Button icon={<SendOutlined />} shape="circle" type="primary"></Button>
      </div>

      <List
        className="h-[250px] overflow-auto my-4"
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={data?.comments || []}
        loading={isLoading}
        renderItem={(item) => (
          <List.Item>
            <Skeleton avatar title={false} loading={false} active>
              <List.Item.Meta
                avatar={
                  <Avatar
                    style={{
                      backgroundColor: "#f56a00",
                      verticalAlign: "middle",
                    }}
                  >
                    <div className="text-[10px]">
                      {item?.name_of_sender.charAt(0)}
                    </div>
                  </Avatar>
                }
                title={item?.name_of_sender}
                description={item?.content}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
};
export default Comments;
