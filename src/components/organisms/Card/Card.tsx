import { useState } from 'react';
import { Buttons, Icon, ThankYou } from '@/components/molecules/index';
import content from '@/data/content.json';
import './Card.css';

export const Card = () => {
  const [selectRating, setSelectRating] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);

  const displayContent = submitted ? content.thankYou : content.initial;

  const changeSelectRating = (value: string) => {
    setSelectRating((prev) => (prev === value ? '' : value));
  }

  const changeStateSubmit = () => {
    setSubmitted(!submitted);
    console.log(submitted);
  };

  return (
    <div className={submitted ? 'card__thank' : 'card__init'}>
      {!submitted ?
        <Icon />
        :
        <ThankYou selected={selectRating} />
      }
      <h2>{displayContent.title}</h2>
      <p>{displayContent.description}</p>
      {!submitted &&
        <Buttons onclick={changeSelectRating} submit={changeStateSubmit} selected={selectRating} />
      }
    </div>
  );
}
