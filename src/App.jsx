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
import { Header } from "./components/header/Header";

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
    {
      title: "Tag",
      dataIndex: "tag",
      key: "tag",
    },
  ];
  const list = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      tag: <Tag color={"#176B87"}>math</Tag>,
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      tag: <Tag color={"#64CCC5"}>prog...</Tag>,
    },
    {
      key: "3",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      tag: <Tag color={"#EEEEEE"}><a href="https://www.youtube.com/watch?v=g_En83zHGTQ">link</a></Tag>,
    },
  ];
  const headerLinks = [
    {
      title: "Home",
      href: "https://www.youtube.com/watch?v=zR6fECxF44I",
    },
    {
      title: "About",
      href: "https://www.youtube.com/watch?v=qfFmZa9jgoY",
    },
    {
      title: "Contact",
      href: "https://www.youtube.com/watch?v=I-P2d5SxlgQ",
    },
  ];
  return (
    <>
      <Header headerLinks={headerLinks} brand={"Yasoo"} width={1300} />
      <Container width={1300}>
      <Space height={"20px"} />
        <Button onClick={showModal} size={"large"}>Open Modal</Button>
        <Modal open={open} onOk={handleOk} onCancel={handleCancel}>
          <Text bold={"true"} size={20}>
            Modal Content
          </Text>
          <Space width={100} height={"10px"} />
          <Text size={20}>your name</Text>
          <Input
            placeholder="Input"
            onChange={(e) => console.log(e.target.value)}
          />
          <Space height={"20px"} />
          <div className="flex">
          <Button type={"primary"} size={"large"}>
            <IconButton icon={"FaceBook"} size={"large"} type={"default"} />
            Click Here
          </Button>
          <Button type={"secondary"} size={"medium"}>
            <IconButton icon={"instagram"} size={"large"} type={"primary"} />
            Click
          </Button>
          <Button type={"default"} size={"small"}>
            <IconButton icon={"folder"} size={"large"} type={"secondary"} />
            Click
          </Button>
          </div>
        </Modal>
        <Table columns={columns} list={list} />
      </Container>
    </>
  );
}

export default App;
