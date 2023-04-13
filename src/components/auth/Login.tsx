import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function formSubmit(e: any) {
    e.preventDefault();
    console.log(email, password);
    const responseLogin = await axios
      .post("https://api.iran.liara.ir/v1/login", { email, password })
      .then((res) => {
        console.log(res.data)
        if (res.data.api_token) {
          localStorage.setItem("token", res.data.api_token);
          localStorage.setItem("image",res.data.avatar)
          localStorage.setItem("fullname",res.data.fullname)
          router.push('/')
        }
      })
      .catch((err) => console.log(err));
    return responseLogin;
  }
  return (
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign in To Liara{" "}
            </h1>
          </div>
          <div className="mt-5">
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
              <img
                width={50}
                className="rounded-lg float-left"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            {/* Form */}
            <form onSubmit={formSubmit}>
              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-500 font-bold text-sm mb-2 dark:text-white"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      defaultValue=""
                      autoComplete="off"
                      name="username"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                      required
                      aria-describedby="email-error"
                    />
                    <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"></div>
                  </div>
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 text-gray-500 font-bold  dark:text-white"
                    >
                      Password
                    </label>
                    <a
                      className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
                      href="https://console.liara.ir/forgot"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      defaultValue=""
                      type="password"
                      id="password"
                      name="password"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                      required
                      aria-describedby="password-error"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
