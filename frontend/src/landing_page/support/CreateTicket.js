import React from "react";

function CreateTicket() {
    return (
        <div>
            <h2>Create Ticket</h2>
            <form>
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" />
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateTicket;