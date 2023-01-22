import './SizeTable.scss';

const SizeTable = ({openTable, setOpenTable}) => {
  
    return (
        <div className='size-table'>
            
            <img onClick={()=> setOpenTable(false)} src="/icons/close-white.png" alt=""/>
            <div style={{height:'1px'}}></div>
            <div className='size-table__main'>
            <h1>Как выбрать размер?</h1>
            <div className='table-name'>
            <p>Вещь садет идеально на параметры:</p>
            <p>Размеры вещи</p>
            </div>
           
            <div className="size-tables-block">
            
           
            <div className="size-table-table ">
                    <div className='table-header row'> 
                    <span> Размер</span>
                     <span>Бюст<br/>(см) </span> 
                     <span>Талия<br/>(см)</span> 
                     <span>Бедра<br/>(см)</span> 
                     <span>Рост<br/>(см)</span>
                      </div>
                <div className='row'>
                    <span className='table-header'>XS</span>
                    <span>80 — 82</span>
                    <span>58 — 60</span>
                    <span>84 — 86</span>
                    <span>160 — 177</span>
                </div>

                <div className='row'>
                    <span className='table-header'>S</span>
                    <span>83 — 85</span>
                    <span>61 — 63</span>
                    <span>87 — 91</span>
                    <span>160 — 177</span>
                    </div>
                <div className='row'>
                    <span className='table-header'> M</span>
                    <span>86 — 88</span>
                    <span>64 — 67</span>
                    <span>91 — 96</span>
                    <span>160 — 177</span>
                </div>
                <div className='row'>
                    <span className='table-header'>L</span>
                    <span>89 — 92</span>
                    <span>68 — 72</span>
                    <span>97 — 102</span>
                    <span>160 — 177</span>
                    </div>

                </div>

                <div className="size-table-table ">
                <div className='table-header row'> 
                    <span> Размер</span>
                     <span>Длина<br/>(см) </span> 
                     <span>Грудь<br/>(см)</span> 
                     <span>Талия<br/>(см)</span> 
                     <span>Бедра<br/>(см)</span>
                     <span>Длина <br/>рукава</span>
                      </div>
                <div className='row'>
                    <span className='table-header'>XS</span>
                    <span>107</span>
                    <span>114</span>
                    <span>112</span>
                    <span>116</span>
                    <span>61</span>
                </div>

                <div className='row'>
                    <span className='table-header'>S</span>
                    <span>112</span>
                    <span>120</span>
                    <span>116</span>
                    <span>122</span>
                    <span>62</span>
                    </div>
                <div className='row'>
                    <span className='table-header'> M</span>
                    <span>115</span>
                    <span>124</span>
                    <span>122</span>
                    <span>126</span>
                    <span>63</span>
                </div>
                <div className='row'>
                    <span className='table-header'>L</span>
                    <span>118</span>
                    <span>128</span>
                    <span>126</span>
                    <span>130</span>
                    <span>63</span>
                    </div>

                </div>
          
             
            </div>
            </div>
            
            
        </div>
    );
};

export default SizeTable;