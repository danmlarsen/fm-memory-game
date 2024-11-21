import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum GameState {
  Playing,
  MoveEnd,
  TurnEnd,
  GameOver,
}

type CellState = {
  number: number;
  show: boolean;
};

const initialState = {
  gameState: GameState.Playing,
  boardState: [] as CellState[],
  currentPlayer: 0,
  players: [0, 0] as number[],
  solo: false,
  startTime: 0,
  numMoves: 0,
  intermediateMoves: [] as number[],
};

const memoryGameSlice = createSlice({
  name: "memoryGame",
  initialState,
  reducers: {
    startGame(state, action) {
      state.boardState = action.payload.boardState;
    },
    addIntermediateMove(state, action) {
      const moveIndex = action.payload;
      state.intermediateMoves.push(moveIndex);
    },
    addMove(state) {
      state.gameState = GameState.MoveEnd;
      state.numMoves++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(nextTurnWithDelay.fulfilled, (state, action) => {
      console.log(action.payload);

      const currentPlayerIndex = state.currentPlayer;

      if (action.payload.matched) {
        state.players[currentPlayerIndex]++;
        state.intermediateMoves.forEach(
          (index) => (state.boardState[index].show = true),
        );
      } else {
        state.currentPlayer =
          state.currentPlayer + 1 === state.players.length
            ? 0
            : state.currentPlayer + 1;
      }

      state.intermediateMoves = [];
      state.gameState = GameState.Playing;
    });
  },
});

export const { startGame, addIntermediateMove, addMove } =
  memoryGameSlice.actions;

export default memoryGameSlice.reducer;

export const getNumPlayers = (state: RootState) =>
  state.memoryGame.players.length;

export const nextTurnWithDelay = createAsyncThunk(
  "memoryGame/nextTurnWithDelay",
  async (payload: { delay: number; matched: boolean }) => {
    await new Promise((resolve) => setTimeout(resolve, payload.delay));
    return payload;
  },
);
