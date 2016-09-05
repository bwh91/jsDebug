
var debug = new Debug(true);

function myFirstFunction() {
    debug.log("in first function");
    document.open("text/html","replace");
    document.write("<h2>Learning about the HTML DOM is fun!</h2>");
    document.close();
    debug.log("End of first function");
    debug.console("End of the first function console and log");
    debug.consoleOnly("End of the first function console only");
}

function mySecondFunction() {
    debug.log("in second function");
    document.getElementById("demo").innerHTML = document.domain;
    debug.log("End of second function");
    debug.console("End of the second function console and log");
    debug.consoleOnly("End of second first function console only");
}


debug.console("Start of script");

document.getElementById("demo").innerHTML = document.lastModified;
