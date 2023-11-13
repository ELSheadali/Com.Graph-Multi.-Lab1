function initBuffers(gl) {
    const positionBuffer = initPositionBuffer(gl);
  
    const colorBuffer = initColorBuffer(gl);
  
    return {
      position: positionBuffer,
      color: colorBuffer,
    };
  }
  
  function initPositionBuffer(gl) {
    const positionBuffer = gl.createBuffer();
  
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  
    //create an array of positions for the square.
    const positions = [
      // Triangle 1
        -2,  2,  
         2,  2,
        -2, -2,
      // Triangle 2  
        -2, -2,  
         2,  2,
         2, -2,
      ];
  
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  
    return positionBuffer;
  }
  
  function initColorBuffer(gl) {
    const colors = [
        // Triangle 1
        1.0, 0.0, 0.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        // Triangle 2   
        1.0, 0.0, 0.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
      ];
      
  
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  
    return colorBuffer;
  }
  
  export { initBuffers };