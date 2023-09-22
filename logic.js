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
    console.log(`Music playback ended. You listened to ${musicDuration.toFixed(2)} seconds.`);
    process.stdin.setRawMode(false);
    rl.prompt();
  });
}

function displayTodoList() {

}

function showStudyTips() {
//do with aidan
}

function generateReport() {
  console.log(`You spent ${time_studied} minutes focused and earned ${points} points. You've checked off [unfinished] items off your todo list, and listened to ${time_music} minutes of music.`);
}

function endProgram() {
  rl.close();
}

const commandFunctions = {
  ".focustime": focusTime,
  ".music": playMusic,
  ".todolist": displayTodoList,
  ".studytips": showStudyTips,
  ".report": generateReport,
  ".end": endProgram
};

rl.on('line', (input) => {
  if (input === "command list") {
    const commandList = "commands currently working: .focustime .end | commands not working: .todolist(not implementing in logic) .studytips(waiting for aidan to do this) | commands semi-working: .report(unfinished) .music(not implementing actual music in logic)";
    console.log(`${commandList}`);
  } else if (input in commandFunctions) {
    commandFunctions[input]();
  } else {
    console.log("Unknown command.");
    rl.prompt();
  }
});

rl.prompt();
