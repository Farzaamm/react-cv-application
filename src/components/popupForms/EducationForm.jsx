import { useState, useId } from "react";
import { X } from 'lucide-react';

const EducationForm = ({onClose, onSubmit, initialData}) => {
    const [EducationFormData, setEducationFormData] = useState(initialData || {
        degree: "",
        school: "",
        graduationYear: "",
    });

    const id = useId(); 

    const handleChange = (e) => {
        const { name, value } = e.target
        setEducationFormData((prevFormData) => ({...prevFormData, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(EducationFormData);
        onClose();
    }

    return (
        <div className="backdrop">

            <form onSubmit={handleSubmit} className='popup'>
                <button className="close-btn" onClick={onClose}><X size={20} /></button>
                <div className="formEl">
                    <label htmlFor="degree">
                        Degree: <br />
                        <input className="input-box" 
                            type="text"
                            value={EducationFormData.degree}
                            onChange={handleChange}
                            name="degree"
                            id={id + '-degree'}
                            required
                            autoFocus
                        />
                    </label>
                </div>

                <div className="formEl">
                    <label htmlFor="school-name">
                        School: <br />
                        <input className="input-box" 
                            type="text"
                            value={EducationFormData.school}
                            onChange={handleChange}
                            name="school"
                            id={id + '-school-name'}
                            required
                        />
                    </label>
                </div>

                <div className="formEl">
                    <label htmlFor="graduation-year">
                        Graduation Year: <br />
                        <input className="input-box" 
                            type="date"
                            value={EducationFormData.graduationYear}
                            onChange={handleChange}
                            name="graduationYear"
                            id={id + '-graduation-year'}
                            required
                        />
                    </label>
                </div>

                <div className="formEl">
                    <button className="add-btn education--add-btn" type="submit">Add</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>
    )
}


export default EducationForm;
