// import { isloggedin } from "@/utils/atom";
// import { loginSchema } from "@/utils/formSchema";
// import { LoginFormType } from "@/utils/formType";
// import { sdk } from "@/utils/sdk";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Button,
//   Card,
//   CardBody,
//   CardFooter,
//   CardHeader,
//   Input,
// } from "@nextui-org/react";
// import { useAtom } from "jotai";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { BsEyeSlashFill } from "react-icons/bs";
// import { TbEyeFilled } from "react-icons/tb";

// const login = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [login, setlogin] = useAtom(isloggedin);

//   const toggleVisibility = () => setIsVisible(!isVisible);
//   const router = useRouter();

//   const {
//     handleSubmit,
//     register,
//     formState: { errors, isSubmitting },
//   } = useForm<LoginFormType>({ resolver: zodResolver(loginSchema) });

//   const loginFn = async (fData: LoginFormType) => {
//     try {
//       await sdk.login(fData.email, fData.password, { mode: "session" });
//       await new Promise<void>((r) => setTimeout(r, 1000));
//       setlogin(true);
//       router.push("/");
//       // console.log(fData);
//     } catch (error) {
//       console.log("register Failed", error);
//     }
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit(loginFn)} noValidate>
//         <div className="flex h-[89dvh] flex-col items-center justify-center">
//           <Card className="min-w-[30%] p-4">
//             <CardHeader className="flex justify-center text-xl font-bold text-fuchsia-500">
//               Login Your Account
//             </CardHeader>
//             <CardBody className="space-y-2">
//               <Input
//                 size="sm"
//                 type="email"
//                 label="Email"
//                 {...register("email")}
//                 errorMessage={errors.email?.message}
//                 isInvalid={!!errors.email?.message}
//               />
//               <Input
//                 label="Password"
//                 size="sm"
//                 placeholder="Enter your password"
//                 endContent={
//                   <button
//                     className="focus:outline-none"
//                     type="button"
//                     onClick={toggleVisibility}
//                     aria-label="toggle password visibility"
//                   >
//                     {isVisible ? (
//                       <BsEyeSlashFill className="pointer-events-none text-2xl text-default-400" />
//                     ) : (
//                       <TbEyeFilled className="pointer-events-none text-2xl text-default-400" />
//                     )}
//                   </button>
//                 }
//                 type={isVisible ? "text" : "password"}
//                 className=""
//                 {...register("password")}
//                 errorMessage={errors.password?.message}
//                 isInvalid={!!errors.password?.message}
//               />
//             </CardBody>
//             <CardFooter className="flex flex-wrap gap-2">
//               <Button
//                 isLoading={isSubmitting}
//                 type="submit"
//                 className="w-full"
//                 color="secondary"
//               >
//                 Login
//               </Button>
//               <div className="">
//                 Don't have an account?
//                 <Link href="/auth/register">
//                   <span className="font-medium text-blue-600"> Register</span>
//                 </Link>
//               </div>
//             </CardFooter>
//           </Card>
//         </div>
//       </form>
//     </>
//   );
// };

// export default login;
