var english = /^[A-Za-z0-9]*$/;

$(function () {
    $('#titleh').removeClass('titleh2')
});

document.getElementById("1").onclick = function () {change1()};
function change1() {
    document.getElementById("hdr").innerHTML = document.getElementById("one").innerHTML;
    if(!english.test(document.getElementById("hdr").innerHTML)){
        document.getElementById("i00").innerHTML = "ლუკა აფციაური";
        document.getElementById("i00").style.listStyleImage = "url('site/imgs/content/man.svg')";
        document.getElementById("i01").innerHTML = "29/02/2000";
        document.getElementById("i01").style.listStyleImage = "url('site/imgs/content/newborn.svg')";
        document.getElementById("i02").innerHTML = "საქართველო, თბილისი";
        document.getElementById("i02").style.listStyleImage = "url('site/imgs/content/location.svg')";
        document.getElementById("i03").innerHTML = "კომპიუტერული მეცნიერების სტუდენტი";
        document.getElementById("i03").style.listStyleImage = "url('site/imgs/content/graduated.svg')";
        document.getElementById("i04").innerHTML = "1.85 მეტრი";
        document.getElementById("i04").style.listStyleImage = "url('site/imgs/content/height.svg')";
        document.getElementById("i05").innerHTML = "67 კილოგრამი";
        document.getElementById("i05").style.listStyleImage = "url('site/imgs/content/scale.svg')";
    }
    else{
        document.getElementById("i00").innerHTML = "Luka Aptsiauri";
        document.getElementById("i00").style.listStyleImage = "url('site/imgs/content/man.svg')";
        document.getElementById("i01").innerHTML = "29/02/2000";
        document.getElementById("i01").style.listStyleImage = "url('site/imgs/content/newborn.svg')";
        document.getElementById("i02").innerHTML = "Georgia, Tbilisi";
        document.getElementById("i02").style.listStyleImage = "url('site/imgs/content/location.svg')";
        document.getElementById("i03").innerHTML = "Computer Science and Programming student";
        document.getElementById("i03").style.listStyleImage = "url('site/imgs/content/graduated.svg')";
        document.getElementById("i04").innerHTML = "1.85 meters";
        document.getElementById("i04").style.listStyleImage = "url('site/imgs/content/height.svg')";
        document.getElementById("i05").innerHTML = "67 kilograms";
        document.getElementById("i05").style.listStyleImage = "url('site/imgs/content/scale.svg')";
    }
}
document.getElementById("2").onclick = function () {change2()};
function change2() {
    document.getElementById("hdr").innerHTML = document.getElementById("one1").innerHTML;
    if(!english.test(document.getElementById("hdr").innerHTML)){
        document.getElementById("i00").innerHTML = "ფორტეპიანოზე დაკვრა და მუსიკის წერა";
        document.getElementById("i00").style.listStyleImage = "url('site/imgs/content/piano.svg')";
        document.getElementById("i01").innerHTML = "ჭადრაკის თამაში";
        document.getElementById("i01").style.listStyleImage = "url('site/imgs/content/chess.svg')";
        document.getElementById("i02").innerHTML = "ბას გიტარაზე დაკვრა ბენდში";
        document.getElementById("i02").style.listStyleImage = "url('site/imgs/content/bass-guitar.svg')";
        document.getElementById("i03").innerHTML = "საქსოფონზე დაკვრა";
        document.getElementById("i03").style.listStyleImage = "url('site/imgs/content/saxophone.svg')";
        document.getElementById("i04").innerHTML = "თხილამურებზე სრიალი";
        document.getElementById("i04").style.listStyleImage = "url('site/imgs/content/ski.svg')";
        document.getElementById("i05").innerHTML = "ცურვა";
        document.getElementById("i05").style.listStyleImage = "url('site/imgs/content/swimming.svg')";
    }
    else{
        document.getElementById("i00").innerHTML = "Playing on piano and composing music";
        document.getElementById("i00").style.listStyleImage = "url('site/imgs/content/piano.svg')";
        document.getElementById("i01").innerHTML = "Playing chess";
        document.getElementById("i01").style.listStyleImage = "url('site/imgs/content/chess.svg')";
        document.getElementById("i02").innerHTML = "Playing bass guitar in band";
        document.getElementById("i02").style.listStyleImage = "url('site/imgs/content/bass-guitar.svg')";
        document.getElementById("i03").innerHTML = "Playing on saxophone";
        document.getElementById("i03").style.listStyleImage = "url('site/imgs/content/saxophone.svg')";
        document.getElementById("i04").innerHTML = "Skiing";
        document.getElementById("i04").style.listStyleImage = "url('site/imgs/content/ski.svg')";
        document.getElementById("i05").innerHTML = "Swimming";
        document.getElementById("i05").style.listStyleImage = "url('site/imgs/content/swimming.svg')";
    }
}
document.getElementById("3").onclick = function () {change3()};
function change3() {
    document.getElementById("hdr").innerHTML = document.getElementById("one2").innerHTML;
    if(!english.test(document.getElementById("hdr").innerHTML)){

    }
}
document.getElementById("4").onclick = function () {change4()};
function change4() {
    document.getElementById("hdr").innerHTML = document.getElementById("one3").innerHTML;
}
document.getElementById("5").onclick = function () {change5()}
function change5() {
    document.getElementById("hdr").innerHTML = document.getElementById("one4").innerHTML;
}

function langChange() {
    let temp = document.getElementById("hdr").innerHTML;
    if(english.test(temp)){
        document.getElementById("one").innerHTML = "მთავარი";
        document.getElementById("one1").innerHTML = "ჰობი";
        document.getElementById("one2").innerHTML = "გამოცდილება";
        document.getElementById("one3").innerHTML = "განათლება";
        document.getElementById("one4").innerHTML = "უნარი";
        document.getElementById("banani").innerHTML = "ლუკა აფციაური";
        document.getElementById("banani2").innerHTML = "ლუკა აფციაური";
        document.getElementById("name1").title = "ლუკა აფციაური";
    }
    else{
        document.getElementById("one").innerHTML = "Home";
        document.getElementById("one1").innerHTML = "Hobby";
        document.getElementById("one2").innerHTML = "Experience";
        document.getElementById("one3").innerHTML = "Education";
        document.getElementById("one4").innerHTML = "Skills";
        document.getElementById("banani").innerHTML = "Luka Aptsiauri";
        document.getElementById("banani2").innerHTML = "Luka Aptsiauri";
        document.getElementById("name1").title = "Luka Aptsiauri";
    }
    if(document.getElementById("eng").innerHTML === "ქარუთული"){
        document.getElementById("hdr").innerHTML = document.getElementById("one").innerHTML;
        document.getElementById("eng").innerHTML = "ENGLISH";
        document.getElementById("eng1").src = "site/imgs/flags/united-kingdom.svg";
    }
    else{
        document.getElementById("hdr").innerHTML = document.getElementById("one").innerHTML
        document.getElementById("eng").innerHTML = "ქარუთული";
        document.getElementById("eng1").src = "site/imgs/flags/georgia.svg";
    }
    if(english.test(temp)){
        document.getElementById("i00").innerHTML = "ლუკა აფციაური";
        document.getElementById("i00").style.listStyleImage = "url('site/imgs/content/man.svg')";
        document.getElementById("i01").innerHTML = "29/02/2000";
        document.getElementById("i01").style.listStyleImage = "url('site/imgs/content/newborn.svg')";
        document.getElementById("i02").innerHTML = "საქართველო, თბილისი";
        document.getElementById("i02").style.listStyleImage = "url('site/imgs/content/location.svg')";
        document.getElementById("i03").innerHTML = "კომპიუტერული მეცნიერების სტუდენტი";
        document.getElementById("i03").style.listStyleImage = "url('site/imgs/content/graduated.svg')";
        document.getElementById("i04").innerHTML = "1.85 მეტრი";
        document.getElementById("i04").style.listStyleImage = "url('site/imgs/content/height.svg')";
        document.getElementById("i05").innerHTML = "67 კილოგრამი";
        document.getElementById("i05").style.listStyleImage = "url('site/imgs/content/scale.svg')";
    }
    else{
        document.getElementById("i00").innerHTML = "Luka Aptsiauri";
        document.getElementById("i00").style.listStyleImage = "url('site/imgs/content/man.svg')";
        document.getElementById("i01").innerHTML = "29/02/2000";
        document.getElementById("i01").style.listStyleImage = "url('site/imgs/content/newborn.svg')";
        document.getElementById("i02").innerHTML = "Georgia, Tbilisi";
        document.getElementById("i02").style.listStyleImage = "url('site/imgs/content/location.svg')";
        document.getElementById("i03").innerHTML = "Computer Science and Programming student";
        document.getElementById("i03").style.listStyleImage = "url('site/imgs/content/graduated.svg')";
        document.getElementById("i04").innerHTML = "1.85 meters";
        document.getElementById("i04").style.listStyleImage = "url('site/imgs/content/height.svg')";
        document.getElementById("i05").innerHTML = "67 kilograms";
        document.getElementById("i05").style.listStyleImage = "url('site/imgs/content/scale.svg')";
    }
}