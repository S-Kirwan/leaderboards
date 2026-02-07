"use server";

import { userAgent } from "next/server";
import { SignInButton } from "./components/sign-in-button";
import { SignOutButton } from "./components/sign-out-button";
import { auth } from "@/auth" ;
import Image from "next/image";

export default async function Home() {
  const session = await auth();

  if( session?.user ) {
    return (
    <div>
      <h1> NextAuth v5 + NextAuth 15 </h1>
      <p> You are signed in as {session.user.name} </p>
      <p> Your email is {session.user.email} </p>
      {session.user.image && (
        <Image 
         src={session.user.image}
          width={48}
          height={48}
          alt={session.user.name ?? "Avatar"}
        />
      )}
      <SignOutButton />
    </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {" "}
      <h1 className="text-4xl font-bold">Welcome to the 42 London's Ping Pong Scoreboard</h1>
      <p> You are not signed in.</p> <SignInButton/>
    </main>
  )
}
