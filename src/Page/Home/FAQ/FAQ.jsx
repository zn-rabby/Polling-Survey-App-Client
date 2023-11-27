const FAQ = () => {
  return (
    <div className="m-2">
      <h2 className="text-5xl font-semibold text-center m-4 mt-8  border-b-2 border-dark-03 p-2 w-40 mx-auto">
        FAQ
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto my-10 gap-6">
        <div className="collapse collapse-plus bg-dark-03 text-white">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-semibold">
            What is the purpose of this survey?
          </div>
          <div className="collapse-content">
            <p>
              The survey aims to briefly describe the purpose and goals of the
              survey.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-dark-03 text-white">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-semibold">
            Who can participate in the survey?
          </div>
          <div className="collapse-content">
            <p>Specify the target audience or criteria for participation.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-dark-03 text-white">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-semibold">
            Will the results be made public?
          </div>
          <div className="collapse-content">
            <p>
              The results will be used for explain the purpose - e.g., research,
              improvement, decision-making. Aggregated and anonymized data may
              be shared publicly.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-dark-03 text-white">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-semibold">
            Can I skip questions?
          </div>
          <div className="collapse-content">
            <p>
              Yes, you can skip questions. However, we encourage you to answer
              all questions to provide comprehensive feedback.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-dark-03 text-white">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-semibold">
            How do I contact the survey administrators if I have further
            questions?
          </div>
          <div className="collapse-content">
            <p>
              If you have additional questions, please contact us at provide
              contact information.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-dark-03 text-white">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-semibold">
            What happens to my data after completing the survey?
          </div>
          <div className="collapse-content">
            <p>
              Yes, if you experience technical difficulties, please contact our
              support team at provide contact information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
