

var Debug = function (on, logName="logfile.txt") {
  this.on = on;
  this.log = "";
  this.logName = logName;
};

/*
  Function to add entry to log file only
*/
Debug.prototype.addEntry  = function(x) {
  if(this.on) {
    this.log += x + "\n";
  }
};

/*
  Function to add entry to log file and send to console
*/
Debug.prototype.console = function(x) {
  if(this.on) {
    this.log += x + "\n";
    console.log(x);
  }
};

/*
  Function to add entry to console only
*/
Debug.prototype.consoleOnly = function(x) {
  if(this.on) {
    console.log(x);
  }
};


/*
  Function to download log file
*/
Debug.prototype.getLog = function() {
  if(this.on) {
    var e = document.createElement('a');
    e.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.log));
    e.setAttribute('download', this.logName);
    e.click();
  }
};

/*
  Function to get download link for log file
*/
Debug.prototype.getLogLink = function() {
  if(this.on) {

    return 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.log);

  }
};
