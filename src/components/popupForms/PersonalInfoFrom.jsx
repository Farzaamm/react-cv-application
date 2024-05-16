import {React, useState, useId} from 'react';
import { X } from 'lucide-react';

function PersonalInfoFrom({ onSubmit, onClose, initialData }) {
    const id = useId();

    const [personalFormData, setPersonalInfo] = useState(initialData || {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        linkedin: "",
        image: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo({ ...personalFormData, [name]: value });
    }

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPersonalInfo({ ...personalFormData, image: reader.result });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(personalFormData);
        onClose();
    }

  return (
    <div className="backdrop">
      <form className="popup" onSubmit={handleSubmit}>
        <button className="close-btn" onClick={onClose}><X size={20} /></button>
        <div className='profile-image-container'>
          <label htmlFor="profileImage">
              <img 
                  className='formImg' 
                  src={personalFormData.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png" }
                  alt="profile image" 
              />
          </label>
          <input 
              type="file" 
              accept='image/*'
              id= { id + "-profileImage"}
              name="profileImage"
              className='profileImg'
              onChange={handleImageUpload}
          />
        </div>

        <div className='formEl'>
          <label htmlFor="firstName">First Name: </label> <br />
          <input 
              className='input-box'
              type="text"
              name="firstName"
              id= {id + "-firstName"}
              placeholder="John"
              onChange={handleChange}
              value={personalFormData.firstName}
              required
              autoFocus
          />
        </div>

        <div className='formEl'>
          <label htmlFor="lastName">Last Name: </label> <br />
          <input 
              className='input-box'
              type="text"
              id= {id + "-lastName"}
              name="lastName"
              placeholder="Doe"
              onChange={handleChange}
              value={personalFormData.lastName}
              required
          />
        </div>

        <div className='formEl'>
          <label htmlFor="phone">Phone Number: </label> <br />
          <input 
              className='input-box'
              type="tel"
              id={id + "-phone"}
              name="phone"
              placeholder="123456789"
              onChange={handleChange}
              value={personalFormData.phone}
              required
          />  
        </div>

        <div className="formEl">
          <label htmlFor="linkedin">LinkedIn: </label> <br />
          <input 
              className='input-box'
              type="text"
              id={id + "-linkedin"}
              name="linkedin"
              placeholder="https://www.linkedin.com"
              onChange={handleChange}
              value={personalFormData.linkedin}
          />
        </div>

        <div className='formEl'>
          <label htmlFor="email">Email: </label> <br />
          <input 
              className='input-box'
              type="email"
              id={id + "-email"}
              name="email"
              placeholder="email@example.com"
              onChange={handleChange}
              value={personalFormData.email}
              required
          />
        </div>

        <div className="buttonContainer">
          <button className="submit-btn" onClick={handleSubmit} type="submit">Add</button>
          <button onClick={onClose}>Cancel</button>
        </div>

      </form>
    </div>
  )
}

export default PersonalInfoFrom
