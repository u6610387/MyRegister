import React, { useState } from 'react';

const GENDER_OPTIONS = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Others", value: "Others" }
];

const HOBBY_OPTIONS = [
  { label: "Music", value: "Music" },
  { label: "Movies", value: "Movies" },
  { label: "Plastic Model", value: "Plastic Model" }
];

const ROLE_OPTIONS = ["General staff", "Developer", "System Analyst"];

const Register = () => {
  
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    gender: '',
    role: 'General staff'
  });

  
  const [hobbies, setHobbies] = useState([]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 
  const onHobbiesToggle = (event) => {
    const targetValue = event.target.value;
    const isChecked = event.target.checked;

    if (!isChecked) {
      setHobbies((prev) => prev.filter((item) => item !== targetValue));
    } else {
      setHobbies((prev) => [...prev, targetValue]);
    }
  };

  
  const valueStyle = { color: 'red' };

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h2>Registration Form</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        
        <input name="username" placeholder="Username" onChange={handleChange} />
        <input name="firstname" placeholder="Firstname" onChange={handleChange} />
        <input name="lastname" placeholder="Lastname" onChange={handleChange} />

        <div>
          <strong>Gender:</strong><br />
          {GENDER_OPTIONS.map((g) => (
            <label key={g.value} style={{ marginRight: '10px' }}>
              <input type="radio" name="gender" value={g.value} onChange={handleChange} />
              {g.label}
            </label>
          ))}
        </div>

        <div>
          <strong>Hobbies:</strong><br />
          {HOBBY_OPTIONS.map((h) => (
            <label key={h.value} style={{ marginRight: '10px' }}>
              <input type="checkbox" value={h.value} onChange={onHobbiesToggle} />
              {h.label}
            </label>
          ))}
        </div>

        <div>
          <strong>Apply Role:</strong><br />
          <select name="role" onChange={handleChange} value={formData.role}>
            {ROLE_OPTIONS.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>

      <hr style={{ margin: '30px 0' }} />

      <div style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '8px' }}>
        <h3>Submitted Information:</h3>
        <p><strong>Username:</strong> <span style={valueStyle}>{formData.username}</span></p>
        <p><strong>Firstname:</strong> <span style={valueStyle}>{formData.firstname}</span></p>
        <p><strong>Lastname:</strong> <span style={valueStyle}>{formData.lastname}</span></p>
        <p><strong>Gender:</strong> <span style={valueStyle}>{formData.gender}</span></p>
        <p><strong>Hobbies:</strong> <span style={valueStyle}>{hobbies.join(", ")}</span></p>
        <p><strong>Role:</strong> <span style={valueStyle}>{formData.role}</span></p>
      </div>
    </div>
  );
};

export default Register;