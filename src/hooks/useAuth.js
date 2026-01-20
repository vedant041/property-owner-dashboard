import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

export default function useAuth() {
  const dispatch = useDispatch();

  const loginUser = (email, password) => {
    // fake validation
    if (!email || !password) {
      alert("Enter credentials");
      return;
    }

    // mock user
    dispatch(
      login({
        email,
        name: "Demo User",
      })
    );
  };

  return { loginUser };
}
