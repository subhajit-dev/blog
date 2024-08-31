// import { registerSchema } from "@/utils/formSchema";
// import { RegisterFormType } from "@/utils/formType";
// import { sdk } from "@/utils/sdk";
// import { registerUser } from "@directus/sdk";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Button,
//   Card,
//   CardBody,
//   CardFooter,
//   CardHeader,
//   Input,
// } from "@nextui-org/react";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { BsEyeSlashFill } from "react-icons/bs";
// import { TbEyeFilled } from "react-icons/tb";

// const register = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => setIsVisible(!isVisible);
//   const router = useRouter();

//   const {
//     handleSubmit,
//     register,
//     formState: { errors, isSubmitting },
//   } = useForm<RegisterFormType>({ resolver: zodResolver(registerSchema) });

//   const registerFn = async (fData: RegisterFormType) => {
//     try {
//       await sdk.request(
//         registerUser(fData.email, fData.password, {
//           first_name: fData.first_name,
//           last_name: fData.last_name,
//         }),
//       );
//       await new Promise<void>((r) => setTimeout(r, 1000));
//       router.push("/auth/login");
//       // console.log(fData);
//     } catch (error) {
//       console.log("register Failed", error);
//     }
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit(registerFn)} noValidate>
//         <div className="flex h-[89dvh] flex-col items-center justify-center">
//           <Card className="min-w-[30%] p-4">
//             <CardHeader className="flex justify-center text-xl font-bold text-fuchsia-500">
//               Register Your Account
//             </CardHeader>
//             <CardBody className="space-y-2">
//               <Input
//                 size="sm"
//                 type="text"
//                 label="First Name"
//                 {...register("first_name")}
//                 errorMessage={errors.first_name?.message}
//                 isInvalid={!!errors.first_name?.message}
//               />
//               <Input
//                 size="sm"
//                 type="text"
//                 label="Last Name"
//                 {...register("last_name")}
//                 errorMessage={errors.last_name?.message}
//                 isInvalid={!!errors.last_name?.message}
//               />
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
//                 errorMessage={errors.first_name?.message}
//                 isInvalid={!!errors.first_name?.message}
//               />
//             </CardBody>
//             <CardFooter className="flex flex-wrap gap-2">
//               <Button className="w-full" color="secondary" type="submit">
//                 Register
//               </Button>
//               <div className="">
//                 Don't have an account?
//                 <Link href="/auth/login">
//                   <span className="font-medium text-blue-600"> Login</span>
//                 </Link>
//               </div>
//             </CardFooter>
//           </Card>
//         </div>
//       </form>
//     </>
//   );
// };

// export default register;
