import {
  compose,
  lifecycle,
  pure,
  withState,
  withProps,
} from 'recompose';
import React from 'react';
import styled from 'styled-components';
import * as moment from 'moment';

const timeDifference = (timestamp) => {
  const now = moment(new Date());
  const then = moment.unix(timestamp / 1000);
  const ms = moment(now, 'DD/MM/YYYY HH:mm:ss').diff(
    moment(then, 'DD/MM/YYYY HH:mm:ss'),
  );
  const d = moment.duration(ms);

  if (d._data.days > 0) {
    return <span>{Math.floor(d.asDays())} days ago</span>;
  }
  if (d._data.hours > 0) {
    return <span>{Math.floor(d.asHours())} hours ago</span>;
  }

  if (d._data.minutes > 0) {
    return <span>{Math.floor(d.asMinutes())} minutes ago</span>;
  }

  if (d._data.seconds > 0) {
    return <span>{Math.floor(d.asSeconds())} seconds ago</span>;
  }

  return <span>just now</span>;
};

const MessageBoxOwner = styled.div`
  margin-right: auto;
`;

const MessageBox = styled.div`
  margin-left: auto;
`;

const ChatMessage = styled.div`
  background: #f3f6fa;
  color: #131314;
  width: 250px;
  padding: 5px;
  border-radius: 5px;
`;

const ChatMessageOwner = styled.div`
  background: #00aeef;
  color: white;
  width: 250px;
  padding: 5px;
  border-radius: 5px;
`;

const TimeSinceMessage = styled.div`
  float: right;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 26px;
  color: #97a3b4;
`;

const MessageView = ({ createdAt, text, isOwner }) => (
  <>
    {isOwner && (
      <MessageBoxOwner>
        <ChatMessageOwner key={createdAt}>{text}</ChatMessageOwner>
        <TimeSinceMessage>
          {timeDifference(createdAt)}
        </TimeSinceMessage>
      </MessageBoxOwner>
    )}
    {!isOwner && (
      <MessageBox>
        <ChatMessage key={createdAt}>{text}</ChatMessage>
        <TimeSinceMessage>
          {timeDifference(createdAt)}
        </TimeSinceMessage>
      </MessageBox>
    )}
  </>
);

export default compose(
  lifecycle({
    componentDidMount() {
      this.interval = setInterval(
        () => this.setState({ time: Date.now() }),
        1000,
      );
    },
    componentWillUnmount() {
      clearInterval(this.interval);
    },
  }),
  pure,
)(MessageView);
