import React, {useEffect,useState} from 'react'
import shivapic from "../images/shiva.jpg";
import axios from "axios";
import { useNavigate} from 'react-router-dom';


const bt =  {border: '0px solid #eee',
  color: '#460B13',
  fontFamily:'Apple Chancery, cursive',
  backgroundColor: '#fff',
  paddingLeft: '80px'
}
const btl =  {
  color: '#460B13',
  fontFamily:'Gill Sans, sans-serif',
  paddingLeft: '80px'
}
const cont = {
   maxWidth: '90%',
   //maxHeight: '100%',
   marginBottom: '30px',
   paddingBottom: '10px'
 };

 

const About = () => {

   // const submitarray =()=>{
   //    navigate("/reporting")
   //    // axios.post("http://localhost:8080/consumerinfo",lineman )
   //    // .then( res => {
   //    //     console.log(res.data);
          
   //    // })
   //  }
     const navigate = useNavigate(); 

//    const callAboutPage = async () =>{

//       try {
//          const res = await fetch('/about', {
//             method: "GET",
//             headers: {
//                Accept: "application/json",
//                "Content-Type":"application.json"
//             },
//             credentials:"include"
//          });

//          const data = await res.json();
//          console.log(data);
         
//           if(!res.status === 200){
//             const error = new Error(res.error);
//             throw error;
//           }

//       } catch (err) {
//          console.log(err);
//          navigate('/about');
//       }
//    }

//  useEffect(() => {
//      callAboutPage();
//   }, []);

 const [users, setUser] = useState([]);
 const [user1, setUser1] = useState([]);
 const [user2, setUser2] = useState([]);

useEffect(() => {
  loadUser1();
  loadUsers();
  loadUser2();
}, []);

const loadUsers = async () => {
  const result = await axios.get("http://localhost:8080/fetchlist6");
  // console.log(result)
  // console.log(result.data.reverse())
  setUser(result.data);
};

const loadUser2 = async () => {
  const result = await axios.get("http://localhost:8080/fetchlist7");
  // console.log(result)
  // console.log(result.data.reverse())
  setUser2(result.data);
};

const loadUser1 = async () => {
   const result = await axios.get("http://localhost:8080/fetchlist5");
   // console.log(result);
   // console.log(result.data.reverse())
   setUser1(result.data);
 };

  return (
    <>
      <div className='container emp-profile mt-5' style={cont}>
             <form method='GET'>
                   <div className='row'>
                        <div className='col-md-2'>
                           <div className='profile-img' >
                           <img src={shivapic} alt="pic" />
                           </div>
                        </div>

              <div className='col-md-10'>
                      <div className='profile-head'><br/>
                           <h5>Manish Kumar</h5>
                          <h6>Assistant Engineer</h6>
                            <br/>
                          <ul className='nav nav-tabs' role='tablist'>
                            
                            <li  className= "nav-item">
                              <a className='nav-link active'  id='home-tab'  data-toggle='tab'  role='tab'  href='#home'>Profile </a>
                            </li>

                            <li className= "nav-item">
                             <a className='nav-link '  id='home-tab'  data-toggle='tab'  role='tab'  href='#profile'>Hierarchy</a>
                            </li>
                            
                            <li className= "nav-item">
                             <a className='nav-link '  id='home-tab'  data-toggle='tab'  role='tab'  href='#pending'>Pending Work</a>
                            </li>
                            <li className= "nav-item">
                             <a className='nav-link '  id='home-tab'  data-toggle='tab'  role='tab'  href='#complete'>Completed Work</a>
                            </li>
                            <li className= "nav-item">
                             <a className='nav-link '  id='home-tab'  data-toggle='tab'  role='tab'  href='#assign'>Assign Work</a>
                            </li>
                            <li className= "nav-item">
                             <a className='nav-link '  id='home-tab'  data-toggle='tab'  role='tab'  href='#report'>Report</a>
                            </li>
                          </ul>
                
                      </div>
              
                

           <div className='col-md-2' ><br/>
              {/* <input type='submit' className='profile-edit-btn btn btn-primary' name='btnAddMore' value='Edit Profile' ></input> */}
           </div>
           

         

          
            
          
               
              <div className='col-md-8 pl-5 about-info' >
                 <div className='tab-content profile-tab' id='myTabContent' >
                  
                   <div className='tab-pane fade show active' id='home' role='tabpanel'  area-aria-labelledby='home-tab'>
                  <br/> 
                   <div className='row' >
                         <div className='col-md-6' >
                            <label >User ID </label>
                         </div>
                          <div className='col-md-6' >
                            <p>6454456154</p>
                         </div>
                         <div className='col-md-6' >
                            <label >Name </label>
                         </div>
                          <div className='col-md-6' >
                            <p>Manish Kumar</p>
                         </div>
                         <div className='col-md-6' >
                            <label > Email </label>
                         </div>
                          <div className='col-md-6' >
                            <p>Manish@gmail.com</p>
                         </div>
                         <div className='col-md-6' >
                            <label > Phone </label>
                         </div>
                          <div className='col-md-6' >
                            <p>9556211622</p>
                         </div>
                      </div>
                   </div>
                   <div className='tab-pane fade show active' id='profile' role='tabpanel'  area-aria-labelledby='profile-tab'>
                   <br/><div className='row' >
                         <div className='col-md-6' >
                            <label > Reporting Officer </label>
                         </div>
                          <div className='col-md-6' >
                          <table>
                          <tr><th>Name</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<th>Mobile</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<th>Designation</th></tr>
                          <tr><td>Vaibhav Chaudhary</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td>8967685000</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td>EE</td></tr>
                         </table>
                         </div>     
                         <br/>        <br/>         
                        <div className='col-md-6' >
                            <label > Subordinate List : </label>
                         </div>
                          <div className='col-md-6' >
                          <table>
                          <tr><th>Name</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<th>Mobile</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<th>Designation</th></tr>
                          <tr><td>Shreya Ghosal</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td>9867685089</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td>JE</td></tr>
                          <tr><td>Ramesh Singh</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td>7867685080</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td>JE</td></tr>
                         </table>
                         </div>
                         <div className='col-md-6' >
                            <label > </label>
                         </div>
                         
                         
                      </div>
                   </div>



      <div className='tab-pane fade show active' id='complete' role='tabpanel'  area-aria-labelledby='complete-tab'>
      <br/>
      <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
           
              <th scope="col">Work Details</th>
             
              <th scope="col">Work Status</th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user1.map((user1, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
              
                <td>{user1.Consumername}</td>
                
                <td>{user1.Workstatus}</td>
                <td>
                  <button
                    class="btn btn-warning">
                   
                    Mark as Undone
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
         
         </div> 



         <div className='tab-pane fade show active' id='pending' role='tabpanel'  area-aria-labelledby='pending-tab'>
         <br/><div className="container">
          <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
           
              <th scope="col">Consumername</th>
             
              <th scope="col">Work Status</th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                
                <td>{user.Consumername}</td>
               
                <td>{user.Workstatus}</td>
                <td>
                  <button
                    class="btn btn-success">
                   
                    Mark as Done
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          </div>
         </div>


         <div className='tab-pane fade show active' id='assign' role='tabpanel'  area-aria-labelledby='assign-tab'>
         <br/> <div className='row' >
                      <form action="/action_page.php">
  
  <label for="lname">Assign to:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <select>
                    <option value="0">Select Subordinate</option>
                    <option value="lineman2">Shreya Ghosal</option>
                    <option value="lineman3">Ramesh Singh</option>
                   
                  </select><br/><br/>
                  <label for="w3review">Work Details:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <textarea id="w3review" name="w3review" rows="2" cols="50">Assign work here...</textarea>
  <br/> <br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <input type="submit" value="Submit"/>
  
</form>
                      </div>
                   </div>




                   <div className='tab-pane fade show active' id='report' role='tabpanel'  area-aria-labelledby='report-tab'>
                   <br/>
      <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
           
              <th scope="col">Work Details</th>
              <th scope="col">Assigned to</th>
             
              <th scope="col">Work Status</th>
              
             
            </tr>
          </thead>
          <tbody>
            {user2.map((user2, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
              
                <td>{user2.Consumername}</td>
                <td>{user2.Address}</td>
                <td>{user2.Workstatus}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
         
         </div> 



                 </div>
              </div>

              </div >
              </div>
        </form>
      </div>
    </>
  )
}

export default About
