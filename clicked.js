function click(title) {

    //universal document elements:
    var x = document.getElementById("title");
    var a = document.getElementById("p1head");
    var t1 = document.getElementById("topleft-th");
    var t1h1 = document.getElementById("left-th1");
    var t1h2 = document.getElementById("left-th2");
    var t1h3 = document.getElementById("left-th3");
    var t1h4 = document.getElementById("left-th4");
    var t1h5 = document.getElementById("left-th5");
    var t1h6 = document.getElementById("left-th6");

    var t2 = document.getElementById("topright-th");

    if (title == "ausspoc") { //first tab:
        x.innerHTML = "AUSSpOC";
        a.innerHTML = "About AUSSpOC";
        t1.innerHTML = "General Information";
        t1h1.innerHTML = "Primary Facility";
        t1h2.innerHTML = "Alt Facility ";
        t1h3.innerHTML = "Contact";
        t1h4.innerHTML = "Grp Mailbox";
        t1h5.innerHTML = "Personnel";
        t1h6.innerHTML = "Time to Alt";

        t2.innerHTML = "Hours of Operations";

    } else if (title === "canspoc") {
        x.innerHTML = "CANSpOC"
        a.innerHTML = "About CANSpOC";
    } else if (title === 'cosmos') {
        x.innerHTML = "COSMOS"
        a.innerHTML = "About COSMOS";
    } else if (title === 'cspoc') {
        x.innerHTML = "CSpOC"
        a.innerHTML = "About CSpOC";
    } else if (title === 'gssac') {
        x.innerHTML = "GSSAC"
        a.innerHTML = "About GSSAC";
    } else if (title === 'isoc') {
        x.innerHTML = "ISoC"
        a.innerHTML = "About ISoC";
    } else if (title === 'jaxa') {
        x.innerHTML = "JAXA"
        a.innerHTML = "About JAXA";
    } else if (title === 'kasi') {
        x.innerHTML = "KASI"
        a.innerHTML = "About KASI";
    } else if (title === 's3toc') {
        x.innerHTML = "S3TOC"
        a.innerHTML = "About S3TOC";
    } else { //main page look:
        x.innerHTML = "Sentinel Participants Active Communications Enterprise";
        a.innerHTML = "About S.P.A.C.E";

        t1.innerHTML = "";
        t1h1.innerHTML = "";
        t1h2.innerHTML = "";
        t1h3.innerHTML = "";
        t1h4.innerHTML = "";
        t1h5.innerHTML = "";
        t1h6.innerHTML = "";

        t2.innerHTML = "";
    }


}  

