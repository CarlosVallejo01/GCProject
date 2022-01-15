const canvas = document.getElementById("canvas");
const gl = canvas.getContext('webgl');


if(!gl){
    throw new Error('webgl not supported');
}

alert('All works well with WebGl');