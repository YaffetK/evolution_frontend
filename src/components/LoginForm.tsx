import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { FormEventHandler, useState } from "react";

const formSchema = z.object({
  userName: z
    .string()
    .min(3, { message: "Username must be at least 2 characters" })
    .max(50, { message: "Username must have maximum 50 characters" }),
  password: z.string().min(6).max(20),
});

const LoginForm = () => {
  // här vi set user till ett objekt av typen FormData
  const [user, setUser] = useState<FormData>({
    userName: "",
    password: "",
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  type FormData = z.infer<typeof formSchema>;

  const handleInput: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const a: FormData = form.getValues();
    if (a.userName.length >= 8) {
      return { ...a };
    } else if (a.password === "Hello") {
      throw "Error";
    } else {
      form.setError("userName", {
        type: "manual",
        message: `${a.userName} is not correct`,
      });
    }
  };

  return (
    <div className="flex items-center justify-center max-w-lg p-6 mx-auto min-w-max space-y-8 text-black w-full">
      <Form {...form}>
        <form onSubmit={handleInput}>
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="enter username" {...field} />
                </FormControl>

                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="enter password"
                  {...field}
                />

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            variant="destructive"
            className=" bg-cyan-500 mt-3 w-4/5"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
