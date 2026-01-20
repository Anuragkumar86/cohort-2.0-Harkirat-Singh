import { useNavigate } from "react-router-dom"

export const FailurePage = () => {
    const navigate = useNavigate();
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
        <div className="h-full flex flex-col justify-center">
          <div className="max-w-md w-96 p-8 space-y-8 bg-white shadow-xl rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105">
            
            {/* Error Icon and Title */}
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center justify-center p-4 bg-red-100 rounded-full">
                <svg
                  className="w-16 h-16 text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01M5.636 5.636a9 9 0 1112.728 12.728A9 9 0 015.636 5.636z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-semibold text-center text-red-600">
                Transfer Failed
              </h2>
            </div>
  
            {/* Error Details */}
            <div className="space-y-4 text-center">
              <p className="text-gray-600 text-lg">
                Unfortunately, the money transfer could not be completed. Please try again later.
              </p>
  
              <div className="space-x-4">
                <p className="text-lg font-medium text-gray-800">
                  Amount: <span className="text-red-600 font-bold">$250.00</span>
                </p>
                <p className="text-lg font-medium text-gray-800">
                  Date: <span className="text-gray-600">January 26, 2025</span>
                </p>
              </div>
            </div>
  
            {/* Retry and Back Buttons */}
            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={() =>  navigate("/send?id="+ _id +"&name="+ firstName)} // Simple retry logic (reloading page)
                className="px-6 py-2 text-lg font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Retry Transfer
              </button>
              <button
                onClick={() => navigate("/dashboard")} // Go back to the previous page
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
  