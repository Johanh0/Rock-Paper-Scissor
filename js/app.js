const cpuResult = document.querySelector(".cpu--result");
const userResult = document.querySelector(".user--result");
const cpuPoints = document.querySelector(".game__board--points--cpu");
const userPoints = document.querySelector(".game__board--points--user");
const rockBtn = document.querySelector("#game--rock");
const paperBtn = document.querySelector("#game--paper");
const scissorBtn = document.querySelector("#game--scissor");
const allGameBtns = document.querySelectorAll(".game__option");
const playBtnGame = document.querySelector("#play__btn--game");

const isSelected = () => {
  // Check if any of these elements has the class selected
  const rockBtnIsActive = rockBtn.classList.contains("selected");
  const paperBtnIsActive = paperBtn.classList.contains("selected");
  const scissorBtnIsActive = scissorBtn.classList.contains("selected");
  let totalSelect = 0;

  for (const gameBtn of allGameBtns) {
    if (gameBtn.classList.contains("selected")) {
      totalSelect = totalSelect + 1;

      totalSelect > 1 ? clearSelected() : "";
    }
  }

  if (rockBtnIsActive || paperBtnIsActive || scissorBtnIsActive) {
    return;
  }

  userResult.textContent = "👑";
};

const clearSelected = () => {
  allGameBtns.forEach((gameBtn) => {
    gameBtn.classList.remove("selected");
  });
};

const cpuChoose = () => {
  return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
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

  gameBtn.addEventListener("click", () => {
    gameBtn.classList.add("selected");
    isSelected();
  });
});

playBtnGame.addEventListener("click", startGame);

function startGame() {
  switch (key) {
    case value:
      break;

    default:
      break;
  }
}
