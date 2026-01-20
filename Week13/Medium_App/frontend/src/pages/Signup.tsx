import { LeftPartSignup, RightPartSignup } from "../components/SignupR_L"

export const Signup = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-xl max-w-7xl w-full">
            <LeftPartSignup />
            <RightPartSignup />
          </div>
        </div>
      );
}