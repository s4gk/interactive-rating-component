import image from '@/../public/images/illustration-thank-you.svg';
import './ThankYou.css';

interface IThankYou {
  selected: string
}

export const ThankYou = ({ selected }: IThankYou) => {
  return (
    <div className='card__image--thank'>
      <img src={image} />
      <div className='card__selected'>
        <p>You selected {selected} out of 5</p>
      </div>
    </div>
  );
}
