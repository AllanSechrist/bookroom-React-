import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { Context } from "../context/helpers/Context";

function EditRoomForm() {
  // form to edit a room
  const navigate = useNavigate();
	let {roomId} = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getBooks();
		actions.getRoom(roomId)
  }, []);

  const onSubmit = (values) => {
    actions.editRoom(values.name, values.subtitle, values.books, roomId);
    navigate("/profile");
  };
  return (
    <div className="text-center">
      <h1 className="text-center text-6xl mb-10">Edit Room</h1>
      <Form
        onSubmit={onSubmit}
				initialValues={{
					name: store.room.name,
					subtitle: store.room.subtitle,

				}}
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
        render={({
          submitError,
          handleSubmit,
          form,
          submitting,
          pristine,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name">
              {({ input, meta }) => (
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>

                  {/* <span>Name</span> */}
                  <input
                    {...input}
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full max-w-xs"
                  />

                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="subtitle">
              {({ input, meta }) => (
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Subtitle</span>
                  </label>

                  {/* <span>Subtitle</span> */}
                  <input
                    {...input}
                    type="text"
                    placeholder="Subtitle"
                    className="input input-bordered w-full max-w-xs"
                  />

                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pick books to add</span>
              </label>
              <Field name="books" component="select" multiple>
                {store.books.map((book) => {
                  return <option value={book.id}>{book.title}</option>;
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
                Update
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
            <pre>{JSON.stringify(values.books, 0, 2)}</pre>
          </form>
        )}
      ></Form>
    </div>
  );
}

export default EditRoomForm;
