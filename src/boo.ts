interface IOption {
  text: string;
  nextId: number;
  state?: string;
  requiredState?: {
    subject: string;
    isForDelete?: boolean;
  };
}

interface IGameState {
  id: number;
  text: string;
  options: IOption[];
}

interface IGameView {
  displayGameState(state: IGameState): void;

  displayOption(option: IOption): void;

  clearOptions(): void;
}

class GameModel {
  private bag: Bag;
  private gameStates: IGameState[];

  constructor(gameStates: IGameState[]) {
    this.bag = new Bag();
    this.gameStates = gameStates;
  }

  findStateById(id: number): IGameState {
    for (const state of this.gameStates) {
      if (state.id === id) {
        return state;
      }
    }
    return this.gameStates[0];
  }

  showOption(option: IOption): boolean {
    if (!option?.requiredState) return true;

    const subject = option.requiredState.subject;
    const hasSubject = this.bag.hasInBag(subject);

    if (hasSubject && option?.requiredState?.isForDelete) {
      this.bag.removeFromBag(subject);
    }
    return hasSubject;
  }

  selectOption(option: IOption): void {
    option?.state && this.bag.addToBag(option?.state);
  }
}

class GamePresenter {
  private model: GameModel;
  private view: IGameView;

  constructor(model: GameModel, view: IGameView) {
    this.model = model;
    this.view = view;
  }

  startGame(): void {
    const state = this.model.findStateById(0);
    this.view.displayGameState(state);
  }

  handleOptionSelection(option: IOption): void {
    this.model.selectOption(option);

    const nextState = this.model.findStateById(option.nextId);

    if (nextState) {
      this.view.clearOptions();
      this.view.displayGameState(nextState);
    }
  }

  presentOption(option: IOption): void {
    if (this.model.showOption(option)) {
      this.view.displayOption(option);
    }
  }
}

class GameView implements IGameView {
  private textElement: HTMLElement | null;
  private optionsElement: HTMLElement | null;

  constructor() {
    this.textElement = document.getElementById("text");
    this.optionsElement = document.getElementById("options");
  }

  displayGameState(state: IGameState): void {
    if (this.textElement) {
      this.textElement.innerText = state.text;
    }
  }

  displayOption(option: IOption): void {
    if (this.optionsElement) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.addEventListener("click", () => {
        gamePresenter.handleOptionSelection(option);
      });
      this.optionsElement.appendChild(button);
    }
  }

  clearOptions(): void {
    if (this.optionsElement) {
      this.optionsElement.innerHTML = "";
    }
  }
}

// Usage
// const gameStates: IGameState[] = [
//     // Define your game states here
// ];

const gameModel = new GameModel(gameStates);
const gameView = new GameView();
const gamePresenter = new GamePresenter(gameModel, gameView);

gamePresenter.startGame();
