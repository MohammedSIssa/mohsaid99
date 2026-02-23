import Spinner from "../assets/icons/spinner.svg";

export default function SpinLoader() {
  return (
    <div className="animate-spin w-7 h-7">
      <img src={Spinner} width={28} height={28} />;
    </div>
  );
}
