import { useFormikContext } from 'formik';

const AppInput = ({
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
      <input
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

export default AppInput;
