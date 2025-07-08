import { RatingButtonProps } from "@/types/interfaces";
import { RatingButton, SubmitButton } from "../../atoms";
import ratings from '../../../data/ratings.json';
import './Buttons.css';

export const Buttons = ({ selected, onclick, submit }: RatingButtonProps) => {

  return (
    <div className="buttons">
      <div className="buttons__rating">
        {ratings.map(({ value }) => (
          <RatingButton key={value} value={value} selected={selected === value} onclick={onclick} />
        ))}

      </div>
      <SubmitButton submit={submit} />
    </div>
  )
}
