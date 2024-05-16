import {React, useState, useId} from 'react'
import { X } from 'lucide-react';

function SkillsForm({onSubmit, onClose, initialData}) {
  const [skill, setSkill] = useState(initialData || '')

  const id = useId()

  const handleChange = (e) => {
    setSkill(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(skill);
    onClose();
  }

  return (
    <div className="backdrop">
      <form onSubmit={handleSubmit} className='popup'>
        <button className="close-btn"><X size={20} /></button>
        <div className="formEl">
          <label htmlFor="skill">Skill: <br /></label>
          <input 
            className="input-box" 
            type="text" 
            name="skill" 
            value={skill} 
            onChange={handleChange}
            placeholder="Skill"
            id={id + '-skill'}
            autoFocus
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

export default SkillsForm
