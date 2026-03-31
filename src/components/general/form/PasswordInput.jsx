import { useId, useState } from 'react';
import { Eye, EyeSlash } from 'react-bootstrap-icons';

/**
 * Standalone password field with visibility toggle (Formik-agnostic).
 */
const PasswordInput = ({
  id: idProp,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  autoComplete = 'new-password',
}) => {
  const uid = useId();
  const id = idProp ?? uid;
  const [visible, setVisible] = useState(false);

  return (
    <div className="password-field">
      <input
        id={id}
        name={name}
        type={visible ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      <button
        type="button"
        className="password-field__toggle"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? 'Hide password' : 'Show password'}
        tabIndex={-1}
      >
        {visible ? <EyeSlash aria-hidden /> : <Eye aria-hidden />}
      </button>
    </div>
  );
};

export default PasswordInput;
