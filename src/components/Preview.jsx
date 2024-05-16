import {React, useState, useRef} from 'react';
import { Download, Linkedin } from 'lucide-react';
import { usePDF } from 'react-to-pdf';

import PersonalInfoFrom from './popupForms/PersonalInfoFrom';
import EducationForm from './popupForms/EducationForm';
import WorkExperienceForm from './popupForms/WorkExperienceForm';
import SkillsForm from './popupForms/SkillsForm';

function Preview() {
    
    const [personalInfo, setPersonalInfo] = useState('');
    const [showPersonalInfoPopup, setShowPersonalInfoPopup] = useState(false);
    
    const [educationInfo, setEducationInfo] = useState([]);
    const [showEducationPopup, setShowEducationPopup] = useState(false);
    const educationIndex = useRef(educationInfo.length);
    
    const [workExperienceInfo, setWorkExperienceInfo] = useState([]);
    const [showWorkExperiencePopup, setShowWorkExperiencePopup] = useState(false);
    const workExperienceIndex = useRef(workExperienceInfo.length);
    
    const [skills, setSkills] = useState([]);
    const [showSkillsPopup, setShowSkillsPopup] = useState(false);
    const skillsIndex = useRef(skills.length);
    
    const [download, setDownload] = useState(false);
    const { toPDF, targetRef } = usePDF({ filename: `${personalInfo.firstName} CV.pdf` });

    const handleDownload = () => {
        setDownload(true);
        setTimeout(() => {
            toPDF();
        }, 100);
    }
    const handlePersonalInfoEdit = () => {
        setShowPersonalInfoPopup(true);
        
    }
    const handlePersonalInfoDelete = () => {
        setPersonalInfo('');
    }

    const handleEducationAdd = () => {
        setShowEducationPopup(true);
        educationIndex.current = educationInfo.length;
    }
    const handleEducationOnSubmit = (educationFormData) => {
        const newEducationInfo = [...educationInfo];
        newEducationInfo[educationIndex.current] = educationFormData;
        setEducationInfo(newEducationInfo);
    }
    const handleEducationEdit = (index) => {
        setShowEducationPopup(true);
        educationIndex.current = index;
        handleEducationOnSubmit(educationInfo[index]);
    }
    const handleEducationDelete = (index) => {
        const newEducationInfo = [...educationInfo];
        newEducationInfo.splice(index, 1);
        setEducationInfo(newEducationInfo);
    }

    const handleWorkExperienceAdd = () => {
        setShowWorkExperiencePopup(true);
        workExperienceIndex.current = workExperienceInfo.length;
    }
    const handleWorkExperienceOnSubmit = (workExperienceFormData) => {
        const newWorkExperienceInfo = [...workExperienceInfo];
        newWorkExperienceInfo[workExperienceIndex.current] = workExperienceFormData;
        setWorkExperienceInfo(newWorkExperienceInfo);
    }
    const handleWorkExperienceEdit = (index) => {
        setShowWorkExperiencePopup(true);
        workExperienceIndex.current = index;
        handleWorkExperienceOnSubmit(workExperienceInfo[index]);
    }
    const handleWorkExperienceDelete = (index) => {
        const newWorkExperienceInfo = [...workExperienceInfo];
        newWorkExperienceInfo.splice(index, 1);
        setWorkExperienceInfo(newWorkExperienceInfo);
        workExperienceIndex.current = workExperienceInfo.length;
    }

    const handleSkillsAdd = () => {
        setShowSkillsPopup(true);
        skillsIndex.current = skills.length;
    }
    const handleSkillsOnSubmit = (skillsFormData) => {
        const newSkills = [...skills];
        newSkills[skillsIndex.current] = skillsFormData;
        setSkills(newSkills);
    }
    const handleSkillsEdit = (index) => {
        setShowSkillsPopup(true);
        skillsIndex.current = index;
        handleSkillsOnSubmit(skills[index]);
    }
    const handleSkillsDelete = (index) => {
        const newSkillsInfo = [...skills];
        newSkillsInfo.splice(index, 1);
        setSkills(newSkillsInfo);
    }


  return (
    <div className="preview" ref={targetRef}>
        <section className="preview-personal-info-container">
            <h1>Personal Information</h1>
            {showPersonalInfoPopup && <PersonalInfoFrom 
                onSubmit={personalFormData => setPersonalInfo(personalFormData)}
                onClose={() => setShowPersonalInfoPopup(false)}
                initialData={personalInfo}
                />}
        
            {personalInfo && <div className="preview-personal-info">
                <div className="personal-info-container">
                    <div>
                        <img src={personalInfo.image} alt="profile Image" className='profile-image' />
                    </div>

                    <div>
                        <h2> {personalInfo.firstName} {personalInfo.lastName}</h2> 
                        <p>Phone: {personalInfo.phone}</p>
                        <p>Email: {personalInfo.email}</p> <br />
                        <p><Linkedin /> {personalInfo.linkedin}</p>
                    </div>
                </div>

                <div>
                    <button onClick={() => handlePersonalInfoEdit()}>Edit</button>
                    <button onClick={() => handlePersonalInfoDelete()}>Delete</button>
                </div>
            </div>}
            <button 
                className='preview-add-btn' 
                onClick={() => setShowPersonalInfoPopup(true)}
                style={{display: download ? 'none' : 'block'}}
            >+</button>
        </section>

        <section className='preview-education-container'>
            <h1>Education</h1>
            {showEducationPopup && <EducationForm 
                onSubmit={handleEducationOnSubmit}
                onClose={() => setShowEducationPopup(false)}
                initialData={educationInfo[educationIndex.current]}
            />}

            <div className="preview-education">
                {educationInfo.map((education, index) => (
                    <div key={index}>
                        <h3>{education.degree}</h3>
                        <p>{education.school}</p>
                        <p>{education.graduationYear}</p>
                        <div>
                            <button onClick={() => handleEducationEdit(index)}>Edit</button>
                            <button onClick={() => handleEducationDelete(index)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            <button 
                className='preview-add-btn' 
                onClick={handleEducationAdd}
                style={{display: download ? 'none' : 'block'}}
            >+</button>
        </section>

        <section className='preview-work-experience-container'>
            <h1>Work Experience</h1>
            {showWorkExperiencePopup && <WorkExperienceForm
                onSubmit={handleWorkExperienceOnSubmit}
                onClose={() => setShowWorkExperiencePopup(false)}
                initialData={workExperienceInfo[workExperienceIndex.current]}
            />}

            <div className="preview-work-experience">
                {workExperienceInfo.map((workExperience, index) => (
                    <div key={index}>
                        <h3>{workExperience.company}</h3>
                        <p>{workExperience.position}</p>
                        <p>{workExperience.startDate} - {workExperience.endDate}</p>
                        <p>{workExperience.description}</p>
                        <div>
                            <button onClick={() => handleWorkExperienceEdit(index)}>Edit</button>
                            <button onClick={() => handleWorkExperienceDelete(index)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            <button 
                className='preview-add-btn' 
                onClick={handleWorkExperienceAdd}
                style={{display: download ? 'none' : 'block'}}
            >+</button>
        </section>

        <section className="preview-skills-container">
            <h1>Skills</h1>
            {showSkillsPopup && <SkillsForm
                onSubmit={handleSkillsOnSubmit}
                onClose={() => setShowSkillsPopup(false)}
                initialData={skills[skillsIndex.current]}
            />}
            <div className="preview-skills">
                {skills.map((skill, index) => (
                    <div key={index}>
                        <p>{skill}</p>
                        <div>
                            <button onClick={() => handleSkillsEdit(index)}>Edit</button>
                            <button onClick={() => handleSkillsDelete(index)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <button 
                className='preview-add-btn' 
                onClick={handleSkillsAdd}
                style={{display: download ? 'none' : 'block'}}
            >+</button>
        </section>
        <button 
            className="download-btn" 
            onClick={handleDownload}
            style={{display: download ? 'none' : 'block'}}
        ><Download /> Download</button>
    </div>
    
  )
}

export default Preview
