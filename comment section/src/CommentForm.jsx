import { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "username cannot be empty!";
  }

  return errors;
};
export default function CommentsForm({ addNewComment }) {
  // let [FormData, setFormData] = useState({
  //   username: "",
  //   remarks: "",
  //   rating: 5,
  // });
  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // let handleInputChange = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // };
  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   addNewComment(FormData);
  //   console.log(FormData);
  //   setFormData({
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });
  // };
  return (
    <div>
      <h4>Give a Comment</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">UserName:</label>
        <input
          type="text"
          placeholder="username"
          id="username"
          value={formik.values.username}
          name="username"
          onChange={formik.handleChange}
        />
        {formik.errors.username ? (
          <p style={{ color: "red" }}>{formik.errors.username}</p>
        ) : null}
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>
        <textarea
          name="remarks"
          id="remarks"
          placeholder="add few remarks"
          onChange={formik.handleChange}
          value={formik.values.remarks}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          name="rating"
          placeholder="rating"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
        />
        <br />
        <br />
        <button type="submit">Add comments</button>
      </form>
    </div>
  );
}
