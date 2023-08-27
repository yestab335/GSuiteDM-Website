import Link from "next/link"
import Image from "next/image"
import LogoImage from "@/public/images/original.png"

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="GSuiteDM">
      <Image src={LogoImage} alt="GSuiteDM Logo" height={32} width={32}></Image>
    </Link>
  )
}
