import React,{useState} from 'react';

const SignUpForm = () => {

    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();

    const item={
        name:name,
        email:email,
        password:password
    }

    async function SendData(e){
        e.preventDefault();

        fetch("http://localhost:8000/api/user/register", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
               },
            body: JSON.stringify(item)
         })
         .then((response) => response.json())
         .then((responseData) => {
            alert("Your Ad Has Been Posted")
            console.log(responseData);
            })
      }

    
    return (
        <>
           <div className="limiter">
         
         <div
             className="container-login100 "
             style={{ backgroundImage: 'url(images/High_resolution_wallpaper.jpg)' }}
         >
             <div className="col-lg-2 mb-3">
             <a href="/" className="getstarted">
              <i className=" p-r-10 fa fa-home"></i>
              &nbsp; HOME
              </a>
             </div>
            <div className="col-lg-2"></div>
             
          
             <div className="wrap-login100 p-l-55 p-r-55 p-t-35 p-b-14">
             <form className="login100-form validate-form">
                 <span className="login100-form-title p-b-29">Sign Up </span>
                 <div
                 className="wrap-input100 validate-input m-b-6"
                 data-validate="Username is reauired"
                 >
                 <span className="label-input100">Username</span>
                 <input
                     className="input100"
                     type="text"
                     name="username"
                     placeholder="Type your username"
                     onChange={(e)=>{setName(e.target.value)}}
                 />
                 <span className="focus-input100" data-symbol="" />
                 </div>

                 <div
                 className="wrap-input100 validate-input m-b-6"
                 data-validate="Username is reauired"
                 >
                 <span className="label-input100">Email</span>
                 <input
                     className="input100"
                     type="text"
                     name="username"
                     placeholder="Type your email"
                     onChange={(e)=>{setEmail(e.target.value)}}
                 />
                 <span className="focus-input100" data-symbol="" />
                 </div>

                 <div
                 className="wrap-input100 validate-input m-b-6"
                 data-validate="Password is required"
                 >
                 <span className="label-input100">Password</span>
                 <input
                     className="input100"
                     type="password"
                     name="pass"
                     placeholder="Type your password"
                     onChange={(e)=>{setPassword(e.target.value)}}
                 />
                 <span className="focus-input100" data-symbol="" />
                 </div>

                 {/* <div
                 className="wrap-input100 validate-input"
                 data-validate="Password is required"
                 >
                 <span className="label-input100">Repeat Password</span>
                 <input
                     className="input100"
                     type="password"
                     name="pass"
                     placeholder="Type your password"
                 />
                 <span className="focus-input100" data-symbol="" />
                 </div> */}
                 <div className="text-right p-t-8 p-b-31">
                 <a style={{textDecoration:'none'}} href="#">Forgot password?</a>
                 </div>
                 <div className="container-login100-form-btn">
                 <div className="wrap-login100-form-btn">
                     <div className="login100-form-bgbtn" />
                     <button onClick={SendData} className="login100-form-btn">SIGN UP</button>
                 </div>
                 </div>
                 {/* <div className="txt1 text-center p-t-54 p-b-20">
                 <span>Or Sign Up Using</span>
                 </div> */}
                 {/* <div className="flex-c-m">
                 <a href="#" className="login100-social-item bg1">
                     <i className="fa fa-facebook" />
                 </a>
                 <a href="#" className="login100-social-item bg2">
                     <i className="fa fa-twitter" />
                 </a>
                 <a href="#" className="login100-social-item bg3">
                     <i className="fa fa-google" />
                 </a>
                 </div> */}

                 <div className="flex-col-c p-t-40">
                 {/* <span className="txt1 p-b-17">Or Sign Up Using</span>
                 <a href="#" className="txt2">
                     Sign Up
                 </a> */}
                 <a href="/" className="getstarted">
                 <i className=" p-r-10 fa fa-home"></i>
                 &nbsp; HOME
                 </a>
                 </div>
                
                 
             </form>
             </div>
             <div className="col-lg-4"> </div>
         </div>
         </div>

        </>
    );
};

export default SignUpForm;