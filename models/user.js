import {Schema, model, models} from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        match:[/^[a-zA-Z]+$/,"Name should be letters only"]
    },
    email: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
    },
    
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = models.User || model("User", userSchema);
export default User;