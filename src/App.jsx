import Button from "./components/button/button"
import Container from "./components/container/container"
import IconButton from "./components/iconButton/IconButton"
import { Input } from "./components/input/Input"
import { Space } from "./components/space/Space"
import Text from "./components/text/Text"
import './App.css'

function App() {


  return (
    <>
      <Container width={100}>
        <Button type={'default'} size={"small"}>press me</Button>
        <Button type={'primary'}size={"medium"}>Button<IconButton icon={"Trash"}/></Button>
        <Button type={'secondary'}size={"large"}><IconButton icon={"search"} size={"large"}/>Button</Button>
        <Space height={"10px"}/>
        <IconButton icon={"FaceBook"} size={"small"}/>
        <Text bold="true" size={40} color="green">Yaseen</Text>
        <Input placeholder="hello"/>
        <div className="flex">
         <Button type={'default'} size={"small"}>press me</Button>
         <Button type={'primary'}size={"medium"}>Button<IconButton icon={"Trash"}/></Button>
         <Button type={'secondary'}size={"large"}><IconButton icon={"search"} size={"large"}/>Button</Button>
        </div>
      </Container>
    </>
  )
}

export default App
