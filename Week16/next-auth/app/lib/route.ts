import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";
export const  NEXT_AUTH = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: { label: 'email', type: 'text', placeholder: '' },
            password: { label: 'password', type: 'password', placeholder: '' },
          },
          async authorize(credentials: any) {
              console.log(credentials);
  
              return {
                  id: "user1",
                  name: "anurag",
                  email: "anurag@gmail.com"
              };
          },
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
          })
    ],
    secret: process.env.NEXTAUTH_SECRET,
  
    callbacks: {
      session: ({session, token, user}: any) => { 
          console.log(session);
          if(session && session.user){
              session.user.id = token.sub;
          }
          return session ;
      }
    },
    pages:{
        signIn : "/signin"
    }
  }