// Define a variable to use when we need to set the characters image src
const ASSET_ROOT = "./assets";

// Create an img element to represent the character
const character = document.createElement("img");
const blueTank = document.createElement("img");
const sandBag = document.createElement("img");
// Make the character a little bigger
// character.style.width = "75px";

// Position the character absolutely in the lower left corner of the screen
character.style.position = "absolute";
character.style.left = "500px";
character.style.bottom = "500px";

blueTank.style.position = "absolute";
blueTank.style.left = "1000px";
blueTank.style.bottom = "500px";

windowWidth = window.innerWidth;
windowHeight = window.innerHeight;

let y = 0;
let barrierHeight = 0;
while (barrierHeight <= windowHeight - 88) {
  const sandBagLeft = document.createElement("img");
  sandBagLeft.style.transform = "rotate(90deg)";
  sandBagLeft.style.position = "absolute";
  sandBagLeft.style.left = `-8px`;
  sandBagLeft.style.bottom = `${44 + y * 66}`;
  barrierHeight = parseInt(sandBagLeft.style.bottom) + 66;
  sandBagLeft.src = `${ASSET_ROOT}/Obstacles/sandbagBrown.png`;
  document.body.append(sandBagLeft);

  const sandBagRight = document.createElement("img");
  sandBagRight.style.transform = "rotate(90deg)";
  sandBagRight.style.position = "absolute";
  sandBagRight.style.right = `-8px`;
  sandBagRight.style.bottom = `${44 + y * 66}`;
  sandBagRight.src = `${ASSET_ROOT}/Obstacles/sandbagBrown.png`;
  document.body.append(sandBagRight);
  y++;
}

let i = 0;
let barrierWidth = 0;
while (barrierWidth <= windowWidth - 66) {
  const sandBagTop = document.createElement("img");
  sandBagTop.style.position = "absolute";
  sandBagTop.style.left = `${0 + i * 66}px`;
  barrierWidth = parseInt(sandBagTop.style.left) + 66;
  sandBagTop.style.top = "0px";
  sandBagTop.src = `${ASSET_ROOT}/Obstacles/sandbagBrown.png`;
  document.body.append(sandBagTop);

  const sandBagBottom = document.createElement("img");
  sandBagBottom.style.position = "absolute";
  sandBagBottom.style.left = `${0 + i * 66}px`;
  sandBagBottom.style.bottom = `0px`;
  sandBagBottom.src = `${ASSET_ROOT}/Obstacles/sandbagBrown.png`;
  document.body.append(sandBagBottom);
  i++;
}

sandBag.style.position = "absolute";
sandBag.style.left = "0px";
sandBag.style.bottom = "0px";
// Set the src of the img so the browser knows what to show
character.src = `${ASSET_ROOT}/Tanks/tankRed_outline.png`;
blueTank.src = `${ASSET_ROOT}/Tanks/tankBlue_outline.png`;
sandBag.src = `${ASSET_ROOT}/Obstacles/sandbagBrown.png`;

// Add the character image to the page
document.body.append(character);
document.body.append(blueTank);
document.body.append(sandBag);
// Define a variable to represent the direction our character is moving
let direction = null;

// Define a variable to reperesent the speed of our character
let speed = 2;
let right = false;
let left = false;
let down = false;
let up = false;

function walkRight() {
  right = true;
}

function walkLeft() {
  left = true;
}

function walkUp() {
  up = true;
}

function walkDown() {
  down = true;
}

function stopLeft() {
  character.src = `${ASSET_ROOT}/Tanks/tankRed_outline.png`;
  left = false;
}
function stopRight() {
  character.src = `${ASSET_ROOT}/Tanks/tankRed_outline.png`;
  right = false;
}
function stopDown() {
  character.src = `${ASSET_ROOT}/Tanks/tankRed_outline.png`;
  down = false;
}
function stopUp() {
  character.src = `${ASSET_ROOT}/Tanks/tankRed_outline.png`;
  up = false;
}

// Have someone at your table do some research on  setInterval- what is it doing?
setInterval(function() {
  // noscroll();
  // character.style.left / bottom are both strings: "0px"
  // If we want to do some arithmatic, we'll need to parse them into integers:
  let leftPos = parseInt(character.style.left);
  // console.log(leftPos);
  let bottomPos = parseInt(character.style.bottom);

  const bluLeftPos = parseInt(blueTank.style.left);
  const bluBottomPos = parseInt(blueTank.style.bottom);

  // If the character is moving right, the distance between him and the left side of the screen should increase
  // What is speed?
  let short = 78;
  let long = 78;
  let hyp = 78;
  let charRightSide = leftPos + short;
  let charTopSide = bottomPos + long;
  let bluRightSide = bluLeftPos + short;
  let bluTopSide = bluBottomPos + long;

  if (right === true) {
    character.style.left = `${leftPos + speed}px`;
    leftPos = parseInt(character.style.left);
    character.style.transform = "rotate(90deg)";
    charRightSide = leftPos + short;
    charTopSide = bottomPos + long;
  }

  // Account for other directions here:

  if (left === true) {
    character.style.left = `${leftPos - speed}px`;
    leftPos = parseInt(character.style.left);
    character.style.transform = "rotate(-90deg)";
    charRightSide = leftPos + short;
    charTopSide = bottomPos + long;
  }

  if (down === true) {
    character.style.bottom = `${bottomPos - speed}`;
    bottomPos = parseInt(character.style.bottom);
    character.style.transform = "rotate(180deg)";
    charTopSide = bottomPos + short;
    charRightSide = leftPos + long;
  }

  if (up === true) {
    character.style.bottom = `${bottomPos + speed}`;
    bottomPos = parseInt(character.style.bottom);
    character.style.transform = "rotate(0deg)";
    charTopSide = bottomPos + short;
    charRightSide = leftPos + long;
  }

  if (left === true && up === true) {
    character.style.transform = "rotate(-45deg)";
    bottomPos = parseInt(character.style.bottom);
    leftPos = parseInt(character.style.left);
    charTopSide = bottomPos + hyp;
    charRightSide = leftPos + hyp;
  }

  if (right === true && up === true) {
    character.style.transform = "rotate(45deg)";
    leftPos = parseInt(character.style.left);
    bottomPos = parseInt(character.style.bottom);
    charTopSide = bottomPos + hyp;
    charRightSide = leftPos + hyp;
  }

  if (left === true && down === true) {
    character.style.transform = "rotate(-135deg)";
    leftPos = parseInt(character.style.left);
    bottomPos = parseInt(character.style.bottom);
    charTopSide = bottomPos + hyp;
    charRightSide = leftPos + hyp;
  }

  if (right === true && down === true) {
    character.style.transform = "rotate(135deg)";
    leftPos = parseInt(character.style.left);
    bottomPos = parseInt(character.style.bottom);
    charTopSide = bottomPos + hyp;
    charRightSide = leftPos + hyp;
  }

  if (
    leftPos < bluRightSide &&
    charRightSide > bluLeftPos &&
    charTopSide > bluBottomPos &&
    bottomPos < bluTopSide
  ) {
    // console.log("overlapping");
    if (right === true) {
      // console.log("right");
      character.style.left = `${leftPos - 4 * speed}px`;
    }

    if (left === true) {
      character.style.left = `${leftPos + 4 * speed}px`;
    }

    if (down === true) {
      character.style.bottom = `${bottomPos + 4 * speed}`;
    }

    if (up === true) {
      character.style.bottom = `${bottomPos - 4 * speed}`;
    }
  }
  console.log(charRightSide);
}, 20); // <- What is this number?

// When we want to start walking a given direction, let's change:
//  1. The characters gif.
//  2. The value of the direction variable. How will this effect the setInterval loop above?

// Finish the functions below:

document.addEventListener("keydown", function(e) {
  if (e.repeat) return;
  if (e.key == "ArrowRight") {
    walkRight();
  }
  if (e.key == "ArrowLeft") {
    walkLeft();
  }
  if (e.key == "ArrowDown") {
    walkDown();
  }
  if (e.key == "ArrowUp") {
    walkUp();
  }
  if (e.key == " ") {
    fire();
  }
  console.log(e.key);
  if (e.key == "Shift" && speed == 2) {
    speed = 4;
    console.log(speed);
  }
});

document.addEventListener("keyup", function(e) {
  if (e.repeat) return;
  if (e.key == "ArrowRight") {
    stopRight();
  }
  if (e.key == "ArrowLeft") {
    stopLeft();
  }
  if (e.key == "ArrowDown") {
    stopDown();
  }
  if (e.key == "ArrowUp") {
    stopUp();
  }
  if (e.key == "Shift" && speed == 4) {
    speed = 2;
    console.log(speed);
  }
});
character.addEventListener("click", function() {
  console.log("Character was clicked");
});

const form = document.querySelector(".preference-form");

// function turn() {
//   if (direction == "left") {
//     walkDown();
//   } else if (direction == "bottom") {
//     walkRight();
//   } else if (direction == "right") {
//     walkUp();
//   } else if (direction == "up") {
//     walkLeft();
//   }
// }

// setInterval(function() {
//   turn();
// }, 1000);
// walkRight();

function fire() {
  bottomPos = parseInt(character.style.bottom);
  leftPos = parseInt(character.style.left);
  console.log("fire!!");
  bullet = document.createElement("img");
  bullet.src = "${ASSET_ROOT}/Bullets/bulletRed_outline.png";
  document.body.append(bullet);
  bullet.style.position = "absolute";
  bullet.style.left = `${leftPos + 39}px`;
  bullet.style.bottom = `${bottomPos + 39}px`;
  bulletLeft = parseInt(bullet.style.left);
  bulletBottom = parseInt(bullet.style.bottom);
  bullet_speed = 10;
  if (left === true && up === true) {
    bullet_direction = "northwest";
    let interval = setInterval(function() {
      bulletLeft = parseInt(bullet.style.left);
      bulletBottom = parseInt(bullet.style.bottom);
      bullet.style.left = `${bulletLeft - bullet_speed}px`;
      bullet.style.bottom = `${bulletBottom + bullet_speed}px`;
    }, 20);
    setTimeout(function() {
      clearInterval(interval);
    }, 3000);
    bullet.style.left = `${bulletLeft - bullet_speed}px`;
    bullet.style.bottom = `${bulletBottom + bullet_speed}px`;
  } else if (left === true && down === true) {
    bullet_direction = "southwest";
  } else if (right === true && up === true) {
    bullet_direction = "northeast";
  } else if (right === true && down === true) {
    m;
    bullet_direction = "southeast";
  } else if (right === true) {
    bullet_direction = "east";
  } else if (left === true) {
    bullet_direction = "west";
  } else if (up === true) {
    bullet_direction = "north";
  } else if (down === true) {
    bullet_direction = "south";
  }
}
