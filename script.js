function showHide(str){
    document.getElementById(str).classList.add("open");

    if(str === 'item1'){
        document.getElementById('item1').classList.add("open");
        document.getElementById('item2').classList.remove("open");
        document.getElementById('item3').classList.remove("open");
    }

    if(str === 'item2'){
        document.getElementById('item2').classList.add("open");
        document.getElementById('item1').classList.remove("open");
        document.getElementById('item3').classList.remove("open");
    }

    if(str === 'item3'){
        document.getElementById('item3').classList.add("open");
        document.getElementById('item1').classList.remove("open");
        document.getElementById('item2').classList.remove("open");
    }
}
