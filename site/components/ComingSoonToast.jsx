import { toast } from "sonner";

export default function CSToast() {
  return toast("Coming Soon!", {
    description:
      "This feature is still under development, please try again later.",
  });
}
