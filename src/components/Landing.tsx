import React from "react";

function Landing() {
  return (
    <section
      className={`relative bg-[url(https://images.unsplash.com/photo-1670817801676-3f6a009d624b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)] bg-cover bg-center bg-no-repeat`}
    >
      <div className="absolute inset-0 bg-black/45 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/50 sm:to-white/10"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold text-sky-800">
              Forever Home.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-sky-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-500 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Contactarme
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
