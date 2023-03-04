function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function fillTable(){
    let colors = ['black', 'white', 'red', 'green', 'azure', 'blue', 'purple', 'yellow', 'brown', 'orange', 'violet', 'gray'];
    let table = document.getElementsByTagName("table")[0];
    console.log(table.innerHTML)
    let dynamicTable = "";

    for (let i = 0; i < colors.length; i++) {
        d = document.createElement("div");
        d.style.color = colors[i];
        rgbColor = window.getComputedStyle(document.body.appendChild(d)).color.match(/\d+/g).map(function(a){ return parseInt(a,10); });
        console.log(rgbColor[0]);
        dynamicTable = "<td>"+ colors[i]+ "</td><td><div style='width: 70%; height: 50px; border:1px solid; margin:auto; background: " + colors[i] + ";'></div></td><td>"+ rgbToHex(rgbColor[0], rgbColor[1], rgbColor[2])  + "</td>";
        document.body.removeChild(d);
        console.log(dynamicTable)
        let tr = document.createElement('tr');
        tr.innerHTML = dynamicTable;
        table.appendChild(tr);
    }

}