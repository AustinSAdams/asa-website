import { toast } from "sonner";

export default function CMToast() {
    return toast("Coming Soon!", {
        description:
            "This feature is still under development, please try again later.",
    });
}
