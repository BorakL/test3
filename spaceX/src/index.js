console.log('Hello project');
import {getInfo, getShips, getShipsByActive} from './service.js';
import {information} from './components/information.js';
import {shipList} from './components/shipList.js'; 

const select = document.querySelector("select")
const ships = document.querySelector("main>#app>#ships");


//Informacije za header
getInfo().then(res=>{
    const about = document.querySelector("header>#about");
    about.append(information(res.data))
})


//Ships
getShips().then(res=>{
    console.log(res.data);
    ships.append(shipList(res.data));

    /*
    imgs = document.getElementsByTagName("img");
    imgs.forEach(i=>{
        i.addEventListener("click",(i)=>{
        })
    })
    */

})

select.addEventListener("change",()=>{
    ships.innerHTML="";
    getShipsByActive(select.value).then(res=>{
        ships.append(shipList(res.data));
    })
})