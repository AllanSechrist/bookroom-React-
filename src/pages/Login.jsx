import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";

import axiosInstance from "../api/axios";
const LOGIN_URL = "v1/auth/login/";

function Login() {
  const getToken = async (username, email, password) => {
    await axiosInstance
      .post(LOGIN_URL, {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.key);
        axiosInstance.defaults.headers["Authorization"] =
          "Token " + localStorage.getItem("access_token");
      });
  };
  const onSubmit = (values) => {
    getToken(values.username, values.email, values.password);
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        render={({
          submitError,
          handleSubmit,
          form,
          submitting,
          pristine,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <Field name="username">
              {({ input, meta }) => (
                <div className="form-margin-top">
                  {/* <label>Username</label> */}
                  <input {...input} type="text" placeholder="Username" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="email">
              {({ input, meta }) => (
                <div className="form-margin-top">
                  <input {...input} type="text" placeholder="Email" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <div className="form-margin-top">
                  {/* <label>Password</label> */}
                  <input {...input} type="password" placeholder="Password" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            {submitError && <div className="error">{submitError}</div>}
            <div className="btn-group my-10 flex items-center justify-center">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitting}
              >
                Log In
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
                className="btn btn-ghost ml-5"
              >
                Reset
              </button>
            </div>
            {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
          </form>
        )}
      ></Form>
    </div>
  );
}

export default Login;
