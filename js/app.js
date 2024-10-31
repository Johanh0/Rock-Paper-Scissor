const cpuResult = document.querySelector(".cpu--result");
const userResult = document.querySelector(".user--result");
const cpuPoints = document.querySelector(".game__board--points--cpu");
const userPoints = document.querySelector(".game__board--points--user");
const rockBtn = document.querySelector("#game--rock");
const paperBtn = document.querySelector("#game--paper");
const scissorBtn = document.querySelector("#game--scissor");
const allGameBtns = document.querySelectorAll(".game__option");
const playBtnGame = document.querySelector("#play__btn--game");

const gameValues = {
  crowd: "👑",
  tie: "",
  rock: "👊",
  paper: "🖐️",
  scissor: "✌️",
};

const changeIcon = () => {
  let totalSelect = 0;

  setTimeout(() => {
    allGameBtns.forEach((gameBtn) => {
      if (gameBtn.classList.contains("selected")) {
        totalSelect = totalSelect + 1;
        togglePlayBtn();
        totalSelect > 1 ? clearSelected() : "";
      }
    });
  }, 10);
};

const isSelected = () => {
  // Check if any of these elements has the class selected
  const rockBtnIsActive = rockBtn.classList.contains("selected");
  const paperBtnIsActive = paperBtn.classList.contains("selected");
  const scissorBtnIsActive = scissorBtn.classList.contains("selected");

  if (rockBtnIsActive || paperBtnIsActive || scissorBtnIsActive) {
    allGameBtns.forEach((gameBtn) => {
      if (gameBtn.classList.contains("selected")) {
        userResult.textContent = gameBtn.textContent;
      }
    });
    return;
  }
  userResult.textContent = gameValues.crowd;
};

const clearSelected = () => {
  allGameBtns.forEach((gameBtn) => {
    gameBtn.classList.remove("selected");
    gameBtn.style.pointerEvents = "block";
  });

  togglePlayBtn();
};

const togglePlayBtn = () => {
  playBtnGame.classList.toggle("disabled");
};

const cpuChoose = () => {
  const cpuValue = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  if (cpuValue === 1) return gameValues.rock;

  if (cpuValue === 2) return gameValues.paper;

  if (cpuValue === 3) return gameValues.scissor;
};

const userChoose = () => {
  allGameBtns.forEach((gameBtn) => {
    if (gameBtn.classList.contains("selected")) {
      return gameBtn;
    }
  });
};

allGameBtns.forEach((gameBtn) => {
  // This is the emoji that is inside of the button

  gameBtn.addEventListener("mouseover", () => {
    gameBtnContent = gameBtn.textContent;
    userResult.textContent = gameBtnContent;
  });

  gameBtn.addEventListener("mouseout", isSelected);

  gameBtn.addEventListener("click", changeIcon);

  gameBtn.addEventListener("click", () => {
    gameBtn.classList.add("selected");
    isSelected();
  });
});

playBtnGame.addEventListener("click", startGame);

function startGame() {
  const finalCpuResult = cpuChoose();
  const finalUserResult = userResult.textContent;

  console.log(finalCpuResult);
  console.log(finalUserResult);

  switch (finalUserResult) {
    case gameValues.rock:
      break;
    case gameValues.pap:
      break;
    case gameValues.scissor:
      break;
    default:
      break;
  }
}

function gameLogic(userInput, cpuInput) {}
