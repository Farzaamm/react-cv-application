import { useState, useId } from "react";
import { X } from 'lucide-react';

const WorkExperienceForm = ({onClose, onSubmit, initialData}) => {
    const [WorkExperienceFormData, setWorkExperienceFormData] = useState(initialData || {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
    });

    const id = useId();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setWorkExperienceFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(WorkExperienceFormData);
        onClose();
    };
    
    return(
        <div className="backdrop">
            <form onSubmit={handleSubmit} className='popup'>
                <button className="close-btn" onClick={onClose}><X size={20} /></button>
                <div className="formEl">
                    <label htmlFor="company">
                        Company: <br />
                        <input className="input-box" 
                            type="text"
                            value={WorkExperienceFormData.company}
                            onChange={handleChange} 
                            name="company"
                            id={id + '-company'}
                            autoFocus
                        />
                    </label>
                </div>

                <div className="formEl">
                    <label htmlFor="position">
                        Position: <br />
                        <input className="input-box" 
                            type="text"
                            value={WorkExperienceFormData.position}
                            onChange={handleChange} 
                            name="position"
                            id={id + '-position'}
                        />
                    </label>
                </div>

                <div className="formEl">
                    <label htmlFor="start-date">
                        Start Date: <br />
                        <input className="input-box" 
                            type="date"
                            value={WorkExperienceFormData.startDate}
                            onChange={handleChange} 
                            name="startDate"
                            id={id + '-start-date'}
                        />
                    </label>
                </div>

                <div className="formEl">
                    <label htmlFor="end-date">
                        End Date: <br />
                        <input className="input-box" 
                            type="date"
                            value={WorkExperienceFormData.endDate}
                            onChange={handleChange} 
                            name="endDate"
                            id={id + '-end-date'}
                        />
                    </label>
                </div>

                <div className="formEl">
                    <label htmlFor="description">
                        Description: <br />
                        <textarea className="input-box" 
                            type="text"
                            value={WorkExperienceFormData.description}
                            onChange={handleChange} 
                            name="description"
                            id={id + '-description'}
                        />
                    </label>
                </div>
    
                <div className="formEl">
                    <button className="add-btn experience--add-btn" type="submit">Add</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default WorkExperienceForm
