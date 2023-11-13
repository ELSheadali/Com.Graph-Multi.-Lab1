var canvas;
var gl;
var bufferId;
var theta = 0.0;
var thetaLoc;
window.onload = function init() {
canvas = document.getElementById("gl-canvas");

gl = WebGLUtils.setupWebGL(canvas);
if (!gl) { alert("WebGL isn't available"); }

//
//  Configure WebGL
//
gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(0.3921, 0.5843, 0.9294, 1.0);

//  Load shaders and initialize attribute buffers
var program = initShaders(gl, "vertex-shader", "fragment-shader");
gl.useProgram(program);

var numTris = 100;

var vertices = [
     0.0, 0.0, 0.0,
     1.0, 0.0, 0.0
];

var degPerTri = (2 * Math.PI) / numTris;

for (var i = 0; i < numTris; i++) {
    var index = 2 * 3 + i * 3;
    var angle = degPerTri * (i + 1);

    vertices[index] = Math.cos(angle);
    vertices[index + 1] = Math.sin(angle);
    vertices[index + 2] = 0;
}

bufferId = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);
bufferId.itemSize = 3;
bufferId.numItems = numTris + 2;

var vPosition = gl.getAttribLocation(program, "vPosition");
gl.vertexAttribPointer(vPosition, bufferId.itemSize, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vPosition);

thetaLoc = gl.getUniformLocation(program, "theta");

render();
};


function render() {

gl.clear(gl.COLOR_BUFFER_BIT);

theta += 0.01;
gl.uniform1f(thetaLoc, theta);

gl.drawArrays(gl.TRIANGLE_FAN, 0, bufferId.numItems);

window.requestAnimFrame(render);
}
