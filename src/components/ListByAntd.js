import React from "react";
import { List, Avatar, Icon } from "antd";

const ListByAntd = ({ boards }) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3
      }}
      dataSource={boards}
      footer={
        <div>
          <b>millionware</b> cloud team
        </div>
      }
      renderItem={item => (
        <List.Item
          key={item.boardTitle}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta
            title={<a href="#">{item.boardTitle}</a>}
            description={item.writeDate}
          />
          {item.boardContent}
        </List.Item>
      )}
    />
  );
};

export default ListByAntd;
