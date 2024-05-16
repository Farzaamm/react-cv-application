
function Form() {
    return (
        <div className="form">
            <section className="form--personal-info--container">
                <h1>Personal Info</h1>
                <form className="form--personal-info">
                    <label htmlFor="fname">First Name: </label>
                    <input 
                        type="text" 
                        id="fname" 
                        name="fname" 
                        placeholder="John"

                    /> <br/>

                    <label htmlFor="lname">Last Name: </label>
                    <input 
                        type="text" 
                        id="lname" 
                        name="lname" 
                        placeholder="Doe"/> <br/>

                    <label htmlFor="phone">Phone Number: </label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="123456789"/> <br/>

                    <label htmlFor="email">Email: </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="email@example.com"/> <br/>

                    <input type="submit" value="Add"/>
                </form>


            </section>

            <section className="form--education">
                <h1>Educational Info</h1>
                <form className="form--educational-info">
                    <select name="degree" id="degree"> 
                        <option value="none">Choose a degree</option>
                        <option value="highschool">High School</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="phd">PhD</option>
                    </select> <br/>

                    <label htmlFor="university">Name of the school or university: </label>
                    <input type="text" id="university" name="university" placeholder="University of Example"/> <br/>

                    <label htmlFor="from-date">From: </label>
                    <input type="date" id="from-date" name="from-date"/> <br/>

                    <label htmlFor="to-date">To: </label>
                    <input type="date" id="to-date" name="to-date"/> <br/>

                    <input type="submit" value="Add"/>

                </form>
            </section>

            <section className="form--experience">
                <h1>Work Experience</h1>
                <form className="form--experience">
                    <label htmlFor="company">Company: </label>
                    <input type="text" id="company" name="company" placeholder="Example Company"/> <br/>

                    <label htmlFor="from-date">From: </label>
                    <input type="date" id="from-date" name="from-date"/> <br/>

                    <label htmlFor="to-date">To: </label>
                    <input type="date" id="to-date" name="to-date"/> <br/>

                    <label htmlFor="position">Position: </label>
                    <input type="text" id="position" name="position" placeholder="Position" /> <br/>

                    <label htmlFor="description">Job Description: </label>
                    <input type="text" id="description" name="description" placeholder="Description" /> <br/>

                    <input type="submit" value="Add"/>
                </form>
            </section>
        </div>
    )
}

export default Form