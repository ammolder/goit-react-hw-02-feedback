import { Button, HoverText } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((btn, i) => {
        return (
          <Button key={'btn-' + i} type="button" onClick={onLeaveFeedback}>
            <HoverText className="hover-text" aria-hidden="true">
              {ucFirst(btn)}
            </HoverText>
            <span className="actual-text">{ucFirst(btn)}</span>
          </Button>
        );
      })}
    </div>
  );
};

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}
