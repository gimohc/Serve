import { chatUser } from "@/components/chatUser";
import { createContext, Dispatch, SetStateAction } from "react";

// store current user chat opened, and set it
export interface MessageContextProps {
    user: chatUser,
    setChatUser: Dispatch<SetStateAction<chatUser>>;
}
export const MessageContext = createContext<MessageContextProps | null>(null);