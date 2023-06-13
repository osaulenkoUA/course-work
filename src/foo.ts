import { gameStates } from "./gameState";

export interface IOption {
  text: string;
  nextId: number;
  state?: string;
  requiredState?: {
    subject: string;
    isForDelete?: boolean;
  };
}

export interface IGameState {
  id: number;
  text: string;
  options: IOption[];
}

let initialState: [] = [];

const findStateById = (id: number): IGameState => {
  for (const state of gameStates) {
    if (state.id === id) {
      return state;
    }
  }
  return gameStates[0];
};

// Function to start the game
function startGame() {
  initialState = [];
  const state = findStateById(0);
  showGameState(state);
}

function showOption(option: IOption): boolean {
  if (!option?.requiredState) return true;
  const subject = option.requiredState.subject;
  // @ts-ignore
  const hasSubject = initialState.includes(subject);
  if (hasSubject && option?.requiredState?.isForDelete) {
    // @ts-ignore
    initialState = initialState.filter((el) => el !== subject) || [];
  }
  return hasSubject;
}

// Function to display the current game state
function showGameState(state: IGameState): void {
  console.log(initialState);
  const textElement = document.getElementById("text");
  const optionsElement = document.getElementById("options");

  textElement!.innerText = state.text;
  optionsElement!.innerHTML = "";

  state.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.addEventListener("click", () => selectOption(option));
      optionsElement!.appendChild(button);
    }
  });
}

// Function to handle option selection
function selectOption(option: IOption): void {
  const nextState = findStateById(option.nextId);

  // @ts-ignore
  option?.state && initialState.push(option?.state);

  if (nextState) {
    showGameState(nextState);
  }
}

// Start the game
startGame();
