import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {Field, FieldArray, Formik} from "formik";


 function App() {
    const MESSAGE_ERROR = {
        name: "name error",
        email: "email error",
        phone: "phone error",
        message: "message error"
    };
    const REGEX = {
        // name: /^[a-zA-Z]{2,}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phone: /\b\d{10}\b/,
        message: /^.{1,160}$/
    }
    const [form, setForm] = useState({});

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });

    }

    function handleValidate() {
        const errors = {};
        if (!form.email){
          errors.email = "Required";
        } else if (!REGEX.email.test(form.email)){
          errors.email = "Invalid email address";
          console.log("code")
        }
        // if (!errors.name){
        //   errors.name = "Required";
        // }
        if (!form.phone){
          errors.phone = "Required";
        }
        if (!form.message){
          errors.message = "Required";
        }
        return errors;
    }
    function handleSubmit() {
      alert("Login in successfully")
    }
    return (
        <div>

          <h1>Form Medical Declaration</h1>
          <Formik
              initialValues={form}
              validate={handleValidate}
              onSubmit={handleSubmit}
          >
            {({errors, handleSubmit}) => (
                <form onSubmit={handleSubmit}>
            <div className="custom-input">
              <label>Name</label>
              <Field
                type = "text"
                name = "name"
                value = {form.name || ""}
                  onChange = {handleChange}
              />
              <p className="error">{errors.name}</p>
            </div>
            <div className="custom-input">
              <label>Email</label>
              <Field
                  type = "email"
                  name = "email"
                  value = {form.email || ""}
                  onChange = {handleChange}
              />
              <p className="error">{errors.email}</p>
            </div>
            <div className="custom-input">
              <label>Phone</label>
              <Field
                  type = "number"
                  name = "phone"
                  value ={form.phone || ""}
                  onChange = {handleChange}
              />
              <p className="error">{errors.phone}</p>
            </div>
            <div className="custom-input">
              <label>Message</label>
              <Field
                  type = "message"
                  name = "message"
                  value = {form.message || ""}
                  onChange = {handleChange}
              />
              <p className="error">{errors.message}</p>
            </div>
            <button type={"submit"}> Submit</button>
                </form>
                )}
          </Formik>
        </div>
    );
}

export default App;
