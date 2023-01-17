import './Checkbox.scss';

const Checkbox = ({children, ...props}) => {
    return (
        <label className="checkbox-other">
                      <input type="checkbox" {...props}  />
                      <span>
                          {children}
                      </span>
                    </label>
    );
};

export default Checkbox;