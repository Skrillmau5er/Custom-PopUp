const timeOut = 1000;

window.onload = function(){
    let popUp = document.getElementById('pop-up');
    setTimeout(function(){
        popUp.style.display = 'block';
    }, timeOut);
}

window.onclick = function(event) {
    let popUp = document.getElementById('pop-up');
    let cancel = document.getElementById('cancel');
    if (event.target == popUp || event.target == cancel) {
      popUp.style.display = "none";
    }
}