import React from 'react';
import styled from 'styled-components';

const NoticeContainer = styled.div`
  display: ${(props) => (props.noticeModal ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  top: 0;
  left: 0;
`;

const Notice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 55px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 5px 5px 5px -2px rgba(0, 0, 0, 1);
`;

const NoticeText = styled.div`
  color: black;
`;

export default (props) => {
  const { noticeModal, onModalToggle } = props;
  return (
    <NoticeContainer noticeModal={noticeModal} onClick={() => onModalToggle()}>
      <Notice>
        <NoticeText>앨범에서 음악을 재생하세요.</NoticeText>
      </Notice>
    </NoticeContainer>
  );
};
