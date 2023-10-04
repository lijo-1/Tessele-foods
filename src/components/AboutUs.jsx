const AboutUs = () => {
    return (
      <div className="bg-white px-10 pt-14 pb-20 font-Mont font-medium">
        <div className="max-w-[1060px] mx-auto">
          <h2 className="text-green-900 font-bold text-lg text-center font-Mont md:text-2xl">
            About Tessele Foods
          </h2>
          <div className="mt-10 grid grid-cols-12 items-center">
          
            <div className="col-start-1 col-end-9 text-green-900 row-start-1 row-end-2 ">
              <p className="text-justify tracking-tight text-sm font-medium md:ml-10 md:text-[15px] md:tracking-normal md:text-[15px] lg:text-[16px] md:leading-normal lg:leading-relaxed">
                Welcome to Tessele Food, where nature meets taste in every sip and
                bite. We are a passionate, Kerala-based small business on a
                mission to bring the goodness of organic ingredients to your daily
                life. Our journey began with a simple idea: to create wholesome,
                organic malt powders, and horizons to offer a wide range of
                organic-based beverages. In a world filled with caffeine-laden
                beverages, we offer a refreshing alternative. Our organic-based
                beverages are not only delicious but also nourishing.
              </p>
            </div>
            <div className="ml-10 col-start-8 col-end-13 md:col-start-9 md:ml-5 grid grid-cols-2 row-start-1 row-end-2">
              <img
                style={{ transform: 'rotate(15deg)' }}
                className="max-w-none w-[350%] row-start-1 row-end-2 md:w-[150%]"
                src="src\images\banana powder.png"
                alt=""
              />
              <img
                style={{ transform: 'rotate(15deg)' }}
                className="max-w-none ml-[-10px] w-[350%] row-start-1 row-end-2 md:ml-[-70px] md:w-[150%]"
                src="src\images\beetroot malt.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  