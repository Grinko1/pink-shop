import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import BtnWatchAll from '../../Components/BtnWatchAll/BtnWatchAll';
import CartItems from '../../Components/CartItems/CartItems';
import './Order.scss';
import InputMask from 'react-input-mask';
import { useEffect, useState } from 'react';
import Radio from '../../Components/Radio/Radio';


function PhoneInput(props) {
  return (
    <InputMask 
      mask='(+7) 999 999 99 99' 
      value={props.value} 
      onChange={props.onChange}
      placeholder='+7 (___) ___-__-__'>
        
    </InputMask>
  );
}


const Order = () => {
    const navigate = useNavigate()
    const {cartTotalAmount, cartItems} = useSelector(state=>state.cartItems)
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [order, setOrder] = useState('');
    const [pay, setPay] = useState('');
    const [nextStep, setNextStep] = useState(false) 
    const [focused, setFocused] = useState(false)
    const [isError, setIsErrorMsg] = useState(false)

    const handleInputPhone = ({ target: { value } }) => setPhone(value);
    const handleInputName = ({ target: { value } }) => setName(value);
    const handleInputLastName = ({ target: { value } }) => setLastName(value);
    const handleInputEmail= ({ target: { value } }) => setEmail(value);
    const handleChangeOrder = e => {setOrder(e.target.value)};
    const handleChangePay = e => {setPay(e.target.value);};
    const handleFocus = () => {setFocused(true)}

    useEffect(() =>{
        if(order === ''  ||  pay === '' || name === '' || lastName === '' || phone === '' || email === '' ){

            setNextStep(false)

        } else{
   
            setNextStep(true)
        }
     
    },[name, lastName, phone, email, pay, order])

   useEffect(() => {
       if(focused === true){
        setIsErrorMsg(true)
       }
   },[focused])

      const handleCheckForm = () => {
            if(nextStep === true){
                navigate('/thanks-for-order')
            }
    }
  

    return (
        <div className='order'>
            <div className="order__container">
                <div className="order-block" >
                    <div className="first-step step">
                        <div className="step-img">
                            <img src="/icons/first-step.png" alt=""/>
                        </div>
                        <div className="first-step-right step-info">
                            <label className='first-step-label'>
                              <input type="text" placeholder='??????' 
                                required   value={name} 
                                onChange={handleInputName}
                                onBlur={handleFocus}
                                focused={focused.toString()}  
                                />
                            </label>
                            <label className='first-step-label'>
                              <input type="text" 
                              placeholder='??????????????' required 
                              value={lastName} 
                              onChange={handleInputLastName}
                              onBlur={handleFocus}
                              focused={focused.toString()}
                              />
                            </label>
                           
                            <label className='first-step-label'>
                            <PhoneInput 
                                value={phone} 
                                onChange={handleInputPhone}>      
                            </PhoneInput>
                            </label>
                            <label className='first-step-label'>
                              <input type="email" 
                              placeholder='E-mail' 
                              required value={email} 
                              onChange={handleInputEmail}
                              onBlur={handleFocus}
                              focused={focused.toString()}/>
                            </label>
                        </div>
                    </div>
                    <div className="second-step step">
                     <div className="step-img">
                            <img src="/icons/second-step.png" alt=""/>
                        </div>
                        <div className="second-step-right step-info">
                          
                            <Radio id='radio-1' htmlFor='radio-1' name='order' value='radio-1' onChange={handleChangeOrder} >
                            ???????????????? ?? ?????????????????? ???????????????
                                <br/> <span className='pink-link'>???????????????? ?????????????? ????</span>
                            </Radio>
                            <Radio id='radio-2' htmlFor='radio-2' name='order' value='radio-2' onChange={handleChangeOrder} >
                            ???????????????????? ???????????????? ??????????????? 
                                <br/> <span className='pink-link'>???????????????? ?????????????? ????</span>
                            </Radio>
                            <Radio id='radio-3' htmlFor='radio-3' name='order' value='radio-3' onChange={handleChangeOrder} >
                            ?????????????????????????? ?????????????????????
                                <br/> <span className='pink-link'>???????????????? ?????????????? ??????????</span>
                            </Radio>
                            <Radio id='radio-4' htmlFor='radio-4' name='order' value='radio-4' onChange={handleChangeOrder}>
                            ?????????????????? ???????????????? ????????????????
                                 ???  <br/> <span className='pink-link'>??????????????????</span>
                            </Radio>
                            <p className='second-step-adress'>??.????????,  ????. ???????????? ??????, 37 <br/>
                                ?????????????????? ?? 11:00 ???? 21:00</p>
                                <textarea className='second-step-textarea' name="" id="" cols="40" rows="5" placeholder='?????????????????????? ?? ????????????'></textarea>


                            
                            
                        </div>
                    </div>
                    <div className="third-step step">
                        <div className="step-img">
                            <img src="/icons/third-step.png" alt=""/>
                        </div>
                        <div className="second-step-right step-info">
                           
                            <div className="second-step-right step-info">
                                <Radio id='card' htmlFor='card' name='cash' oneLine value='card' onChange={handleChangePay} >
                                ?????????????? Visa / MasterCard
                                </Radio>
                                </div>
                                <div className="second-step-right step-info">
                                <Radio id='cash' htmlFor='cash' name='cash' oneLine value='cash' onChange={handleChangePay} >
                                ???????????????? ?????? ?????????????????? 
                                </Radio>
                                </div>

                          

                            <label className='first-step-label'>
                              <input type="text" placeholder='?????????? ??????????  boorivasis'/>
                            </label>
                            <div className="form_radio small-radio ">
	                             <input id="radio-7" type="radio" name="agree"  />
	                            <label htmlFor="radio-7">?? ?????????????? ?? ????????????, ???? ???????? ?????????? <br/> ???? ?????????????????????? </label>
                            </div>
 
                            
                            
                        </div>
                        
                    </div>
                    <div className={isError ? "uncorrect" : "hidden"}>
                        ?????????????????? ?????? ????????!
                    </div>
                    <div className="order-btn" onClick={handleCheckForm} >
                    
                        <BtnWatchAll img={'/icons/watch-all.png'} text={'?????????????????????? ??????????'} size={'l'} disabled={nextStep ? false : true}   />
                    
             
                    </div>

                </div>
                <div className="order-cart-block">

                    <CartItems/>
                   { 
                   cartItems.length ? 
                   <>
                   <div className="order-cart-subtotal">
                        
                        <p> <span>C???????? ????????????:</span>  <span className="order-cart-subtotal__price" >{cartTotalAmount}</span></p>
                        <p> <span>?????????????????? ????????????????:</span> <span className="order-cart-subtotal__price" >??????????????????</span> </p>
                    </div>
                    <div className="order-cart-total">
                    ?????????? ????????????: . . . . . . <span> {cartTotalAmount} &#8381;</span> 
                    </div>
                    </>
                :
                <>
                 <div className='empty-cart'>
              <img src="/icons/emptycart.png" alt=""/>
              <p>???????? ?????????????? ??????????, ???? ?????? ??????????????
                 <br/> ???? ???????????? ??????????????????:)</p>

            </div>
            <Link to='/'   >
            <BtnWatchAll img={'/icons/watch-all.png'} text={'???? ??????????????????'} size={'l'}/>
            </Link>
                </>    
                }
               
                </div>
            </div>
            
        </div>
    );
};

export default Order;