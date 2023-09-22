const readline = require('readline');

let points = 0;

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
    const earnedPoints = (minutes * (minutes + 1)) / 2;
    console.log();
    console.log(`Focus time ended. You earned ${earnedPoints} points.`);

    process.stdin.setRawMode(false);

    while (process.stdin.read() !== null) {}

    rl.prompt();
  });
}

function playMusic() {
}

function displayTodoList() {
}

function showStudyTips() {
}

function generateReport() {
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
    const commandList = "commands currently working: .focustime .end | commands not working: .music .todolist .studytips .report";
    console.log(`${commandList}`);
  } else if (input in commandFunctions) {
    commandFunctions[input]();
  } else {
    console.log("Unknown command.");
    rl.prompt();
  }
});

rl.prompt();
