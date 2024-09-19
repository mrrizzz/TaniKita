import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image src="/logo.png" width={32} height={32} alt="TaniKita Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        TaniKita
      </span>
    </Link>
  );
}
