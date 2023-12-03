const Comment = ({ data }) => {
  const { name, email, comment } = data || {};
  return (
    <div className="border bg-slate-50 rounded p-2">
      <div className="flex justify-around p-1">
        <h2 className="text-lg font-medium text-dark-01">{name}</h2>
        <h2 className="text-lg font-medium text-dark-01">{email}</h2>
      </div>
      <hr />
      <div className="text-start mt-1 text-dark-03">
        <p>
          Comment: <span className="text-dark-01">{comment}</span>
        </p>
      </div>
    </div>
  );
};

export default Comment;
