import { FaCheck } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";

interface AlertPropTypes {
  type: "success" | "error";
  message: string;
  show: boolean;
}

export const Alert = ({ type, message, show }: AlertPropTypes) => {
  return (
    <div
      className={`alert absolute z-10 text-sm grid place-items-center ${
        type === "success" ? "bg-[#25E1A9]" : "bg-[#EA4375]"
      } rounded p-2 w-1/4 h-16 top-8 right-8`}
      style={{
        display: `${show ? "flex" : "none"}`,
      }}
    >
      {type === "success" ? (
        <FaCheck width={20} height={20} />
      ) : (
        <FiAlertCircle width={20} height={20} />
      )}{" "}
      <p className="ml-2">{message}</p>
    </div>
  );
};
