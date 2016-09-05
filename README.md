# jsDebug
a script to help make javascript debugging easier

## This script allows you to set debug functions to ease development of javascript

### How to use

Include script before your scripts that will be using this tool
```html
<script src="jsDebug.js"></script>
```

## Create log Object
```javascript
var d = new Debug(true); 
//To turn off use change code to 
var d = new Debug(false); 
```

## Add entry to log
```javascript
d.addEntry("something to log...");
```

## Send to console only. Doesnt add to complete log
```javascript
d.consoleOnly("something to send to the console");
```

## Send to console and log.
```javascript
d.console("somehting to send to the console and log");
```

## Download log file
```javascript
d.getLog();
```

## Get link to download log file
```javascript
d.getLogLink();
```
