import './BtnWatchAll.scss';

const BtnWatchAll = ({img, text, size = 'm'}) => {
    return (
        <div className="new-card-watchall">
        <img className={`new-card-watchall_bg  ${size}` } src={img} alt=""/>
   <span className="new-card-watchall_text">{text}</span> 
    </div>
    );
};

export default BtnWatchAll;