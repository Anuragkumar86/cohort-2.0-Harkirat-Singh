import { useNavigate, useSearchParams } from "react-router-dom";


export const SuccessPage = () => {
    const navigate = useNavigate();
    const [searchParam] = useSearchParams();
    const amount = searchParam.get("amount")
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="h-full flex flex-col justify-center">
          <div className="max-w-md w-96 p-8 space-y-8 bg-white shadow-xl rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105">
            
            {/* Success Icon and Title */}
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center justify-center p-4 bg-green-100 rounded-full">
                <svg
                  className="w-16 h-16 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-semibold text-center text-green-600">
                Money Transferred Successfully!
              </h2>
            </div>
  
            {/* Transaction Details */}
            <div className="space-y-4 text-center">
              <p className="text-gray-600 text-lg">
                Your transaction was completed successfully. The money has been
                transferred to the recipient's account.
              </p>
  
              <div className="space-x-4">
                <p className="text-lg font-medium text-gray-800">
                  Amount: <span className="text-green-600 font-bold">{amount}</span>
                </p>
                <p className="text-lg font-medium text-gray-800">
                  Date: <span className="text-gray-600">January 26, 2025</span>
                </p>
              </div>
            </div>
  
            {/* Button Section */}
            <div className="mt-6 flex justify-center space-x-4">
              {/* <button
                className="px-6 py-2 text-lg font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300"
              >
                View Details
              </button> */}
              <button onClick={()=>{
                navigate("/dashboard")
              }}
                className="px-6 py-2 text-lg font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  