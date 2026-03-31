import { useFormikContext } from 'formik';

const AppSelectInput = ({
  name,
  placeholder,
  type = 'text',
  className,
  disabled = false,
  style,
  ...rest
}) => {
  const { errors, values, touched, handleBlur, handleChange } = useFormikContext();

  const value = values[name];
  const error = errors[name];
  const isInputTouched = touched[name];

  return (
    <>
      <select
        value={value}
        placeholder={placeholder}
        onChange={handleChange(name)}
        onBlur={handleBlur(name)}
        type={type}
        disabled={disabled}
        className={className}
        style={{ style }}
        autoComplete="off"
        {...rest}
      />
      {error && isInputTouched ? <div className="error">{error}</div> : null}
    </>
  );
};

export default AppSelectInput;
