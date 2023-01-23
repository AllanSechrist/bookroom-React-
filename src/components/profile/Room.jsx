import { Link } from "react-router-dom";

function room({ room: { id, name, subtitle, books } }) {
  return (
    <>
      <div className="card shadow-xl bg-base-100">
        <div className="text-center items-center space-x-4 card-body card-bordered bg-neutral">
          <div>
            <h1 className="card-title text-3xl text-primary-content">{name}</h1>
            <h3 className="text-3xl text-primary-content">{subtitle}</h3>
          </div>
          <div>
            <ul>
              {books?.map((book) => {
                return <li className="text-2xl">{book}</li>;
              })}
            </ul>
            <div className="btn-group my-10 flex items-center justify-center">
              <Link to={`/profile/room/${id}/edit/`} className="btn btn-primary">Add Books</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default room;
