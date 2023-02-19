import Modal from "../components/Modal"
import Button from "../components/Button"; 
import { useState } from "react"; 

function ModalPage() {
  const [showModal, setShowModal] = useState(false); 
  const handleClick = () => {
    setShowModal(!showModal)
  }
  const actionBar = <div>
    <Button onClick={handleClick} primary>I Accept</Button>
  </div>; 
  const modal = <Modal onClose={handleClick} actionBar={actionBar}>
    <p>Here is an important agreement for you to accept </p>
  </Modal>; 
  return (
    <div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste amet vel provident voluptate! Ipsam delectus enim alias, totam libero, praesentium in asperiores tempore officiis cum officia aperiam quod voluptas.</p>
        <Button primary onClick={handleClick}> Open modal</Button>
       {showModal && modal} 
    </div>
  )
}

export default ModalPage