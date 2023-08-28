import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios, { AxiosError } from "axios";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { toast } from "react-hot-toast";

type User = {
  email: string;
  password: string;
};
const LoginForm = () => {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  async function handleLogin(data: User): Promise<User> {
    try {
      const res = await axios.post("https:localhost:8080/auth/login", data);

      if (res.status === 200) {
        const user: User = res.data;
        return user;
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      throw new Error("An error occured during login");
    }
  }

  function Login(): void {
    console.log(user);
    handleLogin(user)
      .then((response) => {
        console.log(response.email);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const accessToken = useSelector(
    (state: RootState) => state.user.userAccessToken
  );

  type RootState = {
    user: {
      userAccessToken: string;
    };
  };

  // creating
  const LoginValidator = z.object({
    username: z
      .string()
      .min(3, {
        message: "Username must be at least 3 characters long",
      })
      .max(20, {
        message: "Username must be at most 20 charaters long",
      }),
    password: z
      .string()
      .min(8, {
        message: "password must be at least 8 characters long",
      })
      .max(20, {
        message: "Password must be at most 20 characters long",
      }),
  });

  type LoginCredentials = z.infer<typeof LoginValidator>;

  type LoginResponse = {
    accessToken: string;
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<LoginCredentials>({
    resolver: zodResolver(LoginValidator),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const locationForm = location.state.from?.pathname || "/dashboard";

  // navigate user to dashboard if logged in
  useEffect(() => {
    if (accessToken) navigate("/dashboard");
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: async ({ username, password }: LoginCredentials) => {
      // this Login_URL normally goes into config file
      // to be reused across the app

      const LOGIN_URL = "token/obtain/";

      try {
        const { data } = await axios.post(
          LOGIN_URL,
          JSON.stringify({ username, password })
        );

        return data as LoginResponse;
      } catch {
        // mocked response
        const data = {
          accessToken: "mytoken",
        };
        return data as LoginResponse;
      }
    },
    onSuccess: (data) => {
      dispatch(
        login({
          username: getValues().username,
          accessToken: data.accessToken,
        })
      );

      const navTarget = locationForm || "/dashboard";

      navigate(navTarget, { replace: !!locationForm });
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          return toast.error("Invalid credentials");
        }
      }
      toast.error("Something went wrong, please try again.");
    },
  });
  return (
    <div className="flex flex-row w-2/3 h-[700px] justify-center items-center box-border shadow-2xl max-w-4xl">
      <div className="flex flex-col w-3/5 h-full bg-gray-400 relative justify-center rounded-bl-lg rounded-tl-lg">
        <p className=" absolute top-20 left-10 text-blue-gradient text-xl text-pale-blue"></p>
        <h1 className="ac"> </h1>
        <form
          onSubmit={handleSubmit((data) => handleLogin(data))}
          className="flex flex-col w-full p-5 bg-white items-center"
        >
          <div className="flex w-full justify-evenly h-16">
            <div className="p-2 h-10 hover:cursor-pointer ">
              <FcGoogle size={40} />
            </div>
            <div className="p-2 hover:cursor-pointer">
              <FaGithub size={40} />
            </div>
            <div className="p-2 hover:cursor-pointer">
              <FaFacebook size={40} />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input
            autoFocus
            className="h-8 w-1/2 rounded"
            type="text"
            id="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
          {/* {email.email && (
          <h3>{errors.email</h3>
        )} */}
          <label htmlFor="password">Password</label>
          <input
            className="h-8 w-1/2 rounded"
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>

          <button className="bg-blue text-white mt-5 w-1/2">Login</button>
        </form>
      </div>

      {/*  */}
      <div className=" flex flex-col relative w-2/5 h-full bg-gray-500 rounded-br-lg rounded-tr-lg ">
        {/*Sign up section */}
        <Link to="/register">
          <p className="absolute flex bottom-0 left-10 text-pale-blue text-2xl justify-center items-center hover:cursor-pointer">
            Har du inget konto? tryck här
          </p>
        </Link>
      </div>
    </div>
  );
};
export default LoginForm;
