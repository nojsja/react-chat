import React, { useState } from 'react';
import { Chat, ContactList } from '@nojsja/react-chat';
import { contact, contactList, messageList, my } from './displayData';

export default () => {
  const [chatListData, setChatListData] = useState<any[]>(messageList);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: 20,
        height: 709,
        backgroundColor: 'ForestGreen',
      }}
    >
      <ContactList
        data={contactList}
        style={{
          marginRight: 10,
          height: '100%',
          borderRadius: 5,
          overflow: 'hidden',
          width: 240,
        }}
      />
      <Chat
        contact={contact}
        me={my}
        chatList={chatListData}
        onSend={(msg: any) => setChatListData([...chatListData, msg])}
        onEarlier={() => console.log('EarlierEarlier')}
        style={{
          borderRadius: 5,
        }}
      />
    </div>
  );
};
