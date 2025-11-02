import { ImSpinner10 } from "react-icons/im";

const LoadingEvents = () => {
  return (
    <div className="loading-container flex items-center justify-center py-10 flex-col gap-5">
      <div className="spinner">
        <ImSpinner10 size={50} />
      </div>
    </div>
  );
};

export default LoadingEvents;
