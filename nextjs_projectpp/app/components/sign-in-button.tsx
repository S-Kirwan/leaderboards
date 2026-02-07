"use client";

import { login } from "@/lib/actions/auth";

export const SignInButton = () => {
	return (
      <button onClick={() => login()} > Sign in with your 42 login to access the scoreboard. </button>
	)
};
