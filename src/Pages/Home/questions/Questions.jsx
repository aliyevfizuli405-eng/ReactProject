export const Questions = () => {
  return (
    <section className="questions bg-[#080325]">
      <div className="questionsContent flex flex-col justify-center items-center p-8">
        <h2 className="title text-white text-[20px] md:text-[42px] font-light">
          Have Any Questions?
        </h2>
        <p className="herobgDesc text-white text-[14px] md:text-[16px]">
          Youplay comes with documentation. See it here –{" "}
          <a href="" className="text-white  hover:text-red-800">
            https://nkdev.info/docs/youplay-wp/
          </a>
          <br />
          <br />
          Also we provide support for our users through ticket system –{" "}
          <a href="" className="text-white hover:text-red-800">
            https://nk.ticksy.com/
          </a>
          <br />
          <br />
          Contact us, using our profile on Themeforest –
          http://themeforest.net/user/_nk Purchase today for $59
        </p>
      </div>
    </section>
  );
};
