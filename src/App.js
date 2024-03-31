import { useState } from "react";

function App() {

  const [formData, setFormData]=useState({
    fname:"", lname:"", email:"", country:"India",
    streetAddress:"", city:"", state:"", postalCode:"",
    comments:false, candidate:false, offers:false, 
    pushNotifications:""
  });

  function changeHandler(event){
    const {name, value, checked, type} =event.target;

    setFormData( (prev)=> (
      {...prev, [name]:type==="checkbox" ? checked :value} 
      ));
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing the value of Form Data: ");
    console.log(formData);
  }

  return (
    <div  className="flex flex-col items-center">

      <form onSubmit={submitHandler}>
        <label htmlFor="fname">First name</label><br/>
        <input
          type="text" name="fname" id="fname" 
          placeholder="Parbhat" value={formData.fname}
          onChange={changeHandler}
          className="outline"
        />

        <br/>
        <label htmlFor="lname">Last name</label><br/>
        <input
          type="text" name="lname" id="lname" 
          placeholder="Singh" value={formData.lname}
          onChange={changeHandler}
          className="outline"
        />

        <br/>
        <label htmlFor="email">Email Address</label><br/>
        <input
          type="text" name="email" id="email" 
          placeholder="parbhatsingh.sr@gmail.com" value={formData.email}
          onChange={changeHandler}
          className="outline"
        />
        
        <br/>
        <label htmlFor="country">Country</label><br/>
        <select
          id="country" name="country" value={formData.country}
          onChange={changeHandler}
          className="outline"
        >
          <option value="India">India</option>
          <option value="United State">United State</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
        </select>

        <br/>
        <label htmlFor="streetAddress">Street Address</label><br/>
        <input
          type="text" name="streetAddress" id="streetAddress" 
          placeholder="B-25C" value={formData.streetAddress}
          onChange={changeHandler}
          className="outline"
        />

        <br/>
        <label htmlFor="city">City</label><br/>
        <input
          type="text" name="city" id="city" 
          placeholder="Saharanpur" value={formData.city}
          onChange={changeHandler}
          className="outline"
        />

        <br/>
        <label htmlFor="state">State / Province</label><br/>
        <input
          type="text" name="state" id="state" 
          placeholder="Uttar Pradesh" value={formData.state}
          onChange={changeHandler}
          className="outline"
        />

        <br/>
        <label htmlFor="postalCode">Zip / Postal Code</label><br/>
        <input
          type="text" name="postalCode" id="postalCode" 
          placeholder="247001" value={formData.postalCode}
          onChange={changeHandler}
          className="outline"
        />

        <br/><br/>
        <fieldset>
          <legend>By Email</legend>
            
            <div className="flex ">
              <input
                id="comments" name="comments" type="checkbox" checked={formData.comments}
                onChange={changeHandler}
              />
              <div>
                <label htmlFor="comments">Comments</label>
                <p>Get notified when someones posts a comments on a posting.</p>
              </div>
            </div>

            <div className="flex ">
              <input
                id="candidate" name="candidate" type="checkbox" checked={formData.candidate}
                onChange={changeHandler}
              />
              <div>
                <label htmlFor="candidate">Candidate</label>
                <p>Get notified when a candidate applies for a job.</p>
              </div>
            </div>

            <div className="flex ">
              <input
                id="offers" name="offers" type="checkbox" checked={formData.offers}
                onChange={changeHandler}
              />
              <div>
                <label htmlFor="offers">Offers</label>
                <p>Get notified when a candidate accepts and rejects an offer.</p>
              </div>
            </div>

        </fieldset>

        <br/>
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input
            type="radio" id="pushEverything" name="pushNotifications" value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Everything</label>

          <br/>
          <input
            type="radio" id="pushEmail" name="pushNotifications" value="Same as email"
            onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as email</label>

          <br/>
          <input
            type="radio" id="pushNothing" name="pushNotifications" value="No Push Notification"
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No Push Notification</label>
        </fieldset>


        <button 
        className="bg-blue-500 text-white font-bold rounded yp-2 px-4" 
        >Save</button>

      </form>
    </div>
  );
}

export default App;
