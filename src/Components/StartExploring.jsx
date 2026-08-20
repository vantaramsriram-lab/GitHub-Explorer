import { FaGithub } from "react-icons/fa";

const StartExploring = () => {
  return (
    <div className="flex justify-center w-full p-2 pl-3 pr-3 mt-10">

      <div className="flex min-h-[450px] flex-col items-center justify-center rounded-[28px] border border-white/30 bg-white/10 text-center backdrop-blur-sm p-3">

        <div className="mb-8 flex h-[120px] w-[120px] items-center justify-center rounded-full bg-white/20">
          <FaGithub className="h-16 w-16 text-white" />
        </div>

        {/* Heading */}
        <h1 className="mb-4 text-4xl font-bold text-white">
          Start Exploring
        </h1>

        {/* Description */}
        <p className="text-2xl font-medium text-white/80">
          Enter a GitHub username above to view their profile and statistics
        </p>

      </div>
    </div>
  );
};

export default StartExploring;