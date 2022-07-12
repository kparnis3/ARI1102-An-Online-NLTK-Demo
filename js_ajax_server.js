function postFieldDataYoOurServer () {
    var text1 ="";
    var text2 ="";
    var swtch = 0;

    var fdata = new FormData();
    var request = new XMLHttpRequest();

    var jresp;
    var inpField1 = document.getElementById("inpField1");
    fdata.append("field1", inpField1.value);

    request.open("POST", "/python2", false);
    request.send(fdata);

    jresp = JSON.parse(request.responseText);
    console.log(jresp);

    if (jresp.length == 0) {
        alert("Enter some text!");
    }

    else if (jresp[0] == "1") {
        alert("Text isnt english!");
    }

    else {
        for(var i=0; i < jresp.length; i++) {
             temp = 0;
            for (var j = 0; j < jresp[i].length; j++) {
                if (swtch == 0) {
                    if (jresp[i][j][1]=="NOUN") {
                        text1 += (jresp[i][j][0]).fontcolor("#4e8043") + " " + (jresp[i][j][1]).fontcolor("#4e8043") + "<br>";
                   }
                    else if (jresp[i][j][1]=="NUM") {
                        text1 += (jresp[i][j][0]).fontcolor("#6200ff") + " " + (jresp[i][j][1]).fontcolor("#6200ff") + "<br>";
                    }
                    else if (jresp[i][j][1]=="ADJ") {
                        text1 += (jresp[i][j][0]).fontcolor("#ff00f7") + " " + (jresp[i][j][1]).fontcolor("#ff00f7") + "<br>";
                    }
                    else if (jresp[i][j][1]=="ADP") {
                        text1 += (jresp[i][j][0]).fontcolor("#ff0053") + " " + (jresp[i][j][1]).fontcolor("#ff0053") + "<br>";
                    }
                    else if (jresp[i][j][1]=="ADV") {
                        text1 += (jresp[i][j][0]).fontcolor("#00ffff") + " " + (jresp[i][j][1]).fontcolor("#00ffff") + "<br>";
                    }
                    else if (jresp[i][j][1]=="CONJ") {
                        text1 += (jresp[i][j][0]).fontcolor("#ff9800") + " " + (jresp[i][j][1]).fontcolor("#ff9800") + "<br>";
                    }
                    else if (jresp[i][j][1]=="DET") {
                        text1 += (jresp[i][j][0]).fontcolor("#795548") + " " + (jresp[i][j][1]).fontcolor("#795548") + "<br>";
                    }
                    else if (jresp[i][j][1]=="PRON") {
                        text1 += (jresp[i][j][0]).fontcolor("#019664") + " " + (jresp[i][j][1]).fontcolor("#019664") + "<br>";
                    }
                    else if (jresp[i][j][1]=="VERB") {
                        text1 += (jresp[i][j][0]).fontcolor("#65234b") + " " + (jresp[i][j][1]).fontcolor("#65234b") + "<br>";
                    }
                    else{
                        text1 += (jresp[i][j][0]).fontcolor("#941b96") + " " + (jresp[i][j][1]).fontcolor("#941b96") + "<br>";
                    }
                }
                else{
                    if() {
                        text2 += jresp[i][j][0] + " " + jresp[i][j][1] + " " + jresp[i][j][2] + "<br>";
                    }
                }

            }
            if(swtch == 0){
                swtch = 1;
            }
            else if(swtch == 1){
                swtch = 0;
            }


        }
        swtch=0;

        document.getElementById("POS1").innerHTML = text1;
        document.getElementById("POS2").innerHTML = text2;
    }
}
