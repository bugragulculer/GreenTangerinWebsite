// Creating a input field for collecting name, email and address.
const Field = ({ label, id, type, placeholder, required, autoComplete, value, onChange}) => (
  <div className='checkout__field'>
    <label htmlFor={id} className='checkout__field__label'>
      {label}
    </label>
    <input className='checkout__field__input' id={id} type={type} placeholder={placeholder} required={required} autoComplete={autoComplete} value={value} onChange={onChange} />
  </div>
);

export default Field