import { useState } from 'react'

import classes from './NewPost.module.css';

function NewPost(props) {

    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    const bodyChangeHandler = (event) => {
        setEnteredBody(event.target.value);
    }

    const authorChangeHandler = (event) => {
        setEnteredAuthor(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        }
        props.onSubmit(postData);
        props.onCancel();
    }

    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={authorChangeHandler} />
            </p>
            <p className={classes.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button onClick={submitHandler}>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;