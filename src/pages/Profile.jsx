import React, { useContext, useEffect } from "react";
import Room from "../components/profile/Room";
import { Context } from "../context/helpers/Context";

function Profile() {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getRooms();
  }, []);

  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 p-10 mt-10'>
      {store.rooms.map((room) => {
        return <Room key={room.id} room={room} />;
      })}
    </div>
  );
}

export default Profile;
