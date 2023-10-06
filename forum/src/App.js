import { useState } from "react";
import Rotas from "./Rotas/Rotas";
import { GlobalStyle } from "./StyledGlobal";

function App() {

  const [news, setNews] = useState([])

  return (
    <>
    <GlobalStyle/>
    <Rotas news={news} setNews={setNews}/>
    </>
  );
}

export default App;
