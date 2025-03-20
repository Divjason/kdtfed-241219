import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { emotionList, getFormattedDate } from "../util";

const Wrapper = styled.div`
  padding: 20px 0;
`;

const EditorSection = styled.div`
  margin-bottom: 40px;
`;

const EditorTitle = styled.h4`
  font-size: 2.2rem;
  margin-bottom: 10px;
`;

const EditorInfo = styled.div``;

const Input = styled.input`
  border: none;
  border-radius: 4px;
  background: var(--input-color);
  padding: 10px 20px;
  font-size: 2rem;
  font-family: var(--nanum-font);
  cursor: pointer;
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  border: none;
  border-radius: 4px;
  background: var(--input-color);
  padding: 20px;
  font-size: 2rem;
  font-family: var(--nanum-font);
  resize: none;
`;

const Emotiongroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2%;
`;

const Buttongroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Editor = ({ initData, onSubmit }) => {
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 1,
    content: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date))),
      });
    }
  }, [initData]);

  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };

  const handleChangeEmotion = useCallback((emotionId) => {
    setState((state) => ({
      ...state,
      emotionId,
    }));
  }, []);

  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    onSubmit(state);
  };
  return (
    <Wrapper>
      <EditorSection>
        <EditorTitle>오늘의 날짜</EditorTitle>
        <EditorInfo>
          <Input type="date" value={state.date} onChange={handleChangeDate} />
        </EditorInfo>
      </EditorSection>
      <EditorSection>
        <EditorTitle>오늘의 감정</EditorTitle>
        <Emotiongroup>
          {emotionList.map((it) => (
            <EmotionItem
              key={it.id}
              {...it}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === it.id}
            />
          ))}
        </Emotiongroup>
      </EditorSection>
      <EditorSection>
        <EditorTitle>오늘의 일기</EditorTitle>
        <EditorInfo>
          <Textarea
            onChange={handleChangeContent}
            value={state.content}
            placeholder="오늘하루 어땠나요?"
          />
        </EditorInfo>
      </EditorSection>
      <EditorSection>
        <Buttongroup>
          <Button text="취소하기" onClick={handleGoBack} />
          <Button text="작성완료" type={"positive"} onClick={handleSubmit} />
        </Buttongroup>
      </EditorSection>
    </Wrapper>
  );
};

export default Editor;
