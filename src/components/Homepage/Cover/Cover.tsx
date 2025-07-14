import "../../../App.css";
import SkillBulbules from "../BulBule";
import SpinningText from "../SpinningLogo";
import SmallSkillBulbules from "../SmallBulBule";

const FirstPage = () => {
  return (
    <>
      <div className="relative bg-[#0F172A] text-white z-0 overflow-hidden border-b-2 border-white/35">
        <div className="block md:hidden">
          <SmallSkillBulbules />
        </div>

        <div className="hidden md:block">
          <SkillBulbules />
        </div>
        <div className="min-h-screen w-full pt-14 relative z-40 flex flex-col items-center justify-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 items-center w-full max-w-6xl mx-auto">
            <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg a select-none text-center sm:block">
              Full Stack
            </p>
            {/* Left: Full Stack */}

            {/* Center: Spinning Logo */}
            <div className="flex justify-center items-center relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px]">
              <div className="w-[60vw] max-w-[250px] md:max-w-[300px] lg:max-w-[400px]">
                <SpinningText />
              </div>
            </div>

            {/* Right: Developer */}
            <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg a select-none text-center ">
              Developer
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
