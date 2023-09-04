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
import { FormEventHandler, useRef } from "react";

const formSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 2 characters" })
    .max(50, { message: "Username must have maximum 50 characters" }),
  password: z.string().min(6).max(20),
});

const LoginForm = () => {
  const inputRef = useRef({
    username: "",
    password: "",
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  type FormData = z.infer<typeof formSchema>;

  const handleInput: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const a: FormData = form.getValues();
    if (a.username.length > 8) {
      return { ...a };
    } else {
      form.setError("username", {
        type: "manual",
        message: `${a.username} is not correct`,
      });
    }
  };

  return (
    <div className="flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={handleInput}
          className="space-y-8 text-black w-2/3 justify-center items-center"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    ref={inputRef}
                    placeholder="enter username"
                    {...field}
                  />
                </FormControl>

                <FormControl>
                  <Input
                    type="password"
                    placeholder="enter password"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
