var english = /^[A-Za-z0-9]*$/;

$(function () {
    $('#titleh').removeClass('titleh2')
});

$("#p1").hide(1);

document.getElementById("1").onclick = function () {change1()};
function change1() {
    document.getElementById("hdr").innerHTML = document.getElementById("one").innerHTML;
    if(!english.test(document.getElementById("hdr").innerHTML)){
        $("#ul").show(1);
        $("#p1").hide(1);
        $("#p2").hide(1);
        $("#i00").show(1);
        $("#i01").show(1);
        $("#i02").show(1);
        $("#i03").show(1);
        $("#i04").show(1);
        $("#i05").show(1);
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
        $("#ul").show(1);
        $("#p1").hide(1);
        $("#p2").hide(1);
        $("#i00").show(1);
        $("#i01").show(1);
        $("#i02").show(1);
        $("#i03").show(1);
        $("#i04").show(1);
        $("#i05").show(1);
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
        $("#ul").show(1);
        $("#p1").hide(1);
        $("#p2").hide(1);
        $("#i00").show(1);
        $("#i01").show(1);
        $("#i02").show(1);
        $("#i03").show(1);
        $("#i04").show(1);
        $("#i05").show(1);
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
        $("#ul").show(1);
        $("#p1").hide(1);
        $("#p2").hide(1);
        $("#i00").show(1);
        $("#i01").show(1);
        $("#i02").show(1);
        $("#i03").show(1);
        $("#i04").show(1);
        $("#i05").show(1);
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
    if(!english.test(document.getElementById("hdr").innerHTML)) {
        $("#ul").hide(1);
        $("#p1").show(1);
        $("#p2").hide(1);
        document.getElementById("p1").innerHTML = "იმისდა მიუხედავად, რომ არასდროს არ მქონია სამსახური, მიმუშავია \n" +
            "ბევრ პროექტზე ინდივიდუალურად ისევე როგორც გუნდში. მაქ \n" +
            "გუნდში მუშაობის გამოცდილება და მთელი ცხოვრება ვარ გუნდის ნაწილი \n" +
            "დაწყებული სპორტიდან დამთავრებული მუსიკალური ჯგუფით.";
    }
    else{
        $("#ul").hide(1);
        $("#p1").show(1);
        $("#p2").hide(1);
        document.getElementById("p1").innerHTML = "Despite the fact that I have never had an actual job, I have worked on \n" +
            "various projects both individually and in a team. I have experience of \n" +
            "being a team player, I have been part of a team all my life, beginning \n" +
            "with sports teams to musical band.";
    }
}
document.getElementById("4").onclick = function () {change4()};
function change4() {
    if(!english.test(document.getElementById("hdr").innerHTML)){
        $("#ul").show(1);
        $("#p1").hide(1);
        $("#p2").show(1);
        $("#i02").hide(1);
        $("#i03").hide(1);
        $("#i04").hide(1);
        $("#i05").hide(1);
        document.getElementById("hdr").innerHTML = document.getElementById("one3").innerHTML;
        document.getElementById("i00").innerHTML = " - 2018 დავმთავრე კერძო სკოლა ქორალი";
        document.getElementById("i00").style.listStyleImage = "url('site/imgs/edu/qoralilogo.svg')";
        document.getElementById("i01").innerHTML = "2018 - ამ დრომდე კავკასიის უნივერსიტეტი";
        document.getElementById("i01").style.listStyleImage = "url('site/imgs/edu/CUlogo.svg')";
        document.getElementById("p2").innerHTML = "ბაკალავრი კომპიუტერული მეცნიერებები და პროგრამირება";
    }
    else{
        $("#ul").show(1);
        $("#p1").hide(1);
        $("#p2").show(1);
        $("#i02").hide(1);
        $("#i03").hide(1);
        $("#i04").hide(1);
        $("#i05").hide(1);
        document.getElementById("hdr").innerHTML = document.getElementById("one3").innerHTML;
        document.getElementById("i00").innerHTML = "     - 2018 : Graduated private high school Qorali";
        document.getElementById("i00").style.listStyleImage = "url('site/imgs/edu/qoralilogo.svg')";
        document.getElementById("i01").innerHTML = "2018 - Present : Caucasus University";
        document.getElementById("i01").style.listStyleImage = "url('site/imgs/edu/CUlogo.svg')";
        document.getElementById("p2").innerHTML = "Bachelor of computer science and programming";
    }
}
document.getElementById("5").onclick = function () {change5()};
function change5() {
    document.getElementById("hdr").innerHTML = document.getElementById("one4").innerHTML;
    if(!english.test(document.getElementById("hdr").innerHTML)){
        $("#ul").show(1);
        $("#p1").hide(1);
        $("#p2").hide(1);
        $("#i00").show(1);
        $("#i01").show(1);
        $("#i02").show(1);
        $("#i03").show(1);
        $("#i04").show(1);
        $("#i05").show(1);
        document.getElementById("i00").innerHTML = "C & C++";
        document.getElementById("i00").style.listStyleImage = "url('site/imgs/skillz/cpp.svg')";
        document.getElementById("i01").innerHTML = "JavaScript & JQuery";
        document.getElementById("i01").style.listStyleImage = "url('site/imgs/skillz/js.svg')";
        document.getElementById("i02").innerHTML = "HTML & CSS";
        document.getElementById("i02").style.listStyleImage = "url('site/imgs/skillz/css.svg')";
        document.getElementById("i03").innerHTML = "Microsoft Excel";
        document.getElementById("i03").style.listStyleImage = "url('site/imgs/skillz/xls.svg')";
        document.getElementById("i04").innerHTML = "SQL";
        document.getElementById("i04").style.listStyleImage = "url('site/imgs/skillz/sql.svg')";
        document.getElementById("i05").innerHTML = "Resolve (video editing)";
        document.getElementById("i05").style.listStyleImage = "url('site/imgs/skillz/mp4.svg')";
    }
    else{
        $("#ul").show(1);
        $("#p1").hide(1);
        $("#p2").hide(1);
        $("#i00").show(1);
        $("#i01").show(1);
        $("#i02").show(1);
        $("#i03").show(1);
        $("#i04").show(1);
        $("#i05").show(1);
        document.getElementById("i00").innerHTML = "C & C++";
        document.getElementById("i00").style.listStyleImage = "url('site/imgs/skillz/cpp.svg')";
        document.getElementById("i01").innerHTML = "JavaScript & JQuery";
        document.getElementById("i01").style.listStyleImage = "url('site/imgs/skillz/js.svg')";
        document.getElementById("i02").innerHTML = "HTML & CSS";
        document.getElementById("i02").style.listStyleImage = "url('site/imgs/skillz/css.svg')";
        document.getElementById("i03").innerHTML = "Microsoft Excel";
        document.getElementById("i03").style.listStyleImage = "url('site/imgs/skillz/xls.svg')";
        document.getElementById("i04").innerHTML = "SQL";
        document.getElementById("i04").style.listStyleImage = "url('site/imgs/skillz/sql.svg')";
        document.getElementById("i05").innerHTML = "Resolve (video editing)";
        document.getElementById("i05").style.listStyleImage = "url('site/imgs/skillz/mp4.svg')";
    }
}

function langChange() {
    let temp = document.getElementById("hdr").innerHTML;
    if(english.test(temp)){
        $("#ul").show(1);
        $("#p1").hide(1);
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
        $("#ul").show(1);
        $("#p1").hide(1);
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