import NextAuth from "next-auth";
import FortyTwoProvider  from "next-auth/providers/42-school" ;

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
  FortyTwoProvider({
  clientId: process.env.AUTH_FORTYTWO_ID,
  clientSecret: process.env.AUTH_FORTYTWO_SECRET,
  client: {
    token_endpoint_auth_method: "client_secret_post",
  },
}),
]
});

