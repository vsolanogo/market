import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import * as moment from 'moment';
import Messsage from './SingleMessage';
import MessageInput from './MessageInput';

export const Messages = ({
  onSendMessage,
  chatId,
  messages,
  viewerId,
  chatParticipants,
}) => (
  <>
    <ChosenChatHeader>
      <ChosenChatOwnerAvatar />
      {chatParticipants && (
        <ChosenChatOwnerName>
          {chatParticipants[0].fullName}
        </ChosenChatOwnerName>
      )}
    </ChosenChatHeader>
    <ChatMessagesContainer>
      {messages &&
        messages.map((i) => {
          if (i.ownerId === viewerId) {
            return (
              <Messsage
                key={uuid.v4()}
                createdAt={i.createdAt}
                text={i.text}
              />
            );
          }
          return (
            <Messsage
              key={uuid.v4()}
              createdAt={i.createdAt}
              text={i.text}
              isOwner
            />
          );
        })}
    </ChatMessagesContainer>
    <ChatInputContainer>
      <MessageInput onSendMessage={onSendMessage} chatId={chatId} />
    </ChatInputContainer>
  </>
);

const ChosenChatHeader = styled.div`
  background: #f5f7fb;
  display: flex;
  flex-direction: row;
  padding: 8px 18px;
  align-items: center;
`;

const ChosenChatOwnerAvatar = styled.img.attrs({
  src:
    'https://institutogoldenprana.com.br/wp-content/uploads/2015/08/no-avatar-25359d55aa3c93ab3466622fd2ce712d1.jpg',
})`
  object-fit: cover;
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

const ChosenChatOwnerName = styled.div`
  font-weight: 900;
  padding-left: 16px;
  font-family: Montserrat;
  font-size: 15px;
  color: #131314;
`;

const ChatMessagesContainer = styled.div`
  padding: 20px 10px;
  flex: 1 1 0;
  border-right: 1px solid #e9ebf2;
  overflow: auto;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
`;

const ChatInputContainer = styled.div`
  border: 1px solid #e9ebf2;
  height: 55px;
  display: flex;
  padding-left: 20px;
  padding-right: 10px;
  align-items: center;
`;
