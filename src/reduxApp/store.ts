"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import shapeReducer from "./features/AddShape/shapeSlice";
import modalReducer from "./features/ModalSlice/modalSlice";

const rootReducer = combineReducers({
  shapes: shapeReducer,
  modals: modalReducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
