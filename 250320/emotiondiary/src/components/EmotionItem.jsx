import React from "react";
import styled from "styled-components";

const EmotionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 4px;
  cursor: pointer;
  &.EmotionItem_off {
    background: var(--input-color);
  }
  &.EmotionItem_on_1 {
    background: var(--emotion-01);
    color: var(--light-color);
  }
  &.EmotionItem_on_2 {
    background: var(--emotion-02);
    color: var(--light-color);
  }
  &.EmotionItem_on_3 {
    background: var(--emotion-03);
    color: var(--light-color);
  }
  &.EmotionItem_on_4 {
    background: var(--emotion-04);
    color: var(--light-color);
  }
  &.EmotionItem_on_5 {
    background: var(--emotion-05);
    color: var(--light-color);
  }
`;

const EmotionImg = styled.img`
  width: 50%;
  margin-bottom: 10px;
`;

const EmotionTitle = styled.span`
  font-size: 2rem;
`;

const EmotionItem = ({ id, name, img, onClick, isSelected }) => {
  const handleOnClick = () => {
    onClick(id);
  };
  return (
    <EmotionContent
      className={isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`}
      onClick={handleOnClick}
    >
      <EmotionImg src={img} alt={`emotion${id}`} />
      <EmotionTitle>{name}</EmotionTitle>
    </EmotionContent>
  );
};

export default EmotionItem;
