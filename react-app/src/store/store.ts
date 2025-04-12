import { configureStore } from "@reduxjs/toolkit";
import studentReducer from './reducers/studentReducer'; // Импорт редьюсера студентов
import projectReducer from './reducers/projectReducer'; // Импорт редьюсера проектов

export const store = configureStore({
  reducer: {
    students: studentReducer,  // Редьюсер для студентов
    projects: projectReducer,  // Редьюсер для проектов
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;