import React, { useContext, useEffect } from "react";
import Room from "../components/profile/Room";
import { Context } from "../context/helpers/Context";
import { useParams } from "react-router-dom";

function ReqRoom() {
  let { roomId } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getRoom(roomId);
  }, []);

  return (
    <div className="item-center">
      {/* {store.rooms.map((room) => {
        return <Room key={room.id} room={room} />;
      })} */}
      {console.log(roomId)}
      <Room room={store.room} />
    </div>
  );
}

export default ReqRoom;
