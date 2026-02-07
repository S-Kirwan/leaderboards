"use server";

import { signIn, signOut } from "@/auth";

export const login = async () => {
  await signIn("42-school",{redirectTo: "/"});
};

export const logout = async () => {
  await signOut({redirectTo: "/"});
}