const RecentCard = ({ data }) => {
  const { category, surveyTitle, description, _id } = data || {};
  console.log(_id);
  return (
    <div>
      <div className="border border-dark-01 m-2 p-4 rounded bg-gray-100">
        <div>
          <h1 className="text-xl font-semibold text-dark-01 ">
            Title: {surveyTitle}
          </h1>
          <h2 className="text-dark-01">Category: {category}</h2>
          <p>Description: {description?.slice(0, 110)}</p>
          <hr />
          <div className="flex justify-around">
            <small className="text-base text-dark-01 font-semibold">
              like: 00
            </small>
            <small className="text-base text-dark-01 font-semibold">
              Voted: 00
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentCard;
