import { useState } from 'react';


export default function AddEmployee() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [success, setSuccess] = useState(false);

    const submitData = (e) => {
        e.preventDefault();
        const employeetData = { name, contact };
        /**Here, we are using a post request to send data to the api */
        fetch("http://localhost:8080/employee/add",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(employeetData)
            })
            .then(res => {
                if (res.ok) {
                    // If the response status is between 200 and 299 (inclusive), show a success alert
                    setSuccess(true);
                    window.location.reload();
                } else {
                    // If the response status is anything other than 200-299, throw an error
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
            })
            .catch(e => console.log(e))
    };
    return (

        <div>

            {
                <h1>Add Employee</h1>
            }
            {success && ( // If success is true, display the success message
                <div className="alert alert-success mt-3" role="alert">
                    Data submitted successfully!
                </div>
            )}
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label> First Name: </label>
                        <input placeholder="Name" name="name" className="form-control"
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label> Contact Number: </label>
                        <input placeholder="Contact Number" name="contact" className="form-control"
                            onChange={(e) => setContact(e.target.value)} />
                    </div>

                    <br></br>
                    <button className="btn btn-success" onClick={submitData}>Save</button>

                </form>
            </div>
        </div>

    );
}
