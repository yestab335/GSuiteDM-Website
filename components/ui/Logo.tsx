import Link from "next/link"
import Image from "next/image"
import LogoImage from "@/public/images/original.png"

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image src={LogoImage} alt="GSuiteDM Logo"></Image>
    </Link>
  )
}
