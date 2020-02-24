import MainController from "./controllers/MainController.js";
import './style.css';
import './main.css';

document.addEventListener("DOMContentLoaded", () => {
  new MainController();

  //definePlugin()
  console.log(process.env.NODE_ENV);
  console.log(VERSION);
  console.log(MAX_COUNT);
  console.log(api.domain);
});


//babel 기본동작 예제
const alert = msg => window.alert(msg);

/**
 * npm install @babel/core @babel/cli -D
 */