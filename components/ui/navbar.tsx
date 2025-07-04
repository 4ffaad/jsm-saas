import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/ui/navitems";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={40}
            height={40}
          />
        </div>
      </Link>

      <div className="flex items-center gap-8">
        <NavItems />

        <SignedOut>
          <SignInButton>
            <button className="btn-signin"> Sign In</button>
            </SignInButton>
        </SignedOut>

        <SignedIn>
          <div>
            <UserButton />
          </div>
        </SignedIn>
      </div> 
    </nav>   
  );
};

export default Navbar;
