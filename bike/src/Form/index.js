import React from 'react';
import ReviewForm from '../components/review/reviewForm';

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <ReviewForm />
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
