import './Radio.scss';

const Radio = ({children, id, htmlFor, name, oneLine= false, value, onChange}) => {
    return (
        <div className={oneLine ? "form_radio radio-center " : "form_radio"}>
        <input id={id} type="radio" name={name} value={value} onChange={onChange} />
       <label htmlFor={htmlFor}>{children} </label>
   </div>
    );
};

export default Radio;