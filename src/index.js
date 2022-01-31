// Starter to tell if index.js belongs to Cagel for <CAG_DIR>

//For creating binaries yourself please make your binaries from executableindex.js
const cmd = require("node-cmd")
const fs = require("fs");
const { resolve } = require('path');
const { readdir } = require('fs').promises;
const path = require("path");
const os = require("os");
const prompt = require('prompt-sync')();
const process = require("process");
var obj = JSON.parse(fs.readFileSync("./info.json", "utf8"))
//const run = require("./run.js");   since been removed
const { stringify } = require("querystring");

console.log("\"help\" for commands.")
//Start at C:\ or /
try {
process.chdir(os.homedir())
}catch {
  console.log("Unable to change directory to home. Current path is "+process.cwd()+".")
}
//Vars
var promptpath = "/>";
var a = 1
var time
var pathk
var pathtime 
while (a == 1){
    let date_ob = new Date(); // So the shell updates the time for cprompt
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    var pathforprompt = path.dirname("");
    
    try {
      if (process.cwd().replace("\\","/") == os.homedir().replace("\\","/")) {
        if (!promptpath .startsWith("<Home> ")) {
        promptpath = "<Home> " + promptpath;
        }
      } else {
        promptpath = promptpath.replace("<Home> ", "");
      }
      if (fs.existsSync("./index.js") | fs.existsSync("./src/index.js")) {
        try{
        var data = fs.readFileSync("./index.js", 'utf8');
        }
        catch {
          var data=fs.readFileSync("./src/index.js", 'utf8')
        }
        if (data.startsWith("//")) {

          if (!promptpath.startsWith("<Cagel Dir> ")) {
          promptpath = "<Cagel Dir> " + promptpath
        }} else {
          promptpath = promptpath.replace("<Cagel Dir> ", "")
        } 
        
      } else {
      

        promptpath = promptpath.replace("<Cagel Dir> ", "")
      } 
    }catch (e){
      //Permission probably is denied
      console.log("A problem has occurred. Logging error: \n"+e)
    }
  
    if (time == true) {
        promptpath = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + ": "
    } if (pathk == true) {
promptpath = process.cwd()
    }
    if (pathtime == true) {
        promptpath =  promptpath = process.cwd() + " " + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + ": "
    }
var [name, ...args] = prompt(promptpath).trim().split(/\s+/); //Seperation of the command name and the arguements

//COMANDS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 
if (name == "do" && args.includes("barrel")){
  if (args.includes("-?")) {
    console.log("do a barrel roll {-?}\nJust a test command to see if the basics of the shell are working."); continue
  } // this was the first command put in and i never bothered to take it out 
console.log("{insert upside down picture}")
} 
if (name == "mkd") { // create directory otherwise known sometimes as "md" or "mkdir"
  if (args == "-?") {
console.log("mkd {-?} [directory]\nCreate a directory.")
  } 
  try {
  if (!fs.existsSync(process.cwd() +args)) {
    fs.mkdirSync(process.cwd() +"/"+args.join(" ").toString())
  }
} catch (e){
  if (stringify(e).startsWith("Error: EPERM")) {
    console.log("Permission Error. \nAt index.js")
  }
}
}

else if (name =="vers") {  //version of cagel, all variables are taken from the info.json
  var update=obj.update
  var lastchange=obj.lastchange
  var made=obj.made
  var vers=obj.vers
  if (args == "-?") {
    console.log("vers {-?} [$up $lc $m] ")
    console.log("Display the version of Cagel.")
  }
  
  else if (args == "$m") {
    console.log(made)
  }
  
  else if (args == "$lc") {
    console.log(lastchange)
  }

  else if (args == "$up") {
    console.log(update)
  }

  else {
    console.log(vers)
  }
}
else if (name == "showlen"){
  if (args == "-?") {
    console.log("showlen {-?} [file]")
    console.log("Show the length of a file.")
  }
 try{
 var amnt=0;
 var lines = fs.readFileSync(args.join(" "),"utf8")
amnt = lines.length;
 console.log(amnt + " Characters\nKB: "+amnt/1024+"\nMB: "+(amnt/1024)/1024)
  }
  catch(e) {
    console.log("At index.js\nUnknown.  File may be too big.")
    console.log(e)
  }
}
else if (name == "clr"){
  if (args == "-?") {
    console.log("Clear the terminal.")
    continue
  }
  console.clear()
}
else if (name == "lookfor") {
  try{
  if (args == "-?") {
    console.log("lookfor [filename]")
    console.log("look for a file in the path you're in.")
    continue
  }
	console.log("This command is still in development and may not function correctly. ")
var walk = function(dir) {

    var results = [];
    var list = fs.readdirSync(dir);
		
    list.forEach(function(file) {
        file = dir + '/' + file;
	
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            /* Recurse into a subdirectory */
            results = results.concat(walk(file));
        } else { 
            /* Is a file */
            results.push(file);
        }
    });
    return results;
}
	
	var res = walk(process.cwd())

for (let i of res){
	if (i.includes(args.join(" ")+"/")) {
		console.log(i)
	}
}}
catch(err) {
	if (stringify(err) == "Error: ENOENT: no such file or directory, stat '//dev/fd/21'") {
		console.log("You can not use this in the directory '/' inside repl.it.")
		continue
	}
  if (stringify(err).startsWith("Error: EPERM")) {
    console.log("Permission error detected. Try refining the path you are searching in.\nAt index.js")
  }
	console.log("Error has occured.\n",err,"\nAt index.js")
}
}

else if (name == "sf") {
	if (args == "-?") {
		console.log("sf\nShow contents of folder.")
	}
console.log(".\n..")
try{
var files = fs.readdirSync('./')
let count = 0
var newarr=[]
for (let f of files) {
	var s = fs.statSync(f)
	
	if (s.isDirectory()) {
		
files[count]+=" [Directory]"
	console.log(files[count])
	 newarr = files.filter(a => !(a.includes("[Directory]")))

	}
	count++	
}

console.log(newarr.join("\n"))
}
catch(e) {
  if (stringify(e).startsWith("Error: EPERM:")) {
    console.log("Permission Error. You are likely in a system folder.")
  }
  console.log("Unknown error. Details:\n"+e)
  continue
}

}
 else if (name == "help"){
  console.log("do a barrel roll\nbugs\nshowlen [file]\nclr\nvers [$up $lc $m]\nrun [file]\nlookfor [filename]\nshowhex [file]\nexit\nshowbinary [file]\ncprompt [$path $time $1 $2 $3 $4 $off] {args}\ncd [args]\nshowcontent [file]\nAdd -? to any command to get a help message. \nEx: cprompt -?\nAdd > to a $ argument for help on the arguement. \nEx: >$path")
} // help command
else if (name == "showhex") {
  if (args == "-?") {
    console.log("showhex {-?} [file]")
    console.log("Show hex content of a file.")
  continue
  }
  try {
  var kj = fs.readFileSync(args.join(" "), "utf-8")
  var hexxed = Buffer.from(kj).toString('hex')
console.log(hexxed);}
catch {
  console.log("Error. Possible due to no file extension on file or no file inputted.")
} //show hex contents of a file

} else if (name == "showbinary") {
    if (args == "-?") {
    console.log("showbinary {-?} [file]")
    console.log("Show binary content of a file.")
  continue
  }
  try {
  var bin = fs.readFileSync(args.join(" "), "utf8").split("")
  var amnt = bin.length;

  if (amnt >= 1000000)
  {
  console.log("File is more than 1000000 (1 Million) characters. aborting.")
    continue
  }
console.log(bin.map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(" "))
 
}
catch (e){
  console.log("Error. Possible due to no file extension on file or no file inputted.")
  console.log("Message: \n"+e)
}
}//show binary content of file

else if (name == "showcontent") {
  if (args == "-?") {
    console.log("showcontent {-?} [file]") 
    console.log("Show the content of inputted file.")
 continue
  }
  console.log("Showing content of " +args.join(" "))
try {
  
    var data = fs.readFileSync(args.join(" "), 'utf8');
    console.log(data);    
} catch(e) {
    console.log('Error: File not found or is directory. Try adding a file extension.');
}

}//show text content of file
else if (name == "bugs") {
	if (args == "-?" ){
		console.log("bugs\nDisplay known bugs.")
	}
	console.log("Bug count: ",obj.bugcount,"\nDescription: ",obj.bugdescription)
}
else if (name.startsWith(";;")) {
  continue
}//comment for .cag files
else if (name == "pwd") {
  if (args == '-?') {
    console.log("Print the working directory (check the directory you are in). \nThis can also be achieved by using 'cprompt $path'.")
    continue
}
console.log(process.cwd())
}

//Adding point here------------------------------------------------------------------------------------------------



else if (name == "cprompt"){
  

  if (args == "-?") {
      console.log("cprompt [$1 $2 $3 $4 $off $path $time]")
      console.log("Change the prompt.") 
      continue
  }
  if(args.length == 0){
    console.log("Please add a prompt.")
    continue
}
  else{
    if (args.includes("$path")){
     promptpath = process.cwd()
     promptpath +=" ";
     pathk = true
          time = false
        pathtime = false
     continue
}
    else if (args.includes("$time")){
           promptpath = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + ": "
            time = true
          }else if (args.includes("$1")) {promptpath = "/>"
          pathk = false
          time = false
        pathtime = false}
          else if (args.includes("$2")) {promptpath = "CAGEL>>"
          pathk = false
          time = false
        pathtime = false}
          else if (args.includes("$3")) {promptpath = ">"
          pathk = false
          time = false
        pathtime = false}
          else if (args.includes("$4")) { promptpath = process.cwd() + " " + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + ": "
        pathk = false
    time = false
pathtime = true}
          else if (args.includes("$off")) {promptpath = ""
          pathk = false
          time = false
        pathtime = false}
        
    else {
      promptpath = args.join(" ") + " "
      pathk = false
          time = false
        pathtime = false
    }
  
  }
}//cprompt command
else if (name == "cd") {
  if (args.includes("-?")) {
    console.log("cd {-?} [folder]\nStands for change directory. Move to another path directory.")
    continue
  }
if (args[0] == ".."){
    process.chdir('../'); 
    console.log("Changed to " +process.cwd());continue
    
  }
try{

  var processed = args.join(" ").toString()
process.chdir(processed)
console.log("Changed to " + process.cwd())
}catch(e) {
  console.error("Error. Could be due to the folder missing. Folder: " + args[0]+"\n\n\n"+e)

}
}//Cd command
else if (name == "exit") {
  process.exit(1)
}//Exit command
else if (name == "run") {
  if (args == "-?") {
    console.log("run {-?} [file]") 
    console.log("Run a file with .cag file extension.")
  }
  else {
    file = args.join(" ") 
    if (!(file.endsWith(".cag") && !(file.endsWith(".CAG")))) {
      console.log("WRN: This is not a .cag file.")
    }

try {
  if (args.length == 0) {
    console.log("You did not put in a name of a file to run.")
    continue
  } // Run command from run.js
  
    run.run(args.join(" ")) // the file name
} catch(e) {
    console.log("Error. Possibly due to file not being found.\n\n" + e.stack)
}
}}
//ARGUEMENTS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
else if (name == ">$path") {
  console.log("cprompt **$path**")
  console.log("Shows path of terminal window.")
}else if (name == ">$m") {
  console.log("vers **$m**")
  console.log("Show when project Cagel was made.")
}else if (name == ">$up") {
  console.log("vers **$up**")
  console.log("Show update note.")
}else if (name == ">$lc") {
  console.log("vers **$lc**") 
  console.log("Show when last changed. Tell if the project is still alive.")
  
}
else if (name == ">$time"){console.log("cprompt **$time**\nShows time of prompt. ")}
else if (name == ">$1") {
  console.log("cprompt **$1**\nShows \"/>\" as prompt.")
}else if (name == ">$2") {
  console.log("cprompt **$2**\nShows \"CAGEL>>\" as prompt.")
}
else if (name == ">$3") {
  console.log("cprompt **$3**\nShows \">\" as prompt.")
}
else if (name == ">$4") {
  console.log("cprompt **$4**\nShows the path and time as prompt.")
}
else if (name == ">$off") {
  console.log("cprompt **$off**\nShows nothing as prompt.")
}  //Help for arguements
//End of arguements\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
else {
  var yesnt = true;
  if (args.length == 0) {
    yesnt = false;
  }
  if (yesnt == true) {
  console.log("Missing " + name +", with args of " + args +"\nAt index.js")
  }
  else {
    console.log("Missing " + name + "\nAt index.js")
  }
}//missing command error message
};
//