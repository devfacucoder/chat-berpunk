import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    nickname: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    idNum: {
      type: String,
      unique: true,
      required: true,
    },
    contacts: [
      {
        idNum: String,
      },
    ],
  },
  { timestamps: true }
);

// 🔥 Hashear la contraseña automáticamente antes de guardar
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Evita re-hash

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// 🔑 Método para comparar contraseña en login
userSchema.methods.comparePassword = async function (passwordIngresada) {
  return await bcrypt.compare(passwordIngresada, this.password);
};

export default model("User", userSchema);
