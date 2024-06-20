import { useAppSelector } from "../store";

const authSelector = useAppSelector((state) => state.auth);

export { authSelector };
