import toast from "react-hot-toast";

const Notify = (msg: string, type?: "success" | "error") => {
  if (type == "success") {
    toast.success(msg);
  } else if (type == "error") {
    toast.error(msg);
  } else {
    toast(msg);
  }
};

export default Notify;
