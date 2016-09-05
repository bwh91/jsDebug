

var Debug = function (on, logName="logfile.txt") {
  this.onOff = on;
  this.log = "";
  this.logName = logName;
};

Debug.prototype.log  = function(x) {
  if(on) {
    this.log += x;
  }
};

Debug.prototype.console = function(x) {
  if(on) {
    this.log += x;
    console.log(x);
  }
};

Debug.prototype.getLog = function(x) {
  if(on) {
    var e = document.createElement('a');
    e.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.log));
    e.setAttribute('download', this.logName);
  }
};
