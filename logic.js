const readline = require('readline');
const fs = require('fs');

let points = 0;
let time_studied = 0;
let time_music = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function focusTime() {
  console.log("Focus time has begun.");

  const startTime = Date.now();

  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.once('data', () => {
    const elapsedTime = Date.now() - startTime;
    const minutes = Math.ceil(elapsedTime / (60 * 1000));
    time_studied += minutes;
    const earnedPoints = (minutes * (minutes + 1)) / 2;
    points += earnedPoints;
    console.log();
    console.log(`Focus time ended. You earned ${earnedPoints} points.`);

    process.stdin.setRawMode(false);

    while (process.stdin.read() !== null) { }

    rl.prompt();
  });
}

let isMusicPlaying = false;
let musicStartTime = 0;
let musicEndTime = 0;

function playMusic() { //choose music with aidan
  console.log("Music playback beginning.")
  if (isMusicPlaying) {
    console.log("Music is already playing.");
    return;
  }

  isMusicPlaying = true;
  musicStartTime = Date.now();


  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.once('data', () => {
    musicEndTime = Date.now();
    const musicDuration = (musicEndTime - musicStartTime) / 1000; 
    time_music += Math.ceil(musicDuration / 60); 
    isMusicPlaying = false;
    console.log();
    console.log(`Music playback ended. You listened to ${musicDuration.toFixed(2)} seconds.`);
    process.stdin.setRawMode(false);
    rl.prompt();
  });
}

function displayTodoList() {

}

function showStudyTips() {
//do with aidan
  
  rl.question('How many hours do you have to focus (approx.)?', name => {
    switch(name){
      case '0':
        console.log("?");
        break;
      case '1':
        console.log("study tip for one hour");
        break;
      case '2':
        console.log("study tip for two hours");
        break;
      case '3':
        console.log("study tip for three hours");
        break;
      case '4':
        console.log("study tip for four hours");
        break;
      default:
        console.log("study tip for 5+ hours");
        break;
    }


    
  });

}

function generateReport() {
  console.log(`You spent ${time_studied} minutes focused and earned ${points} points. You've checked off [unfinished] items off your todo list, and listened to ${time_music} minutes of music.`);
}

function endProgram() {
  rl.close();
}

const commandFunctions = {
  ".focus": focusTime,
  ".music": playMusic,
  ".todolist": displayTodoList,
  ".studytips": showStudyTips,
  ".report": generateReport,
  ".end": endProgram
};

rl.on('line', (input) => {
  if (input === "cl") {
    const commandList = "commands currently working: .focus .end | commands not working: .todolist(not implementing in logic) | commands semi-working: .report(unfinished) .music(not implementing actual music in logic) .studytips(studytips just numbers for now)";
    console.log(`${commandList}`);
  } else if (input in commandFunctions) {
    commandFunctions[input]();
  } else {
    console.log("Unknown command.");
    rl.prompt();
  }
});

rl.prompt();
