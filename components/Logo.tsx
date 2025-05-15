import Link from "next/link";

const Logo = () => {
  return (
    <div className="ml-5 md:ml-0">
      <Link
        href="/"
        className="
          bg-gradient-to-r from-cyan-600 to-cyan-200 bg-clip-text text-transparent
          font-bold text-lg xl:text-3xl italic font-henny-penny  
        "
      >
        CONSTRUCTION
        <hr className="bg-gradient-to-r from-cyan-200 to-cyan-900 h-1" />
      </Link>
    </div>
  );
};

export default Logo;
