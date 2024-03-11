import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@utils/database";
import User from "@models/user";




const handler = NextAuth({
    
  providers: [
    GoogleProvider({
      clientId: '449175065162-icp2mb0m7p766om5idntigf4rt4bs3cf.apps.googleusercontent.com',
      clientSecret: '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',
    })
  ],

  async session({ session }) {
    const sessionUser = await User.findOne({email: session.user.email});
    session.user.id = sessionUser._id.toString()
    return session;
  },
  async signIn({profile}) {
  
    try{
        await connectDB();
        const user = await User.findOne({email: profile.email});
        if(user){
            return true;
        }
        else{
            await User.create({
                username: profile.name.replace(" ", "").toLowerCase(),
                email: profile.email,
                image: profile.picture
            })
        }
    }
    catch(err){
        console.log(err);
        return false;
    }
  },
});

export {handler as GET, handler as POST};