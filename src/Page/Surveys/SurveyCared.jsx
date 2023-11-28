const SurveyCared = ({ data }) => {
  const { category, surveyTitle } = data || {};
  return (
    <div className="border border-dark-01 m-2 p-4 rounded bg-gray-200">
      <div>
        <h1>{surveyTitle}</h1>
        <h2>{category}</h2>
      </div>
    </div>
  );
};

export default SurveyCared;
