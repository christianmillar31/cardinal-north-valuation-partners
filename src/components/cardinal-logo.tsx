import Image from 'next/image';

export default function CardinalLogo() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <svg
        viewBox="0 0 100 100"
        className="w-24 h-24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 90C30 90 15 75 15 55C15 35 30 20 50 20C70 20 85 35 85 55C85 75 70 90 50 90Z"
          fill="#C41E3A"
        />
        <path
          d="M45 40C45 35 55 35 55 40L55 50C55 55 65 55 65 60C65 65 55 70 50 70C45 70 35 65 35 60C35 55 45 55 45 50L45 40Z"
          fill="black"
        />
        <circle cx="45" cy="35" r="3" fill="black" />
      </svg>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">CARDINAL NORTH</h1>
        <h2 className="text-lg text-gray-700">VALUATION PARTNERS</h2>
      </div>
    </div>
  );
}
