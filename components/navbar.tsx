import Link from "next/link"
import ModeToggle from "./mode-toggle"

function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex ">
      <div>
        <h1>cheet<span>KOD</span></h1>
      </div>

      <ul>
        <li>
          <Link href={"/data-structure"}>Data Structure</Link>
        </li>
        <li>
          <Link href={"/algorithm"}>Algorithm</Link>
        </li>
        <li>
          <Link href={"/javascript"}>Javascript</Link>
        </li>
      </ul>

      <div>
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar
