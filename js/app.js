function h1Hover(details) {
    hover[`outerHTML`] = hover[`outerHTML`] + `<h3 id="noHover">Secret Hover!</h3>`;
}

let hover = document.getElementById(`hoverEvent`);
hover.addEventListener(`mouseover`, h1Hover);

function offHover(details){
//    details[`target`][`outerHTML`] = `<h3>``</h3>`
   
     noHover[`outerHTML`] = `<h3>``</h3>`;
}

let noHover = getElementById(`noHover`);
noHover.addEventListener(`mouseleave`, offHover);


