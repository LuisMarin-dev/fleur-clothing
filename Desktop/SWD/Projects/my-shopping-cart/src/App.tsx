import {useState} from "react";
import {useQuery} from "react-query";
// Components
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/core/AddShoppingCartIcon";
import Badge from "@material-ui/core/Badge";
// Styles
import Wrapper from "./App.styles";


const getData = async () => {
  await(await fetch("https://fakestoreapi.com/products")).json() //The second "await" is for the api call itself and the first one is for when we convert it to JSON
}


const App = () => {
  return (
    <div className="App">
      Start
    </div>
  );
};

export default App;
