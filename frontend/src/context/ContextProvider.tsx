"use client";
import { PostDataType } from "@/types/result";
import React, { createContext } from "react";

export const ResultDataContext = createContext<
  PostDataType | undefined | null | void
>(null);
