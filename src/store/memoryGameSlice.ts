import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum GameState {
  NewGame,
  Playing,
  MoveEnd,
  GameOver,
}

export type CellState = {
  number: number;
  show: boolean;
};

export type Player = {
  playerNum: number;
  pairs: number;
};

const initialState = {
  gameState: GameState.NewGame,
  gridSize: 4,
  icons: false,
  boardState: [] as CellState[],
  currentPlayer: 0,
  players: [] as Player[],
  startTime: 0,
  stopTime: 0,
  numMoves: 0,
  lastMatch: [] as number[],
  intermediateMoves: [] as number[],
};

const memoryGameSlice = createSlice({
  name: "memoryGame",
  initialState,
  reducers: {
    newGame(state) {
      state.gameState = GameState.NewGame;
    },
    startGame(_, action) {
      return {
        ...initialState,
        boardState: action.payload.boardState,
        gridSize: action.payload.gridSize,
        icons: action.payload.icons,
        players: action.payload.players,
        startTime: performance.now(),
        gameState: GameState.Playing,
      };
    },
    restartGame(state, action) {
      return {
        ...initialState,
        boardState: action.payload.boardState,
        gridSize: state.gridSize,
        players: generatePlayers(state.players.length),
        startTime: performance.now(),
        gameState: GameState.Playing,
      };
    },
    addIntermediateMove(state, action) {
      const moveIndex = action.payload;
      state.intermediateMoves.push(moveIndex);
    },
    addMove(state, action) {
      state.gameState = GameState.MoveEnd;
      state.numMoves++;

      if (action.payload.matched) {
        state.lastMatch = [];
        state.intermediateMoves.forEach((index) => {
          state.lastMatch.push(index);
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(nextTurnWithDelay.fulfilled, (state, action) => {
      if (state.gameState !== GameState.MoveEnd) return state;

      const currentPlayerIndex = state.currentPlayer;

      if (action.payload.matched) {
        state.players[currentPlayerIndex].pairs++;
        state.intermediateMoves.forEach((index) => {
          state.boardState[index].show = true;
        });
      } else {
        state.currentPlayer =
          state.currentPlayer + 1 === state.players.length
            ? 0
            : state.currentPlayer + 1;
      }

      state.intermediateMoves = [];

      if (state.boardState.filter((cell) => cell.show === false).length === 0) {
        state.stopTime = performance.now();
        state.gameState = GameState.GameOver;
      } else {
        state.gameState = GameState.Playing;
      }
    });
  },
});

export const { newGame, startGame, restartGame, addIntermediateMove, addMove } =
  memoryGameSlice.actions;

export default memoryGameSlice.reducer;

export const generatePlayers = (numPlayers: number) =>
  Array.from({ length: numPlayers }, (_, index) => ({
    playerNum: index + 1,
    pairs: 0,
  }));

export const selectNumPlayers = (state: RootState) =>
  state.memoryGame.players.length;
export const selectIsSolo = (state: RootState) => selectNumPlayers(state) === 1;

export const nextTurnWithDelay = createAsyncThunk(
  "memoryGame/nextTurnWithDelay",
  async (payload: { delay: number; matched: boolean }) => {
    await new Promise((resolve) => setTimeout(resolve, payload.delay));
    return payload;
  },
);
