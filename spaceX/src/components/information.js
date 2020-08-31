export const information = (info)=>{
    const divInfo = document.createElement("div");
    divInfo.className = "info";
    divInfo.innerHTML = 
    `<div id='naziv'>Naziv${info.name}</div>
    <div id='vlasnik'>${info.founder}</div>
    <div id='godinaOsinivanja'>${info.founded}</div>`;
    return divInfo;
}