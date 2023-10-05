import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// import "../../assets/antd.css";
import Footer from "../../components/Footer";
// import { FormBuilder, FormGenerator } from "cb-react-forms";






const CreateForm= () => {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState([]);
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  /**
   * Handle the change event for the first option input.
   *
   * @param {Event} e - Input change event.
   */
  const handleFirstOptionChange = (e) => {
    setFirstOption(e.target.value);
  };

  /**
   * Handle the change event for the second option input.
   *
   * @param {Event} e - Input change event.
   */
  const handleSecondOptionChange = (e) => {
    setSecondOption(e.target.value);
  };

  /**
   * Handle the form submission.
   * Dispatches the creation of a new poll and redirects the user to the home page.
   *
   * @param {Event} e - Form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(firstOption, secondOption));
    navigate("/");
  };
  const handleChildData = (data) => {
    console.log("oKKKK"); // Update parent state with child data
    console.log("fkdnf",formdata)
  };

  console.log("formdata",formdata)
  return (
    <div>

       {/* <FormBuilder
        onSubmit={(data) => {
          setFormData(JSON.parse(data));
        }}
      />

      {
        formdata.length &&
          <FormGenerator
            formData={formdata}
            onSubmit={(data) => {
            console.log(data);
            }}
         /> */}
      {/* } */}


    </div>
  );
}
export default CreateForm