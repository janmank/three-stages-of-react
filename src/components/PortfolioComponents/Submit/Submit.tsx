import React, {useState} from 'react';

function Submit() {
    const [enteredName, setEnteredName] = useState(' ');
    const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredName(event.target.value);
    };

    const [enteredEmail, setEnteredEmail] = useState(' ');
    const emailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredEmail(event.target.value);
    };

    const [enteredSubject, setEnteredSubject] = useState(' ');
    const subjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredSubject(event.target.value);
    };

    const [enteredText, setEnteredText] = useState(' ');
    const textChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEnteredText(event.target.value);
    };

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const odpowiedz = {
            Name: enteredName,
            Email: enteredEmail,
            Subject: enteredSubject,
            Text: enteredText,
        };
        setEnteredName('');
        setEnteredEmail('');
        setEnteredSubject('');
        setEnteredText('');
        alert(
            'Twoje imię ' +
                odpowiedz.Name +
                '\n' +
                'Twój email ' +
                odpowiedz.Email +
                '\n' +
                'Twój temat ' +
                odpowiedz.Subject +
                '\n' +
                'A to, co ode mnie chcesz ' +
                odpowiedz.Text,
        );
    };
    return (
        <form onSubmit={submitHandler}>
            <fieldset>
                <div>
                    <label htmlFor="contactName">
                        Name <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        value={enteredName}
                        onChange={nameChange}
                    />
                </div>
                <div>
                    <label htmlFor="contactEmail">
                        Email <span className="required">*</span>
                    </label>
                    <input
                        type="email"
                        id="contactEmail"
                        name="contactEmail"
                        value={enteredEmail}
                        onChange={emailChange}
                    />
                </div>
                <div>
                    <label htmlFor="contactSubject">Subject </label>
                    <input
                        type="text"
                        id="contactSubject"
                        name="contactSubject"
                        value={enteredSubject}
                        onChange={subjectChange}
                    />
                </div>
                <div>
                    <label htmlFor="contactMessage">
                        Name <span className="required">*</span>
                    </label>
                    <textarea
                        cols={50}
                        rows={15}
                        id="contactMessage"
                        name="contactMessage"
                        value={enteredText}
                        onChange={textChange}></textarea>
                </div>
                <div className="sub-button">
                    <button type="submit" className="submit">
                        Submit
                    </button>
                </div>
            </fieldset>
        </form>
    );
}

export default Submit;
