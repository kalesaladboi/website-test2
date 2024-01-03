import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({                                     
  baseURL: 'http//:127.0.0.1:8000'
});

export default function Register() {

    const [currentUser, setCurrentUser] = useState();
    // const [registrationToggle, setRegistrationToggle] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        client.get("/api/user")
        .then(function(res) {
          setCurrentUser(true);
        })
        .catch(function(error) {
          setCurrentUser(false);
        });
      }, []);
    
    //   function update_form_btn() {
    //     if (registrationToggle) {
    //       document.getElementById("form_btn").innerHTML = "Register";
    //       setRegistrationToggle(false);
    //     } else {
    //       document.getElementById("form_btn").innerHTML = "Log in";
    //       setRegistrationToggle(true);
    //     }
    //   }
    
      function submitRegistration(e) {
        e.preventDefault();
        client.post(
          "/api/register",
          {
            email: email,
            username: username,
            password: password
          }
        ).then(function(res) {
          client.post(
            "/api/login",
            {
              email: email,
              password: password
            }
          ).then(function(res) {
            setCurrentUser(true);
          });
        });
      }

    return <div>
        <section className="cyberpunk both" style={{maxWidth: 600, margin: 'auto'}}>
            <form onSubmit={e => submitRegistration(e)} style={{maxWidth: 500, maxHeight:800, margin: 'auto'}}>
                <h4 className="cyberpunk glitched">Email</h4>
                <input className="cyberpunk" type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                <h4 className="cyberpunk glitched" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)}>Username</h4>
                <input className="cyberpunk" type="text" />
                <h4 className="cyberpunk glitched" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)}>Password</h4>
                <input className="cyberpunk" type="password" />
                <button className="cyberpunk blue" variant="primary" type="submit">Submit_</button>
            </form>
        </section>
    </div>
}