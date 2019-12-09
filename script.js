//Draws rectangle
function drawRect() {
//Not sure what next line does
let svgns = "http://www.w3.org/2000/svg";
//counter for rect class names
let counter = 1;
//y axis
let y = 0;
//loops to create 100 rectangles
for (let x = 0; x < 802; x += 9) {
        let rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'x', x);
        rect.setAttributeNS(null, 'y', y);
        rect.setAttributeNS(null, 'height', '34');
        rect.setAttributeNS(null, 'width', '6');
        rect.setAttributeNS(null, 'fill', '#2fcc66');
        rect.setAttribute('class', ['tooltip', "_" + counter].join(" "));
        rect.setAttribute('title', 'Hello!');
        
        //adds rectangle to graph
        document.getElementById('vector').appendChild(rect);
        counter++;
    }

}