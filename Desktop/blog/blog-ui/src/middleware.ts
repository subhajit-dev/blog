// import jwt from "jsonwebtoken";
// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";

// // This function can be marked `async` if using `await` inside
// export const middleware = async (request: NextRequest) => {
//   const cookie = request.cookies.get("directus_session_token")?.value;

//   if (cookie !== undefined) {
//     let token = jwt.decode(cookie);

//     console.log(token);

//     if (token === null) {
//       const customResponse = NextResponse.redirect(
//         new URL("/auth/login", request.nextUrl),
//       );

//       customResponse.cookies.delete("directus_session_token");

//       // customResponse.cookies.set("directus_session_token", "");

//       return customResponse;
//     } else {
//       // return NextResponse.redirect(new URL("/addblog", request.nextUrl));
//     }
//   } else {
//     return NextResponse.redirect(new URL("/", request.nextUrl));
//   }

//   return NextResponse.next();
// };

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ["/addblog"],
// };
