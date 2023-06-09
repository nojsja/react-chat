import { IContact } from '@nojsja/react-chat';
export declare const contactList: {
    id: number;
    avatar: string;
    nickname: string;
    message: string;
    date: string;
}[];
export declare const contact: IContact;
export declare const my: {
    id: number;
    avatar: string;
    nickname: string;
    desc: string;
};
export declare const messageList: {
    _id: string;
    date: number;
    user: {
        id: number;
        avatar: string;
        nickname: string;
        desc: string;
    };
    message: {
        type: string;
        content: string;
    };
}[];
