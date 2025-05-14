import { chatUser } from "@/components/chatUser";
import { createContext, Dispatch, SetStateAction } from "react";

export interface MessageContextProps {
    user: chatUser,
    setChatUser: Dispatch<SetStateAction<chatUser>>;
}
export const MessageContext = createContext<MessageContextProps | null>(null);