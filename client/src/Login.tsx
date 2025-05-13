import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useAuthStore } from "./useAuthStore";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";

export default function Login() {
  // Uncontrolled form components
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target as HTMLFormElement);
  //   console.log(formData.get("email"));
  // };

  // const handleSubmit2 = (formData: FormData) => {
  //   console.log(formData.get("email"));
  // };

  // const emailRef = useRef<HTMLInputElement>(null);
  // const handleSubmit3 = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log(emailRef.current?.value);
  // };

  // Controlled form component
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const handleSubmit4 = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log(email);
  //   console.log(password);
  // };

  // Controlled form component
  const loginMutation = useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      return data;
    },
    onSuccess: (data) => {
      login(data.user, data.token);
    },
  });
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.FormEvent) => {
    // const newFormData = structuredClone(formData);
    // const target = e.target as HTMLInputElement;
    // newFormData[target.name as "email" | "password"] = target.value;
    // setFormData(newFormData);
    const target = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [target.name as "email" | "password"]: target.value,
    });
  };
  const handleSubmit4 = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(formData);
    await loginMutation.mutateAsync({
      email: formData.email,
      password: formData.password,
    });
    navigate("/");
  };

  return (
    <div className="container mx-auto flex items-center justify-center my-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          {/* <form className="space-y-4" onSubmit={handleSubmit} noValidate> */}
          {/* <form className="space-y-4" action={handleSubmit2} noValidate> */}
          {/* <form className="space-y-4" onSubmit={handleSubmit3} noValidate> */}
          <form className="space-y-4" onSubmit={handleSubmit4} noValidate>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                value={formData.email}
                onChange={handleChange}
                // ref={emailRef}
                id="email"
                name="email"
                type="email"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                value={formData.password}
                onChange={handleChange}
                id="password"
                name="password"
                type="password"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <p className="text-center text-sm">
              Don't have an account?{" "}
              <span className="text-blue-500 hover:underline cursor-pointer">
                Register
              </span>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
