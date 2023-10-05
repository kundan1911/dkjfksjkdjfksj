import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 300
    }
  }
}));
const Form = ({ formData, setFormData, setChange }) => {
  const classes = useStyles();
  const onSubmit = (e) => {
    e.preventDefault();
    setChange(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };
  return (
    <form onSubmit={onSubmit} className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
        <h2>Your Name</h2>
        <TextField
          value={formData.name}
          onChange={handleChange}
          className={classes.root}
          id="outlined-basic"
          label="Your Name"
          variant="outlined"
          autoFocus
          type="text"
          name="name"
          autoComplete="false"
        />
        <h2>Feedback</h2>
        <TextField
          type="text"
          className={classes.root}
          id="outlined-basic"
          label="Description"
          variant="outlined"
          rows="4"
          multiline
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
        >
          Submit
        </Button>{" "}
      </Grid>
    </form>
  );
}; /* 
Form.propTypes = {
  classes: PropTypes.object.isRequired
}; */
export default Form;
