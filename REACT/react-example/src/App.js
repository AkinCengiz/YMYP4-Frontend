import "./App.css";
import Header from "./components/header/Header";
import { Container } from "reactstrap";
import List from "./components/list/List";
import Main from "./components/main/Main";
import Events from "./components/events/Events";

function App() {
  let categories = ["Bilgisayar", "Cep Telefonu","Televizyon","Beyaz Eşya","Kitap","Giyim","Hobi"];
  let products = [
    {id:1,name:"Toshiba Laptop",price:15000,category:"Bilgisayar",description:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham", features:{color:"black",screen:"17 inch",memory:"1 TB",cpu:"Intel Core I7",graphicCard : "8 Gb"}}
  ];
  return (
    <div className="App">
      <Container>
          <Header data={categories} />
          <Main categoryList={categories} products={products}/>
          <List/>
          <Events />
      </Container>
    </div>
  );
}

export default App;
