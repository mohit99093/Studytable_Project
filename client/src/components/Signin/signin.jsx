import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link as li } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions/actions";
import "./signin.scss";
function Copyright() {
  return (
    <Typography variant = "body2" align = "center">
      {"Copyright © "}
      <Link className = "white" href = "/">
        Studytable
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Signin(props) {
  //response state
  const [status, setStatus] = useState({});
  const [state, setstate]   = useState({
    email            : "",
    password         : "",
    emailAdd         : "",
    userotp          : "",
    realotp          : "",
    newPassword      : "",
    repeatnewPassword: ""
  });
  const [errorState, seterrorstate] = useState({
    email            : false,
    password         : false,
    emailAdd         : false,
    userotp          : false,
    realotp          : false,
    newPassword      : false,
    repeatnewPassword: false
  })
  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
    seterrorstate({...errorState, [e.target.name]:false})
  };
  let   msg           = status.message;
  const dispatch      = useDispatch();
  const [tab, setTab] = useState(1);

  console.log(msg);

  // LOGIN
  const handle_login = async (e) => {
    e.preventDefault();

    if (state.email === "")
     return  seterrorstate({ ...errorState, email: true })
    if (state.password === "")
     return  seterrorstate({...errorState, password:true})

    await fetch("/api/signin", {
      method : "POST",
      body   : JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res" + res);
        if (res.status === 201) {
          localStorage.setItem("idToken", res.idToken);
          localStorage.setItem("userId", res.userId);
          localStorage.setItem("userName", res.userName);
          localStorage.setItem("expireDate", new Date().getTime() + 7200000);
          //  let timer;
          //  if (timer) { clearTimeout(timer) }
          //  timer = setTimeout(() => dispatch(logout()), 7200000)
          dispatch({
            type    : actions.LOG_IN,
            idToken : res.idToken,
            userId  : res.userId,
            userName: res.userName,
          });
          setStatus({ status: 201, message: "Successfully Logged In!" });
          setTimeout(() => {
            props.history.push("/");
          }, 2000);
        }
        else
        {
           setStatus({ ...res }); 
          }
      });
  };

  // OTP SEND
  const handle_sendotp = (e) => {
    e.preventDefault();
    return fetch("/api/forgot", {
      method : "POST",
      body   : JSON.stringify({ email: state.emailAdd }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setStatus({ status: res.status, message: res.message });
        setstate({ ...state, realotp: res.otp });
        if (res.status === 201) setTab(3);
        console.log(res);
      })
      .catch((e) => console.log(e.message));
  };
  // VERIFY OTP
  const handle_verifyotp = (e) => {
    e.preventDefault();
    if (Number(state.userotp.trim()) === state.realotp) {
      setStatus({ status: "", message: "" });
      setTab(4);
    } else {
      setStatus({ status: 401, message: "Type correct OTP" });
      alert(
        `userotp : ${typeof state.userotp}     realotp : ${typeof state.realotp}`
      );
    }
  };
  // Change Password
  const handle_changePassword = (e) => {
    e.preventDefault();
    setTab(5)
  };
  // Repeat change password
  const handle_repeatchangePassword = async (e) => {
    e.preventDefault();

    if (state.newPassword !== state.repeatnewPassword)
    {
      setStatus({ status: 401, message: "Password must same" })
      return
    }

    return await fetch("/api/changePassword", {
      method: "POST",
      body  : JSON.stringify({
        email      : state.emailAdd,
        newPassword: state.newPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setstate({ ...state, realotp: res.otp });
        console.log(res);
        setStatus(res);
         handle_login(e)
      })
      .catch((e) => console.log(e.message));
  };

  const forgot = (
    <form className = "form" onSubmit = {handle_sendotp}>
      <TextField
        margin = "normal"
        
        label = "Email Address"
        name  = "emailAdd"
        autoFocus
        value      = {state.emailAdd}
        inputProps = {{ className: "bold" }}
        onChange   = {handleChange}
      />
      <div>
        <Button
          variant = "contained"
          color   = "primary"
          
          type = "submit"
        >
          Send OTP
        </Button>
      </div>
      <div className = "status">
      <p   className = {status.status === 201 ? "green" : "red"}> {msg} </p>
      </div>
    </form>
  );

  const enterOtp = (
    <form className = "form" onSubmit = {handle_verifyotp}>
      <TextField
        margin = "normal"
        
        label = "Enter Otp"
        name  = "userotp"
        autoFocus
        value      = {state.userotp}
        inputProps = {{ className: "bold" }}
        onChange   = {handleChange}
      />
      <div>
        <Button
          variant = "contained"
          color   = "primary"
          
          type = "submit"
        >
          Verify OTP
        </Button>
        <div className = "status">
        <p   className = {status.status === 201 ? "green" : "red"}> {msg} </p>
        </div>
      </div>
    </form>
  );

  const changePassword = (
    <form className = "form" onSubmit = {handle_changePassword}>
      <TextField
        autoFocus
        
        margin     = "normal"
        label      = "change password"
        name       = "newPassword"
        type       = "password"
        value      = {state.newPassword}
        inputProps = {{ className: "bold" }}
        onChange   = {handleChange}
      />
      <div>
        <Button
          variant = "contained"
          color   = "primary"
          type    = "submit"
        >
          Next
        </Button>
      </div>
      <div className = "status">
      <p   className = {status.status === 201 ? "green" : "red"}> {msg} </p>
      </div>
    </form>
  );

  const repeatchangePassword = (
    <form className = "form" onSubmit = {handle_repeatchangePassword}>
      <TextField
        autoFocus
        
        margin     = "normal"
        label      = "repeat new password"
        name       = "repeatnewPassword"
        type       = "password"
        value      = {state.repeatnewPassword}
        inputProps = {{ className: "bold" }}
        onChange   = {handleChange}
      />
      <div>
        <Button
          variant = "contained"
          color   = "primary"
          type    = "submit"
        >
           Change Password
        </Button>
      </div>
      <div className = "status">
      <p   className = {status.status === 201 ? "green" : "red"}> {msg} </p>
      </div>
    </form>
  );

  return (
    <Grid container component = "main" className = "root-1 ">
      <CssBaseline />
      <Grid item xs   = {12} md = {8} className = "">
      <div  className = "heads">
      <div  className = "reward">
            STUDY<span>table</span>
          </div>
          <div className = "sub">Care a smile</div>
        </div>
      </Grid>
      <Grid item xs   = {12} md = {4} elevation = {6} square>
      <div  className = "paper">
          {tab === 1 ? (
            <form className = "form" onSubmit = {handle_login}>
              <TextField
                margin = "normal"
                error={true}
                label = "Email Address"
                name="email"
                error={errorState.email}
                autoFocus
                inputProps = {{ className: "bold" }}
                onChange   = {handleChange}
              />
              <TextField
                variant = "standard"
                margin  = "normal"
                error={errorState.password}
                name     = "password"
                label    = "Password"
                type     = "password"
                onChange = {handleChange}
              />
              <Grid container className = "forgot">
                <Grid item xs>
                  <Link
                    href      = "#"
                    variant   = "body2"
                    className = "Link bold white"
                    onClick   = {() => setTab(2)}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href      = "#"
                    variant   = "body2"
                    className = "Link bold white"
                    component = {li}
                    to        = "/Register"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>

              <div className = "login-button-div">
                <Button
                  variant = "contained"
                  color   = "primary"
                  type = "submit"
                >
                  Log In
                </Button>
              </div>

              <div className = "status">
              <p   className = {status.status === 201 ? "green" : "red"}>
                  {msg}
                </p>
              </div>
            </form>
          ) : tab === 2 ? (
            forgot
          ) : tab === 3 ? (
            enterOtp
          ) : tab === 4 ? (
            changePassword
          ) : tab === 5 ? (
            repeatchangePassword        
          ) : null }
        </div>
      </Grid>
    </Grid>
  );
}
