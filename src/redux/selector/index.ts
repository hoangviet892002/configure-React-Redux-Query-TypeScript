import { useAppSelector } from "../store";

const authSelector = useAppSelector((state) => state.auth);
const languageSelector = useAppSelector((state) => state.language);

export { authSelector, languageSelector };
