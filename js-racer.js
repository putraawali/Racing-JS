"use strict"
let players = [{
    name: 'a',
    position: 0
  },
  {
    name: 'b',
    position: 0
  },
  {
    name: 'c',
    position: 0
  }, {
    name: 'd',
    position: 0
  },
  {
    name: 'e',
    position: 0
  },
  {
    name: 'f',
    position: 0
  },
  {
    name: 'g',
    position: 0
  },
  {
    name: 'h',
    position: 0
  },
  {
    name: 'i',
    position: 0
  },
  {
    name: 'j',
    position: 0
  },
  {
    name: 'k',
    position: 0
  },
  {
    name: 'l',
    position: 0
  },
  {
    name: 'm',
    position: 0
  }, {
    name: 'o',
    position: 0
  }, {
    name: 'p',
    position: 0
  }, {
    name: 'q',
    position: 0
  }, {
    name: 'r',
    position: 0
  }, {
    name: 's',
    position: 0
  }, {
    name: 't',
    position: 0
  }, {
    name: 'u',
    position: 0
  }, {
    name: 'v',
    position: 0
  }, {
    name: 'w',
    position: 0
  }, {
    name: 'x',
    position: 0
  }, {
    name: 'y',
    position: 0
  }, {
    name: 'z',
    position: 0
  },
]

function diceRoll() {
  return Math.ceil(Math.random() * 6);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function printBoard(panjangLintasan, player, jumlahPemain) {

  for (let j = 0; j < jumlahPemain; j++) {
    let oneTrack = printLine(panjangLintasan);
    for (let i = 0; i < oneTrack.length; i++) {
      if (i === players[j].position && oneTrack[i] === 'X') {
        oneTrack[i - 4] = player[j].name
      } else if (i === player[j].position) {
        oneTrack[i] = player[j].name;
      }

    }
    console.log(oneTrack.join('|'));
  }

}

function printLine(panjangLintasan) {
  let trackOutput = [];

  for (let i = 0; i < panjangLintasan; i++) {
    if (i === 6 || i === panjangLintasan - 4) {
      trackOutput.push('X')
    } else {
      trackOutput.push(' ');
    }
  }

  return trackOutput;
}

function advance(player) {
  let rolling = diceRoll();
  player.position += rolling;
}

function finished(winnerFlag, jumlahPemain, panjangLintasan, player) {
  for (let i = 0; i < jumlahPemain; i++) {
    if (player[i].position >= panjangLintasan - 1) {
      player[i].position = panjangLintasan - 1
      return winnerFlag = true;
    }
  }

  return winnerFlag = false;
}

function winner(player) {
  console.log(`Selamat ${player.name} menang`);
}

function clearScreen() {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}

function main() {
  // Program Start
  let jumlahPemain = +process.argv[2]
  let panjangLintasan = +process.argv[3];


  if (jumlahPemain <= 2) {
    console.log(`Pemain kurang, silahkan cari tambahan pemain!`)
  } else {
    let winnerFlag = false;

    while (!winnerFlag) {
      for (let i = 0; i < jumlahPemain; i++) {
        printBoard(panjangLintasan, players, jumlahPemain);
        advance(players[i]);
        winnerFlag = finished(winnerFlag, jumlahPemain, panjangLintasan, players);

        sleep(400);
        clearScreen();
        if (winnerFlag) {
          printBoard(panjangLintasan, players, jumlahPemain);
          winner(players[i]);
          break;
        }
      }
    }
  }
}

main();