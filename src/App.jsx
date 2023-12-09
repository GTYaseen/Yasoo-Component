import { Button } from "./components/button/button";
import Container from "./components/container/container";
import IconButton from "./components/iconButton/IconButton";
import { Input } from "./components/input/Input";
import { Space } from "./components/space/Space";
import Text from "./components/text/Text";
import { useState } from "react";
import "./App.css";
import { Modal } from "./components/modal/Modal";
import { Table } from "./components/table/Table";
import { Tag } from "./components/tag/Tag";

function App() {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  const list = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "3",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
  ];
  return (
    <>
      <Container width={1200}>
        <Button onClick={showModal} size={"medium"}>
          Open
        </Button>
        <Modal open={open} onOk={handleOk} onCancel={handleCancel}>
          <Text>Modal Content</Text>
          <Input placeholder="Input" />
          <Space width={100} height={100} />
          <IconButton icon={"FaceBook"} size={"large"} type={"default"} />
          <Button type={"primary"} size={"large"}>
            Button
          </Button>
        </Modal>
        <div className="flex">
          <Tag color={"red"}>Tag</Tag>
          <Tag color={"#ECF4D6"}><a href="https://www.youtube.com/watch?v=g_En83zHGTQ">link</a></Tag>
          <Tag>Tag</Tag>
        </div>
        <Table columns={columns} list={list} />
      </Container>
    </>
  );
}

export default App;
