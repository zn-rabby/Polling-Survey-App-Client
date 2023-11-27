import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Banner = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto h-[75vh] justify-center bg-[url(https://img.freepik.com/free-photo/business-survey-research-concept_53876-121246.jpg?w=1380&t=st=1700848712~exp=1700849312~hmac=9ca681a9993e29978a650188deb961fcaec072ca2da8bac6829065400316a239)] bg-no-repeat bg-cover bg-center">
        <div className="text-center bg-[#0e041198] h-full w-full flex items-center justify-center">
          <div className="flex flex-col-reverse  md:flex-row justify-between items-center gap-5 p-2">
            <div className=" space-y-3">
              <h1 className="text-3xl font-bold text-white">FIND Survey</h1>
              <div className="bg-[#0c0b0cbb] rounded">
                <h2 className="text-3xl md:text-5xl font-bold inline-block p-2 rounded-md  text-dark-03">
                  Explore tech solutions users trust
                </h2>
              </div>
              <button className="bg-dark-03 text-white text-lg uppercase font-semibold py-3 px-5 rounded flex justify-center items-center mb-6 mx-auto md:text-block">
                Explore More{" "}
                <MdKeyboardDoubleArrowRight className="text-2xl font-bold"></MdKeyboardDoubleArrowRight>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
