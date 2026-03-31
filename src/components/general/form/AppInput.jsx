import { useState } from 'react';
import { useFormikContext } from 'formik';
import { Eye, EyeSlash } from 'react-bootstrap-icons';

const AppInput = ({
  name,
  placeholder,
  type = 'text',
  className,
  disabled = false,
  style,
  autoComplete,
  id,
  ...rest
}) => {
  const { errors, values, touched, handleBlur, handleChange } = useFormikContext();

  const value = values[name];
  const error = errors[name];
  const isInputTouched = touched[name];
  const [showPassword, setShowPassword] = useState(false);
  const inputId = id ?? name;

  if (type === 'password') {
    const inputType = showPassword ? 'text' : 'password';
    return (
      <div className="password-field">
        <input
          value={value}
          placeholder={placeholder}
          onChange={handleChange(name)}
          onBlur={handleBlur(name)}
          type={inputType}
          disabled={disabled}
          className={className}
          style={style}
          autoComplete={autoComplete ?? 'current-password'}
          id={inputId}
          name={name}
          {...rest}
        />
        <button
          type="button"
          className="password-field__toggle"
          onClick={() => setShowPassword((s) => !s)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          tabIndex={-1}
        >
          {showPassword ? <EyeSlash aria-hidden /> : <Eye aria-hidden />}
        </button>
        {error && isInputTouched ? <div className="error">{error}</div> : null}
      </div>
    );
  }

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
        style={style}
        autoComplete={autoComplete ?? 'off'}
        id={inputId}
        name={name}
        {...rest}
      />
      {error && isInputTouched ? <div className="error">{error}</div> : null}
    </>
  );
};

export default AppInput;
