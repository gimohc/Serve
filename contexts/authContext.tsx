import { user } from "@/app/_layout";
import { createContext } from "react";

interface AuthContextProps {
    user:  user | null; 
    login: (user : user) => void;
    logout: () => void;

}
export const AuthContext= createContext<AuthContextProps>({ user: null, login: () => {}, logout: () => {}   });