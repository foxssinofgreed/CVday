var english = /^[A-Za-z0-9]*$/;

$(function () {
    $('#titleh').removeClass('titleh2')
});

document.getElementById("1").onclick = function () {change1()}
function change1() {
    document.getElementById("hdr").innerHTML = document.getElementById("one").innerHTML;
}
document.getElementById("2").onclick = function () {change2()}
function change2() {
    document.getElementById("hdr").innerHTML = document.getElementById("one1").innerHTML;
}
document.getElementById("3").onclick = function () {change3()}
function change3() {
    document.getElementById("hdr").innerHTML = document.getElementById("one2").innerHTML;
}
document.getElementById("4").onclick = function () {change4()}
function change4() {
    document.getElementById("hdr").innerHTML = document.getElementById("one3").innerHTML;
}

function langChange() {
    let temp = document.getElementById("hdr").innerHTML;
    if(english.test(temp)){
        document.getElementById("one").innerHTML = "მთავარი";
        document.getElementById("one1").innerHTML = "ჰობი";
        document.getElementById("one2").innerHTML = "გამოცდილება";
        document.getElementById("one3").innerHTML = "განათლება";
        document.getElementById("banani").innerHTML = "ლუკა აფციაური";
        document.getElementById("banani2").innerHTML = "ლუკა აფციაური";
        document.getElementById("name1").title = "ლუკა აფციაური";
    }
    else{
        document.getElementById("one").innerHTML = "Home";
        document.getElementById("one1").innerHTML = "Hobby";
        document.getElementById("one2").innerHTML = "Experience";
        document.getElementById("one3").innerHTML = "Education";
        document.getElementById("banani").innerHTML = "Luka Aptsiauri";
        document.getElementById("banani2").innerHTML = "Luka Aptsiauri";
        document.getElementById("name1").title = "Luka Aptsiauri";
    }
    if(document.getElementById("eng").innerHTML === "ქარუთული"){
        document.getElementById("hdr").innerHTML = document.getElementById("one").innerHTML;
        document.getElementById("eng").innerHTML = "ENGLISH";
    }
    else{
        document.getElementById("hdr").innerHTML = document.getElementById("one").innerHTML
        document.getElementById("eng").innerHTML = "ქარუთული";
    }
}