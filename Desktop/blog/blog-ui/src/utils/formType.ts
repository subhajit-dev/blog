import { z } from "zod";
import { loginSchema, registerSchema } from "./formSchema";

export type LoginFormType = z.infer<typeof loginSchema>;
export type RegisterFormType = z.infer<typeof registerSchema>;
