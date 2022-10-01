import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { Context } from "../context/helpers/Context";

function NewRoomForm() {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getBooks();
  }, []);

  const onSubmit = (values) => {
    actions.newRoom(values.name, values.subtitle, values.books);
    navigate("/profile");
  };
  return (
    <div>
      <h1 className="text-center text-6xl mb-10">Add Room</h1>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.subtitle) {
            errors.subtitle = "Required";
          }
          return errors;
        }}
        render={({ submitError, handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name">
              {({ input, meta }) => (
                <div className="form-margin-top">
                  {/* <label>Name</label> */}
                  <input {...input} type="text" placeholder="Name" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="subtitle">
              {({ input, meta }) => (
                <div className="form-margin-top">
                  <input {...input} type="text" placeholder="Subtitle" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <div className="form-margin-top">
              <label className="mx-1">
                <b>Book: </b>
              </label>
              <Field name="books" component="select">
                <option value="">N/A</option>
                {store.books.map((book) => {
                  return <option value={book}>{book.title}</option>;
                })}
              </Field>
            </div>
            {submitError && <div className="error">{submitError}</div>}
            <div className="btn-group my-10 flex items-center justify-center">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitting}
              >
                +New Room
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
          </form>
        )}
      ></Form>
    </div>
  );
}

export default NewRoomForm;
