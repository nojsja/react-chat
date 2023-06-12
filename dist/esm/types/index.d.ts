import { CSSProperties, MouseEventHandler, ReactNode, UIEventHandler } from 'react';
export interface IChatProps {
  onSend: Function;
  me: IContact;
  contact: IContact;
  style: CSSProperties;
  chatList: IMessage[];
  onImage?: (files: FileList | null) => void;
  onEarlier?: MouseEventHandler;
}
export interface IContact {
  id?: number | string;
  avatar?: string;
  nickname?: string;
  message?: string;
  date?: string;
  desc?: string;
}
export interface IContactItem {
  styles?: CSSProperties;
  selected?: boolean;
  border?: boolean;
  contact?: IContact;
  onClick?: Function;
}
export interface IChatRecordList {
  onEarlier?: MouseEventHandler;
  data: IMessage[];
  me: IContact;
  style?: CSSProperties;
}
export interface IChatToolBar {
  tools?: any[];
  onEmojiSelect?: (contact: string) => void;
  onImage?: (files: FileList | null) => void;
}
export interface IContactList extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  onSelect?: (contact: IContact) => void;
  data: IContact[];
  onScroll?: UIEventHandler<HTMLDivElement>;
}
export interface IEmojiPopover {
  onSelect: Function;
}
export interface IImgPopover {
  onImage: (files: FileList | null) => void;
}
export interface IMsgBubble {
  data: IPureMsg;
  isMe: boolean;
}
export interface IMsgItem {
  data: IMessage;
  me: IContact;
}
export interface IScrollWrapper {
  data: Object[];
  style?: Partial<CSSProperties>;
  scrollToBottom?: boolean;
  children?: ReactNode;
}
export interface IChatInput {
  me: IContact;
  onSend: Function;
  onImage?: (files: FileList | null) => void;
  height: number;
}
export declare type IMessageType = 'text' | 'image';
export interface IPureMsg {
  type: IMessageType;
  content: string;
}
export interface IMessage {
  _id: string;
  date: number;
  user: IContact;
  message: IPureMsg;
}
