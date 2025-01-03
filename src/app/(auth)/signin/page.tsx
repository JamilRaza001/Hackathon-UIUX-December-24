import Image from "next/image";
import CommonHeader from "@/components/CommonHeader";
export default function SigninPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <CommonHeader title="Sign In" subTitle="Home" />

      {/* Signup Form */}
      <div className="flex items-center justify-center py-16 px-4 lg:px-0 bg-gray-50">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md sm:max-w-lg md:max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
          <form>
            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
              />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-[#FF9F0D] border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me?</span>
              </label>
              <a href="#" className="text-sm text-[#FF9F0D] hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#FF9F0D] text-white py-3 rounded-md hover:bg-orange-600"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Login */}
          <div>
            <button className="w-full flex items-center justify-center mb-3 p-3 border border-gray-300 rounded-md hover:bg-gray-100">
              <Image
                width={400}
                height={400}
                src="/images/goo.png"
                alt="Google"
                className="h-5 w-5 mr-2"
              />
              Sign In with Google
            </button>
            <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-md hover:bg-gray-100">
              <Image
                width={400}
                height={400}
                src="/images/appple.png"
                alt="Apple"
                className="h-5 w-5 mr-2"
              />
              Sign In with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
