export const ship = (ship)=>{
    const shipDiv = document.createElement("div");
    shipDiv.className = "ship";
    shipDiv.innerHTML=
    `<div class="name">Name: ${ship.ship_name}</div>
    <div class='type'>Type: ${ship.ship_type}</div>
    <div class='active'>Active: ${ship.active}</div>
    <div class='img'><a href="${ship.url}" ><img src="${ship.image}"></a></div>`;
    return shipDiv;
}

