export default function WhiteBoxLayout({ heading, subHeading, children }) {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center sm:py-10 bg-gray-100">
      <div className="w-full sm:max-w-lg px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <header className="py-16 font-bold text-center">
          <h1 className="text-3xl">{heading}</h1>
          {subHeading && <h2 className="text-2xl">{subHeading}</h2>}
        </header>
        {children}
      </div>
    </div>
  );
}
