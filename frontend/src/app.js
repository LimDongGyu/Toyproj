import MainController from "./controllers/MainController.js";
import './style.css';


document.addEventListener("DOMContentLoaded", () => {
  new MainController();

  //definePlugin()
  console.log(process.env.NODE_ENV);
  console.log(VERSION);
  console.log(MAX_COUNT);
  console.log(api.domain);
});
