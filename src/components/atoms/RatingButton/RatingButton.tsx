import './RatingButton.css';

interface RatingButtonProps {
  value: string;
  selected: boolean;
  onclick: (value: string) => void;
};

export const RatingButton = ({ value, selected, onclick }: RatingButtonProps) => {
  return (
    <button className={`round_button ${selected ? 'selected' : ''}`} onClick={() => {
      onclick(value);
    }}>
      {value}
    </button >
  )
}

