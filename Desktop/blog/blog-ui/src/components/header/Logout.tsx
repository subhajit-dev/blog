// import { isloggedin } from "@/utils/atom";
// import { sdk } from "@/utils/sdk";
// import { logout } from "@directus/sdk";
// import { useAtom } from "jotai";
// import { useRouter } from "next/router";

// const Logout = () => {
//   const [login, setlogin] = useAtom(isloggedin);

//   const router = useRouter();

//   const logoutFn = async () => {
//     try {
//       await sdk.request(logout("", "session"));
//       setlogin(false);
//       router.replace("/");
//     } catch (error) {
//       console.log("logout failed", error);
//     }
//   };
//   return (
//     <>
//       <button className="text-lg font-bold" onClick={logoutFn}>
//         LogOut
//       </button>
//     </>
//   );
// };

// export default Logout;
