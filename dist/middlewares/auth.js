import { User } from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";
import { TryCatch } from "./error.js";
//Middleware to make sure only admin can access
export const adminOnly = TryCatch(async (req, res, next) => {
    const { id } = req.query;
    if (!id)
        return next(new ErrorHandler("Please provide a valid id", 401));
    const user = await User.findById(id);
    if (!user)
        return next(new ErrorHandler("User not found", 404));
    if (user.role !== "admin")
        return next(new ErrorHandler("Only admin can access", 401));
    return next();
    next();
});
