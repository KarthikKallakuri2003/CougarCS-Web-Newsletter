import { useState } from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap';
import logo from '../src/logo.jpg'


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send a POST request to the server-side API
    const response = await fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    // Clear the form fields
    setName('');
    setEmail('');
  };
  

  return (
    <main>
      <Navbar bg="light">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>
        </Navbar>

        

        <div className="row content">
          <div className='col-6 d-flex left-panel'>
            <div className='panel-content'>
              <h1 className='py-2'>CougarCS Newsletter</h1>
              <div id="News_desc">
                <h5>What is the CougarCS Newsletter? We are glad you asked!  The cougarCS Newsletters are  emails
                  members and students <br></br> who signed up to get one recieve on a weekly basis that give the latest updates. The
                  Newsletters inform you of all <br></br>the CS and Tech news the past week, upcoming CS and CougarCS events and more. Why should I sign up for
                  the Newsletter? So you can keep updated on the latest news about what is happening <br></br>with our club, tech in UH, and tech in general
                </h5>
              </div>
            </div>
          </div>

          <div className='col-6 d-flex justify-content-center align-items-center my-auto'>
            <div className='signup'>
              <h1 className='text-center'>Sign Up</h1>
              <form onSubmit={handleSubmit}>
                  <div className='d-block mt-3'>
                    <label htmlFor="username" className='d-block'>
                      Name
                    </label>
                    <input 
                        type="text" 
                        id="username"
                        name="username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-100 input-field"
                        />
                  </div>
                  <div className='mt-3'>
                    <label htmlFor="email" className='d-block font-weight-bold'>
                        Email
                    </label>
                    <input 
                        type="text" 
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-100 input-field"
                        />
                  </div>
                  <input type="submit" value="Register" id="submit-btn"/>
              </form>
            </div>
            
          </div>
        </div>
      <div className="image"></div>
    </main>
  )
}

export default App;