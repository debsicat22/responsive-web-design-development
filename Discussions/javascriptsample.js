function validateZIP(field) {
    var valid = "0123456789-";
    var hyphencount = 0;
    if (field.length != 5 && field.length != 10) {
        alert("Please enter your 5 digit or 5 digit+4 zip code.");
        return false;
    }
    for (var i = 0; i < field.length; i++) {
        temp = "" + field.substring(i, i + 1);
        if (temp == "-") hyphencount++;
        if (valid.indexOf(temp) == "-1") {
            alert("Invalid characters in your zip code. Please try again.");
            return false;
        }
        if ((hyphencount > 1) || ((field.length == 10) && "" + field.charAt(5) != "-")) {
            alert("The hyphen character should be used with a properly formatted 5 digit+four zip code, like '12345-6789'. Please try again.");
            return false;
        }
    }
    return true;
} 