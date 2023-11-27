const Hero = ({ img, title, subTitle }) => {
  return (
    <div
      className="hero h-[70vh] w-full"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className=" text-5xl font-bold border-b-2  border-dark-01 ">
            {title}
          </h1>
          <p className="mt-2">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
