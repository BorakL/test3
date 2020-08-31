import {ship} from './ship.js';

export const shipList = (shipList)=>{
    const shipContainer = document.createElement("div");
    shipContainer.className = "shipList";
    shipList.forEach(s=>{
        shipContainer.append(ship(s));
    })
    return shipContainer;
}