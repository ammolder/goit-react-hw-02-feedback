import { Wrapper, List, Item } from './Statistics.styled';

export const Statistics = ({
  recall: { good, neutral, bad },
  feedback,
  positivePercentage,
}) => {
  return (
    <Wrapper>
      <List>
        <Item>Good: {good}</Item>
        <Item>Neutral: {neutral}</Item>
        <Item>Bad: {bad}</Item>
        <Item>Total: {feedback}</Item>
        <Item>Positive feedback: {positivePercentage}%</Item>
      </List>
    </Wrapper>
  );
};
