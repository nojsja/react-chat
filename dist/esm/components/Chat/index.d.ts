import type { IChatProps } from '../../types';
declare function Chat(props: IChatProps): JSX.Element;
declare namespace Chat {
  var defaultProps: {
    style: {
      width: string;
      height: string;
    };
    contact: {};
    me: {};
    chatList: never[];
    onSend: (msg: any) => void;
  };
}
export default Chat;
