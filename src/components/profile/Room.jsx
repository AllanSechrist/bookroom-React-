import { useContext } from 'react'
import { Link } from "react-router-dom";
import {Context} from "../../context/helpers/Context"

function Room({ room: { id, name, subtitle, books } }) {
  const {actions} = useContext(Context)

  const handleDelete = (roomId) => {
    actions.deleteRoom(roomId);
    window.location.reload(false)
  }

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
            <div className="btn-group btn btn-error my-10 flex items-center justify-center" onClick={() => {
              handleDelete(id)
            }}>
             Delete Room
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Room;
