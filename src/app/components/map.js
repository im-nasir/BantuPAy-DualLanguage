import Image from "next/image";

export default function Map() {
  return (
    <div className="flex flex-col items-center text-center pt-8 justify-center">
      <h1 className="text-5xl font-bold">Where We Operate From</h1>
      <p className="text-md font-medium text-gray-500">
        You Can Access The BantuPay Service If You Reside In:
      </p>
      <p className="text-md font-medium text-gray-500">
        Europe – UK – USA – Canada – D.R.Congo
      </p>
      <div className="w-full flex justify-center pt-4">
        <Image 
          src="/map.png" 
          alt="Bantu Pay"
          width={1200}  // Increased width for larger display
          height={800}  // Adjusted height proportionally
          className="w-full max-w-7xl rounded-lg"
        />
      </div>
    </div>
  );
}
