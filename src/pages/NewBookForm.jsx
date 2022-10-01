import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { Context } from "../context/helpers/Context";

function NewBookForm() {
  const navigate = useNavigate();
  const { actions } = useContext(Context);

  const onSubmit = (values) => {
    actions.newBook(
      values.title,
      values.series,
      values.publisher,
      values.author,
      values.isbn
    );
		navigate("/books")
  };
  return (
    <div>
      <h1 className="text-center text-6xl mb-10">Add Book</h1>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = "Required";
          }
          if (!values.publisher) {
            errors.publisher = "Required";
          }
          if (!values.author) {
            errors.author = "Required";
          }
          if (!values.isbn) {
            errors.isbn = "Required";
          }
          return errors;
        }}
        render={({
          submitError,
          handleSubmit,
          form,
          submitting,
          pristine,
        }) => (
          <form onSubmit={handleSubmit}>
            <Field name="title">
              {({ input, meta }) => (
                <div className="form-margin-top">
                  {/* <label>Title</label> */}
                  <input {...input} type="text" placeholder="Title" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="series">
              {({ input, meta }) => (
                <div className="form-margin-top">
                  <input {...input} type="text" placeholder="Series" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="publisher">
              {({ input, meta }) => (
                <div className="form-margin-top">
                  {/* <label>Publisher</label> */}
                  <input {...input} type="text" placeholder="Publisher" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="author">
              {({ input, meta }) => (
                <div className="form-margin-top">
                  {/* <label>Author</label> */}
                  <input {...input} type="text" placeholder="Author" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="isbn">
              {({ input, meta }) => (
                <div className="form-margin-top">
                  {/* <label>ISBN</label> */}
                  <input {...input} type="text" placeholder="ISBN" />
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
                +New Book
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

export default NewBookForm;
