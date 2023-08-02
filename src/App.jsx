import { useState } from 'react'

import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {

  const [modalVisibility, setModalVisibility] = useState(false);

  const onShowModalandler = () => {
    setModalVisibility(true);
  }

  const onHideModalHandler = () => {
    setModalVisibility(false);
  }

  return <>
    <MainHeader onShowModal={onShowModalandler} />
    <PostList isModalVisible={modalVisibility} onHideModal={onHideModalHandler}/>
  </>
}

export default App;
