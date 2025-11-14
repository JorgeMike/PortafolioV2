import { Phone, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="container mx-auto flex justify-between items-center py-5 px-5 md:px-0 absolute top-0 left-0 right-0 z-50  backdrop-blur-md rounded-b-md">
      <p className="font-retro text-xl md:text-2xl">Dev!</p>

      <div className="hidden md:block">
        <ul>
          <li className="inline-block mx-2 hover:text-blue-500 cursor-pointer transition-colors border px-3 py-2 rounded-full">
            About Me
          </li>
          <li className="inline-block mx-2 hover:text-blue-500 cursor-pointer transition-colors border px-3 py-2 rounded-full">
            Experience
          </li>
          <li className="inline-block mx-2 hover:text-blue-500 cursor-pointer transition-colors border px-3 py-2 rounded-full">
            Projects
          </li>
          <li className="inline-block mx-2 hover:text-blue-500 cursor-pointer transition-colors border px-3 py-2 rounded-full">
            Contact
          </li>
        </ul>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <a
          href="tel:+5255123123123"
          className="inline-flex items-center gap-2 hover:text-blue-500 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span>55 123123123</span>
        </a>
        <ModeToggle />
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-80">
            <SheetHeader className="border-b">
              <SheetTitle className="font-retro text-xl">Menu</SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col gap-6 px-5">
              <a
                href="#about"
                className="text-lg hover:text-blue-500 transition-colors"
              >
                About Me
              </a>

              <a
                href="#experience"
                className="text-lg hover:text-blue-500 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-lg hover:text-blue-500 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-lg hover:text-blue-500 transition-colors"
              >
                Contact
              </a>

              {/* Phone in mobile menu */}
              <a
                href="tel:+5255123123123"
                className="flex items-center gap-2 text-lg hover:text-blue-500 transition-colors border-t"
              >
                <Phone className="w-5 h-5" />
                <span>55 123123123</span>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
