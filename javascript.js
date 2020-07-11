var imgObj = null;
            
function css() {
   imgObj = document.getElementById('name');
   imgObj.style.position= 'relative'; 
   imgObj.style.left = '0px'; 
}
function move() {
   imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}

window.onload = css;

