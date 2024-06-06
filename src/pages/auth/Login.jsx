import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="grid grid-cols-2 gap-24">
      {/* Left Section */}
      <div>
        <div className="w-full pl-12 pt-36">
          {/* Logo */}
          <div className="flex justify-center">
            <img src="../public/logo.svg" alt="Logo" />
          </div>

          {/* Sign In Header */}
          <h1 className="text-5xl font-bold text-sky-900 pt-7 pb-4">Sign in</h1>

          {/* Sign In Form */}
          <div className="grid gap-2">
            {/* Email Input */}
            <div className="pb-5">
              <input
                type="email"
                placeholder="Email"
                className="w-full py-3.5 border-2 border-sky-900 rounded-xl outline-none px-4 text-xl"
              />
            </div>

            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              className="w-full py-3.5 border-2 border-sky-900 rounded-xl outline-none px-4 text-xl"
            />
          </div>

          {/* Forgot Password Link */}
          <h1 className="text-xs font-semibold text-sky-900 text-center pt-3 pb-3 cursor-pointer">
            Forgot Password?
          </h1>

          {/* Sign In Button */}
          <div className="flex justify-center">
            <Link to="/" className="w-full">
              <button className="w-full bg-sky-900 rounded-xl py-2.5 text-white font-bold text-2xl hover:bg-sky-800 hover:shadow-xl">
                Sign in
              </button>
            </Link>
          </div>

          {/* Google Sign In Button */}
          <button className="w-full border border-sky-900 rounded-xl flex items-center py-2.5 justify-center gap-3 mt-3 hover:shadow-xl">
            <img src="../public/Google.svg" alt="Google" />
            <span>Sign With Google</span>
          </button>

          {/* Register Link */}
          <div className="flex justify-center gap-1.5 mt-3">
            <p className="font-semibold text-sky-900 text-lg">
              Don’t have an account?
            </p>
            <Link
              to="/register"
              className="underline font-bold text-sky-900 text-lg"
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section - Hero Image */}
      <div className="relative">
        <div className="w-full h-full relative">
          <img
            src="../public/heroLogin.svg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900 via-transparent to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white p-6">
            <h1 className="text-6xl font-bold  mb-4">
              PERPUSTAKAAN PARAMADINA
            </h1>
            <p className="text-xl max-w-prose">
              Keberadaan e-journal di Perpustakaan Universitas Paramadina
              memfasilitasi sivitas akademika dalam mengakses ribuan koleksi
              jurnal, majalah, dan artikel ilmiah, yang sangat penting terutama
              di tengah kondisi pandemi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
