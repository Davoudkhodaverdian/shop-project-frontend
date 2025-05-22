// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/fundamental/inner-app-server/mongooose/connectToDatabase";
import User, { IUser } from "@/fundamental/inner-app-server/mongooose/models/user";
import { createToken, transform } from "@/fundamental/inner-app-server/fundamental";
import { validators } from "@/fundamental/inner-app-server/auth/login";
import { requiredUserData } from "@/fundamental/inner-app-server/auth";
import { validateRequest } from "@/fundamental/inner-app-server/middlewares/validateRequest";
import { corsMiddleware } from "../../middleware/cors";
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest) {
    try {
        const corsResponse = corsMiddleware(req);
        if (corsResponse.status === 403) return corsResponse;
        await connectToDatabase();
        const { email, password } = await req.json();

        // Execute validation middleware
        const validationResponse = await validateRequest<Partial<IUser>>({ body: { email, password } }, validators);
        if (validationResponse) return validationResponse;

        // Check the email is already registered or not
        const user = await User.findOne({ email }).select('+password');
        // const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return NextResponse.json({
                error: {
                    message: 'چنین ایمیلی ثبت نشده است، لطفا ثبت نام کنید',
                    response: { message: 'This email is not found!' },
                },
                status: 400
            }, { status: 400 });
        }

        // Verify password using the bcrypt to compare hashed password
        const compare = await bcrypt.compare(password, user?.password);
        if (!compare) {
            return NextResponse.json({
                error: {
                    response: { message: "The password is incorrect" },
                    message: 'پسورد وارد شده صحیح نمی باشد',
                },
                status: 400
            }, { status: 400 });
        }
        // Create token and send data
        return NextResponse.json({
            message: 'You have successfully logged in.',
            response: { data: { ...transform<IUser>(user, requiredUserData), token: createToken(user._id as string) } },
            status: 200
        }, { status: 200 });
    } catch (error: unknown) {
        return NextResponse.json({
            error: {
                message: 'متاسفانه خطایی رخ داده است',
                response: error,
            },
            status: 500
        }, { status: 500 });
    }
}
