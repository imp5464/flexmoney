import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
function  Apply() 
 {
  const [age, setAge] = useState(null);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [flag, setFlag] = useState(false);
  const [phone, setPhone] = useState(null)
  const [slot, setSlot] = useState()


  const GetDash = () => {
    const urli = process.env.REACT_APP_BASE_URL+`api/reader/list-of-users-for-tag?property_name=${name}&tag=${age}`;
    setUrl(urli);
    setFlag(true);
  };
  return (
    <div>
       <h4 class="mb-5">
        Please fill up the necessary details for the enrollment
      </h4>
   
       <div class="form-group mb-4">
  <input mb-4 type="text" placeholder="Name" class="form-control" id="usr"   value={name}
            onChange={(e) => setName(e.target.value)}
          /> 
</div>
<div class="form-group mb-4">
  <input  placeholder="Age" class="form-control" id="pwd"  value={age}
            onChange={(e) => setAge(e.target.value)} 
            />
</div>
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
             { (slot==="Choose the Slot" || phone===null || name==="" || age==null || age<18 || age>65 ) &&
    
      <div style={{display:"inline-block"}} >
        <button type="submit" disabled class=" btn btn-primary mb-5"  onClick={GetDash}>
          Submit
        </button>
      </div>
  
}
        {
  (slot!=="Choose the Slot" && phone!==null && name!="" && age>=18 && age<=65) &&  <div style={{display:"inline-block"}} >
        <button type="submit" class=" btn btn-primary mb-5"  onClick={GetDash}>
          Submit
        </button>
      </div>
}

</div>







      );
};
export default Apply
 
     

     


