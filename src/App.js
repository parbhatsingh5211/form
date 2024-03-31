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
    <div  className="flex flex-col items-center ">
      <form onSubmit={submitHandler}
        className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-[600px] mt-6 ">
        
        <label htmlFor="fname"
        className=" text-gray-700 text-sm font-medium mb-2">First name</label><br/>
        <input
          type="text" name="fname" id="fname" 
          placeholder="Parbhat" value={formData.fname}
          onChange={changeHandler}
          className="shadow appearance-none border border-red-300 rounded w-full mt-2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />

        <br/>
        <label htmlFor="lname"
        className=" text-gray-700 text-sm font-medium mb-2"
        >Last name</label><br/>
        <input
          type="text" name="lname" id="lname" 
          placeholder="Singh" value={formData.lname}
          onChange={changeHandler}
          className="shadow appearance-none border border-red-300 rounded w-full mt-2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />

        <br/>
        <label htmlFor="email"
        className=" text-gray-700 text-sm font-medium mb-2"
        >Email Address</label><br/>
        <input
          type="text" name="email" id="email" 
          placeholder="parbhatsingh.sr@gmail.com" value={formData.email}
          onChange={changeHandler}
          className="shadow appearance-none border border-red-300 rounded w-full mt-2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
        
        <br/>
        <label htmlFor="country"
        className=" text-gray-700 text-sm font-medium mb-2"
        >Country</label><br/>
        <select
          id="country" name="country" value={formData.country}
          onChange={changeHandler}
          className="shadow appearance-none border border-red-300 rounded w-full mt-2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="India">India</option>
          <option value="United State">United State</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
        </select>

        <br/>
        <label htmlFor="streetAddress"
        className=" text-gray-700 text-sm font-medium mb-2"
        >Street Address</label><br/>
        <input
          type="text" name="streetAddress" id="streetAddress" 
          placeholder="B-25C" value={formData.streetAddress}
          onChange={changeHandler}
          className="shadow appearance-none border border-red-300 rounded w-full mt-2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />

        <br/>
        <label htmlFor="city"
        className=" text-gray-700 text-sm font-medium mb-2"
        >City</label><br/>
        <input
          type="text" name="city" id="city" 
          placeholder="Saharanpur" value={formData.city}
          onChange={changeHandler}
          className="shadow appearance-none border border-red-300 rounded w-full mt-2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />

        <br/>
        <label htmlFor="state"
        className=" text-gray-700 text-sm font-medium mb-2"
        >State / Province</label><br/>
        <input
          type="text" name="state" id="state" 
          placeholder="Uttar Pradesh" value={formData.state}
          onChange={changeHandler}
          className="shadow appearance-none border border-red-300 rounded w-full mt-2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />

        <br/>
        <label htmlFor="postalCode"
        className=" text-gray-700 text-sm font-medium mb-2"
        >Zip / Postal Code</label><br/>
        <input
          type="text" name="postalCode" id="postalCode" 
          placeholder="247001" value={formData.postalCode}
          onChange={changeHandler}
          className="shadow appearance-none border border-red-300 rounded w-full mt-2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />

        <br/><br/>
        <fieldset>
          <legend className=" text-gray-700 text-sm font-medium mb-2"
          >By Email</legend>
            
            <div className="flex">
              <input
                id="comments" name="comments" type="checkbox" checked={formData.comments}
                onChange={changeHandler}
                className="mb-4 mr-2"
              />
              <div >
                <label htmlFor="comments"
                className=" text-gray-700 text-sm font-medium "
                >Comments</label>
                <p
                className=" text-gray-500 text-sm font-medium" >Get notified when someones posts a comments on a posting.</p>
              </div>
            </div>

            <div className="flex ">
              <input
                id="candidate" name="candidate" type="checkbox" checked={formData.candidate}
                onChange={changeHandler}
                className="mb-4 mr-2"
              />
              <div>
                <label htmlFor="candidate"
                className=" text-gray-700 text-sm font-medium "
                >Candidate</label>
                <p 
                className=" text-gray-500 text-sm font-medium" >Get notified when a candidate applies for a job.</p>
              </div>
            </div>

            <div className="flex ">
              <input
                id="offers" name="offers" type="checkbox" checked={formData.offers}
                onChange={changeHandler}
                className="mb-4 mr-2"
              />
              <div>
                <label htmlFor="offers"
                className=" text-gray-700 text-sm font-medium "
                >Offers</label>
                <p
                className=" text-gray-500 text-sm font-medium" >Get notified when a candidate accepts and rejects an offer.</p>
              </div>
            </div>

        </fieldset>

        <br/>
        <fieldset>
          <legend className=" text-gray-700 text-sm font-medium mb-1"
          >Push Notifications</legend>
          <p
          className=" text-gray-500 text-sm font-medium" >These are delivered via SMS to your mobile phone.</p>

          <input
            type="radio" id="pushEverything" name="pushNotifications" value="Everything"
            onChange={changeHandler}
            className="mr-2 mt-4"
          />
          <label htmlFor="pushEverything"
          className=" text-gray-700 text-sm font-medium "
          >Everything</label>

          <br/>
          <input
            type="radio" id="pushEmail" name="pushNotifications" value="Same as email"
            onChange={changeHandler}
            className="mr-2"
          />
          <label htmlFor="pushEmail"
          className=" text-gray-700 text-sm font-medium mb-2"
          >Same as email</label>

          <br/>
          <input
            type="radio" id="pushNothing" name="pushNotifications" value="No Push Notification"
            onChange={changeHandler}
            className="mr-2"
          />
          <label htmlFor="pushNothing"
          className=" text-gray-700 text-sm font-medium mb-2"
          >No Push Notification</label>
        </fieldset>


        <button 
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-base px-7 py-1.5 text-center mt-5" 
        >Save</button>

      </form>
    </div>
  );
}

export default App;
