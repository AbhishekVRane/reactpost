import { useState, useEffect } from 'react'
import Modal from './Modal';

import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostList.module.css';

const PostList = (props) => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getPosts = async () => {
            setIsLoading(true);
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            setPosts(resData.posts);
            setIsLoading(false);
        }
        getPosts();
    }, [])

    const postDataChangeHanlder = (postData) => {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": 'application/json'
            }
        })
        setPosts((existsingPosts) => [postData, ...existsingPosts]);
    }


    const modalContent = props.isModalVisible ? <Modal onModalClose={props.onHideModal}>
        <NewPost
            onCancel={props.onHideModal}
            onSubmit={postDataChangeHanlder}
        />
    </Modal> : null

    const postsContent = posts.length > 0 && !isLoading ?
        <ul className={classes.posts}>
            {posts.map((eachPost, index) => <Post key={index} author={eachPost.author} body={eachPost.body} />)}
        </ul> : 
        posts.length == 0 && !isLoading ?
        <div style={{ textAlign: 'center', color: 'white' }}>
            <h2> There are no posts.</h2>
            <p>Start adding some!</p>
        </div> : 
        <div style={{ textAlign: 'center', color: 'white' }}>
        <p>Loading posts...</p>
    </div>

    return (
        <>
            {modalContent}
            {postsContent}
        </>
    )
}

export default PostList;