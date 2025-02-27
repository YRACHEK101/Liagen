import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="text-4xl font-semibold text-black">
      Liagen
    </Link>
  );
}

export default Logo;