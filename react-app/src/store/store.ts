import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counterSlice"; // Подключаем редьюсер

export const store = configureStore({
  reducer: {
    // counter: counterReducer, // Добавляем редьюсер в хранилище
  },
});

// Типы RootState и AppDispatch для использования в хуках
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
