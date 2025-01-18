import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-10">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-center gap-8">
        {/* Newsletter Section */}
        <div className="w-full max-w-[1240px] bg-black text-white p-6 sm:p-8 md:p-12 lg:p-[36px] rounded-tl-[20px] rounded-br-[20px] flex flex-col sm:flex-row justify-center items-center">
          {/* Left side text */}
          <div className="flex flex-col justify-start text-center sm:text-left">
            <h2 className="text-white text-[32px] sm:text-[38px] md:text-[64px] font-bold leading-[32px] sm:leading-[48px] md:leading-[64px] font-integral">
              STAY UP TO DATE FOR MORE OFFERS
            </h2>
          </div>

          {/* Right side input and subscribe button */}
          <div className="flex flex-col items-center gap-4 mt-4 sm:mt-0">
            <div className="flex items-center w-[250px] relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="absolute left-3 w-5 h-5 text-gray-500"
                viewBox="0 0 24 24"
              >
                <path d="M2 6.5a3.5 3.5 0 013.5-3.5h13a3.5 3.5 0 013.5 3.5v11a3.5 3.5 0 01-3.5 3.5h-13A3.5 3.5 0 012 17.5v-11zm3.5-1.5A1.5 1.5 0 004 6.5v11a1.5 1.5 0 001.5 1.5h13a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5h-13zm2 5.5a1 1 0 111 1H6.5a1 1 0 01-.5-.866V9.5zm4 0h7a1 1 0 010 2h-7a1 1 0 010-2zm-4.5 6h2a1 1 0 110 2h-2a1 1 0 110-2z" />
              </svg>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 pl-10 w-full rounded-full border-none"
              />
            </div>
            <button className="bg-white text-black py-3 px-8 rounded-full text-[16px] font-semibold">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        {/* Footer Content Section */}
        <div className="w-full bg-gray-100 text-black flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 py-8 gap-8">
          {/* About Us Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">About Us</h3>
            <p className="text-sm text-gray-700 max-w-[300px]">
              We are a leading provider of high-quality products. Our mission is to bring the best shopping experience to our customers worldwide.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.586 0 0 .586 0 1.325v21.351C0 23.413.586 24 1.325 24H12v-9h-3v-4h3V7.5c0-3 1.793-4.5 4.417-4.5 1.249 0 2.583.2 2.583.2v3h-1.5c-1.5 0-2 .931-2 1.981V11h4l-1 4h-3v9h6.675C23.413 24 24 23.413 24 22.676V1.325C24 .586 23.413 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.548 0 11.675-6.254 11.675-11.675 0-.178 0-.355-.012-.532A8.36 8.36 0 0022 5.92a8.19 8.19 0 01-2.356.646A4.114 4.114 0 0021.447 4.7a8.225 8.225 0 01-2.605.996 4.103 4.103 0 00-6.993 3.735A11.654 11.654 0 013.2 4.345a4.093 4.093 0 001.27 5.475A4.073 4.073 0 012.8 9.71v.051a4.105 4.105 0 003.292 4.021 4.093 4.093 0 01-1.852.07 4.104 4.104 0 003.835 2.85A8.233 8.233 0 012 18.362a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M21.172 0H2.828C1.27 0 0 1.27 0 2.828v18.344C0 22.73 1.27 24 2.828 24h18.344C22.73 24 24 22.73 24 21.172V2.828C24 1.27 22.73 0 21.172 0zm-9.744 18.566H7.848v-9.434h3.58v9.434zm-1.788-10.8h-.023c-1.203 0-1.982-.826-1.982-1.86 0-1.056.801-1.861 2.027-1.861 1.227 0 1.982.804 2.005 1.86-.001 1.034-.778 1.861-2.027 1.861zm12.143 10.8h-3.583v-5.053c0-1.21-.431-2.036-1.505-2.036-.822 0-1.311.553-1.528 1.084-.08.199-.101.477-.101.754v5.251h-3.584s.047-8.516 0-9.434h3.583v1.338c.478-.738 1.336-1.796 3.248-1.796 2.377 0 4.161 1.548 4.161 4.874v5.018z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mt-10">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Feature</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Payment</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
