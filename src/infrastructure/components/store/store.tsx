import { configureStore } from "@reduxjs/toolkit";
import { robotReducer } from "../../reducer/services/reducer";

export const appStore = configureStore({
    reducer: {
        robots: robotReducer,
    },
});

export type rootStore = typeof appStore;
export type rootState = ReturnType<typeof appStore.getState>;
