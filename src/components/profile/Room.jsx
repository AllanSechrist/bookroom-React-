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
                return <li className="text-2xl">{book.title}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default room;
