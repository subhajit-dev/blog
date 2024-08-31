import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { LuLogOut } from "react-icons/lu";
// import Logout from "./Logout";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { useAtom } from "jotai";
import { isloggedin } from "@/utils/atom";

const Nav = () => {
  const [login, setlogin] = useAtom(isloggedin);
  return (
    <>
      <div className="flex items-center justify-between bg-slate-800/35 px-20 py-3 backdrop-blur-sm">
        <div className="">Blogs</div>
        <div className="flex items-center gap-4">
          <Link href="/" className="">
            All-Posts
          </Link>

          {login === true ? (
            <>
              <Link href="/addblog" className="">
                Add-Post
              </Link>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="solid" color="primary" className="font-bold">
                    Profile
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem
                    endContent={<FaUser size={25} />}
                    className="text-lg font-bold"
                  >
                    My Profile
                  </DropdownItem>

                  <DropdownItem
                    className="text-danger"
                    color="danger"
                    endContent={<LuLogOut size={25} />}
                  >
                    {/* <Logout /> */}
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </>
          ) : (
            <>
              <Link href="/auth/login">Login</Link>
              <Link href="/auth/register">SignUp</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
