"use client";

import { authenticate } from "@/app/lib/actions";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className="bg-gradient-to-r from-blue-900 to-indigo-900 p-8 rounded-3xl w-[500px] h-[500px] flex flex-col justify-center gap-8 items-center">
        <img src="/logo4.png" alt="" className={`w-[50%]`}/>
        <input name="username" type="text" placeholder="Username" className="p-8 bg-transparent rounded-3xl border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7] w-full"></input>
        <input name="password" type="password" placeholder="Password" className="p-8 bg-transparent rounded-3xl border-2 border-white focus:outline-none focus:border-2 focus:border-[#00C9B7] w-full"></input>
        <button type="submit" className="mt-5 bg-[#00C9B7] p-2 w-full rounded-3xl hover:bg-indigo-400">Log in</button>
        {state && state}
    </form>
  );
};

export default LoginForm;