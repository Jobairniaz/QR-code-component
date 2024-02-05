function App() {
  return (
    <div className="flex justify-center items-center bg-[#d5e1ef] h-screen">
      <div className="p-5 bg-white rounded-3xl m-6">
        <img
          className="flex rounded-2xl"
          src="/images/image-qr-code.png"
          width={340}
          alt="QR-code"
        />
        <div className="text-center max-w-[330px] p-2 pb-6">
          <p className="font-bold text-2xl pt-5 pb-4">
            Improve your front-end skills by building projects
          </p>
          <p className="font-sans text-lg text-gray-500">
            Scan the QR code to visit Frontend Mentor and take your coding to
            the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
