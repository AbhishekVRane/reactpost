import { MdMessage, MdPostAdd } from 'react-icons/md'

import classes from './MainHeader.module.css';

const MainHeader = (props) => {

    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <MdMessage />
                React Poster
            </h1>
            <button className={classes.button} onClick={props.onShowModal}>
                <MdPostAdd />
                New Post
            </button>
        </header>
    );
}

export default MainHeader;