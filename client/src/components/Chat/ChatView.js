import React from 'react';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';
import * as moment from 'moment';

import MessagesWindow from '../Messages/Messages';

export const Chat = ({ chatsInfo, onSendMessage }) => {
  return (
    <ChatContainer>
      <ChatsList>
        {chatsInfo &&
          chatsInfo.map((i) => {
            const time = moment
              .unix(i.lastMessageCreatedTime / 1000)
              .format('hh:mm A');
            // .format('DD.MM.YYYY');

            return (
              <ChatItem key={i.id} to={`/chat/${i.id}`}>
                <ChatListPaddingLeft />
                <ChatListContent>
                  <ChatItemName>
                    {i.itemName}
                    <LastMessageTime>{time}</LastMessageTime>
                  </ChatItemName>
                  <ChatLastMessageText>
                    {i.lastMessageText}
                  </ChatLastMessageText>
                </ChatListContent>
                <ChatListPaddingRight />
              </ChatItem>
            );
          })}
      </ChatsList>
      <ChosenChat>
        {chatsInfo.length > 0 && (
          <Route path="/chat/:id" component={MessagesWindow} />
        )}
      </ChosenChat>
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  flex: 1;
  background: white;
  display: flex;
  flex-direction: row;
`;

const ChatsList = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid #e9ebf2;
  padding-right: 1.5px;
  flex: 0 1 500px;
`;

const ChatItem = styled(NavLink)`
  text-decoration: none;
  display: flex;
  cursor: pointer;
  transition: 0.2s;
  border-bottom: 1px solid #e7e9ed;
  :hover {
    background: #e7e9ed;
  }
  &.active {
    background: #e7e9ed;
  }
`;

const ChatListContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 85px;
  box-sizing: border-box;
  justify-content: center;
  flex: 1 1 400px;
`;

const ChatListPaddingLeft = styled.div`
  flex: 0 2 50px;
`;
const ChatListPaddingRight = styled.div`
  flex: 0 2 10px;
`;

const ChatItemName = styled.div`
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 900;
  color: #131314;
`;

const ChatLastMessageText = styled.div`
  font-family: Montserrat;
  font-size: 15px;
  color: #97a3b4;
`;

const LastMessageTime = styled.span`
  float: right;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 100;
  color: rgba(151, 163, 180, 0.8);
`;

const ChosenChat = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
`;
