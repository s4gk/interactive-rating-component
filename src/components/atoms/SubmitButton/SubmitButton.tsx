import './SubmitButton.css';

interface submitButtonInterface {
  submit: () => void;
}

export const SubmitButton = ({ submit }: submitButtonInterface) => {
  return (
    <button className="submit_button" onClick={submit}>
      SUBMIT
    </button>
  )
}

