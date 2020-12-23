var output = document.getElementById("output");
var hexaOut = document.getElementById("output1");

function colors() {
    console.log("hi");
    var red = document.getElementById("red").value;

    var green = document.getElementById("green").value;

    var blue = document.getElementById("blue").value;
    var result = "rgb(" + red + "," + green + "," + blue + ")";
    var hexa = rgbToHex(red, green, blue);



    document.body.style.backgroundColor = result;
    output.innerHTML = result;

    hexaOut.innerHTML = hexa; // #0033ff
}


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}



output.onclick = function() {
    document.execCommand("copy");
}
hexaOut.onclick = function() {
    document.execCommand("copy");
}

output.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", span.textContent);
        console.log(event.clipboardData.getData("text"))
    }
});

hexaOut.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", span.textContent);
        console.log(event.clipboardData.getData("text"))
    }
});


function copy_password() {
    var copyText = document.getElementById("pwd_spn");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}