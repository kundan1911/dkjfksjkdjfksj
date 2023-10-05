import { Modal, Button } from "antd";
import React, { useRef,useState, Fragment } from "react";
import { Quiz } from "react-quizzes";

const QuizExample=()=>{
// const data=[{…}, {…}, {…}, {…}]]
    const [modalVisibility, setModalVisibility] = useState(false);
    const inputRef = useRef(null);
    return (
      <Fragment>
        <Button onClick={() => setModalVisibility(true)}>Preview Form</Button>
        <Modal
          title="Preview Form"
          style={{ top: 20 }}
          visible={modalVisibility}
          onCancel={() => setModalVisibility(false)}
          destroyOnClose
        >
          <Quiz
            data={data}
            // onSubmit={values => console.log("form submit values", values)}
            submitButton={false}
            ref={inputRef}
          />
          <Button onClick={props.updateOK}>Create Form</Button>
        </Modal>
      </Fragment>
    );
}
export default QuizExample