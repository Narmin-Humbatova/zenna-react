import { useState } from 'react';
import './Updates.css'

function Updates() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    console.log(e);
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
  };


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div className="updates">
        <div className="container py-5 d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="updates-text col-12 col-md-6">
              <h5 className='text-uppercase' style={{ padding: '10px'}}>Get the latest updates</h5>
            </div>
            <form onSubmit={handleSubmit} className="d-flex col-12 col-md-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={{
                  padding: '10px',
                  fontSize: '16px',
                  marginRight: '10px'
                }}
              />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Updates;
