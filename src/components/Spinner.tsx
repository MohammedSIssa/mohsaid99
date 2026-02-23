import Spinner from "../assets/icons/spinner.svg";

export default function SpinLoader() {
  return (
    <div className="spin-parent">
      <img src={Spinner} className="spin" width={28} height={28} />
    </div>
  );
}
