var str = prompt("Enter the number");
var number = "<h2>";
// removes all white spaces
str.replace(/\s/g, "").toLowerCase();
//for storage of final built string
for (var i = 0, len = str.length; i < len; i++) {
    if (str.slice(i, i+1).match(/^[0-9]+$/) != null){
        number += parseInt(str.slice(i, i+1)).toString();
    }
    else {
        if (str.slice(i, i + 3).indexOf("one") != -1){
            number += "1";
            i += 2;
            continue;
        }
        else if (str.slice(i, i + 3).indexOf("two") != -1){
            number += "2";
            i += 2;
            continue;
        }
        else if (str.slice(i, i + 3).indexOf("six") != -1){
            number += "6";
            i += 2;
            continue;
        }
        else if (str.slice(i, i + 4).indexOf("four") != -1){
            number += "4";
            i += 3;
            continue;
        }
        else if (str.slice(i, i + 4).indexOf("nine") != -1){
            number += "9";
            i += 3;
            continue;
        }
        else if (str.slice(i, i + 4).indexOf("five") != -1){
            number += "5";
            i += 3;
            continue;
        }
        else if (str.slice(i, i + 5).indexOf("three") != -1){
            number += "3";
            i += 4;
            continue;
        }
        else if (str.slice(i, i + 5).indexOf("seven") != -1){
            number += "7";
            i += 4;
            continue;
        }
        else if (str.slice(i, i + 5).indexOf("eight") != -1){
            number += "3";
            i += 4;
            continue;
        }
    }
}
document.write(number);
