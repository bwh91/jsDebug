
var d = new Debug(true);

function myFirstFunction() {
    d.addEntry("in first function");
    document.open("text/html","replace");
    document.write("<h2>Learning about the HTML DOM is fun!</h2>");
    document.close();
    d.addEntry("End of first function");
    d.console("End of the first function console and log");
    d.consoleOnly("End of the first function console only");
}

function mySecondFunction() {
    d.addEntry("in second function");
    document.getElementById("demo").innerHTML = document.domain;
    d.addEntry("End of second function");
    d.console("End of the second function console and log");
    d.consoleOnly("End of second first function console only");
}

function getLog() {
  //d.getLog();
  d.consoleOnly(d.getLogLink());
}


d.console("Start of script");

document.getElementById("demo").innerHTML = document.lastModified;
