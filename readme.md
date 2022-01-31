# Cagel
Cagel is a simple (in development) shell for simple tasks such as cd and ls (its called sf in Cagel).
This project will be more advanced in the future and will be a GitHub repository (It is now and its [here](https://github.com/Fatpancake613/Cagel) ). I will put the link that will be there but this wouldnt be the final project. 
 I always keep the readme's relatively short because nobody wants to read a long one. If you want the longer description, below is where you want to be. 
The long description is not much yet since this project isn't that old yet. Here is some stuff that may be helpful.



* Made: 4-13-21
* Updates: 4
* Last updated: 7/14/21
* GitHub: Fatpancake613

## Plans 
I hope to make a powerful shell that works about as good as any other shell or terminal. I also plan on making a Windows and Linux version where you don't need to install the packages such as fs or process, once finished with the project itself. I don't plan on making it connect to Git or anything but I will try to make it have a good amount of commands. I have been copying off of Windows 7 command prompt and Git Bash so for first few commands because I dont really have any ideas.
## Command setup
I made the shell parse commands by seperating them by spaces. I put them into an array making the command name "name", and the arguments "args" using `const [name, ..args] = prompt(promptpath).trim().split(/\s+/);`. Although I have needed to alter the command so when you use `cd` you have to join the arguments because if you were to try to `cd example with space` it tries to cd to `example,with,space`.
Once it gets the command name and the arguements it then runs an if then statement as example `if (name == "Command_name") {console.log("Response or something")}`
## What my crappy terminal can do
Well, it can do a few things. But I will be going into more description with the paragraph ahead.
Commands I am going over: 
* showlen
* lookfor
* showhex
* showbinary
* cprompt
* cd
* showcontent
* run
## Showlen
Showlen shows you the exact length of a file inputted. This has no limit to how long the file can be, that is known. The longest file I have run it on is 17,719,119 characters (17-18 million). I am not exactly sure about the KB and MB lenghts but I put them in anyways.
## Lookfor
This command has been removed from the help command because of the sheer amount of bugs on both Windows and Repl.it. Nah, I am kidding. It just doesn't work right on Repl.it but running it on Windows taught me that there is a maximum length to how many files it can look through.
## Showhex
This command is pretty self explanitory but I just wanted to run through it really quick. This command shows the hex content of a file. There is no known limit so if you see this and have some bulky files I would like to see if there is some sort of limit.
## Showbinary
This command is also pretty self explanitory but this I would like to run through, because unlike the other ones, this has a 1,000,000 (1 million) character limit. The reason is because I am dumb and can't look at my resources or documentations. 
## Cprompt
Stands exactly for `change prompt`. This one was actually kind of difficult to figure out because I had no idea why the prompt was not changing time/path while the actual terminal was. The other problem was that I am stupid and added way too much code when I could have just changed 1 line of code.
## Cd
Stands for `change directory`. This command moves you to another folder/directory to possibly edit the contents in. This was not very difficult because it was a simple command. There isnt much to talk about. But if you want more details on what change directory is, think about your file explorer. 
## Showcontent
Pretty self explanitory if you ask me. It shows the content of a file inputted. If a file is written in binary, it will look like a mess of unicodes.
## run
This command will run any command as of 7/14/21 in a `.cag` file. Now completely removed.
# Updates
### 4-20-21:
Created run. I have not decided to add the actual processing as I will be adding to it later when the script is in a 30 stage.

### 4-23-21:
Created "vers" command. Displays version and information depending on the $arguments.

### 4-26-21:
Changed readme's, nothing much. Not adding this to the VERSION.js script.
### 5/5/21:
This one took a while to fix. I fixed the no file extension errors and the files too long. On the showbinary command, the limit is 1,000,000 characters (1 million). I switched from VERSION.js to info.json and info.json will now be where variables such as updates and some sort of saves will now be stored. I also switched from versions to just numbers for every time I update Cagel. I also changed my mind on putting in the run command and now it runs.
### 7/14/21:
Now when in directory with Cagel in it, it will now show <CAG_DIR> before your prompt. Run command will no longer be updated.

### 7/18/21:
Now when in directory with Cagel in it, it will now show <Cagel Dir> before your prompt. Added <Home> when you are in home directory. Fixed mkd. Added permission errors.

### 8/13/21:
Was experimenting with the binaries of Cagel and realize a few things, now there is a new file called executableindex.js which is now what is used for executables, to make them work without the extra files such as package.json.

### 11/13/21:
Wow, this hasn't been updated in forever. I should fix that. I added pwd and thats it. A lot right?

### 1/30/22:
Cleaned up this absolute shitshow