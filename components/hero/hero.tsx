import Button from "../shared/button";

export default function Hero() {
  return (
    <div>
      <div className="flex items-center def-container header-height">
        <div className="flex flex-col items-start py-8 mx-0 max-w-[600px] lg:max-w-[1200px] xl:ml-96 lg:ml-60 md:ml-32 gap-y-8">
          <h3 className="text-xl font-light tracking-wide text-green">
            Hi, my name is
          </h3>
          <div className="space-y-6 text-5xl font-extrabold tracking-wide lg:tracking-wider lg:text-6xl">
            <h2 className="text-lightslate">Nika Gotsiridze.</h2>
            <h2 className="text-slate">I build things for the web.</h2>
          </div>
          <p className="text-lg tracking-wide max-w-[600px]">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at{" "}
            <span className="relative cursor-pointer text-green group">
              Upstatement
              <span className="absolute bottom-[-5px] left-0 w-[110px] h-[2px] bg-green scale-x-0 group-hover:scale-x-100 transform-origin-left transition duration-300"></span>
            </span>
            .
          </p>
          <Button px="px-6" py="py-4">
            Check out my portfolio!
          </Button>
        </div>
      </div>
    </div>
  );
}
