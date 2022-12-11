import { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';

const Change = () => {

    const [phone, setPhone] = useState(null)
    const [slot, setSlot] = useState()

      const GetDash = () => {
    const urli = process.env.REACT_APP_BASE_URL+`api/reader/list-of-users-for-tag?property_name=${phone}&tag=${slot}`;
    
  };
    return ( 
        <div>
            <h3 className='mb-4' > You can change the slot for your next month</h3>
            <PhoneInput className="mb-4"
      placeholder="Enter phone number"
      value={phone}
      onChange={setPhone}/>

     <select class="form-select mb-4" value={slot} onChange={(e) => setSlot(e.target.value)}>
           <option >Choose the Slot</option>
           <option >6-7am</option>
           <option >7-8am</option>
           <option >8-9am</option>
           <option >5-6pm</option>
          
        
        </select>

           { (slot==="Choose the Slot" || phone===null ) &&
    
      <div style={{display:"inline-block"}} >
        <button type="submit" disabled class=" btn btn-primary mb-5"  onClick={GetDash}>
          Submit
        </button>
      </div>
  
}
        {
  (slot!=="Choose the Slot" && phone!==null ) &&  <div style={{display:"inline-block"}} >
        <button type="submit" class=" btn btn-primary mb-5"  onClick={GetDash}>
          Submit
        </button>
      </div>
}
   
        </div>
     );
}
 
export default Change;