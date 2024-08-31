import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// export const isloggedin = atom(false);
export const isloggedin = atomWithStorage("login", false);
