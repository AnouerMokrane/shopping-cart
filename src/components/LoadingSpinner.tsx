const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center absolute left-1/2 top-14 w-16 h-16 bg-black rounded-lg mx-auto">
      <span className=" w-5/6 h-5/6 bg-black border-4 border-r-transparent rounded-full animate-spin"></span>
    </div>
  );
};

export default LoadingSpinner;
