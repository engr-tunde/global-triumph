import { useFormikContext } from 'formik';
import React from 'react';

const SubmitButton = ({ title, className }) => {
  const { handleSubmit, isSubmitting } = useFormikContext();

  return (
    <button
      type="button"
      label={title}
      onClick={handleSubmit}
      className={className}
      disabled={isSubmitting ? true : false}
    >
      {title}
    </button>
  );
};

export default SubmitButton;
