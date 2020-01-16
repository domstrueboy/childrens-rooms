import * as argon2 from 'argon2';

export async function signUp(email, password, name) {
  const passwordHashed = await argon2.hash(password);

  const userRecord = await UserModel.create({
    password: passwordHashed,
    email,
    name,
  });
  return {
    user: {
      email: userRecord.email,
      name: userRecord.name,
    },
  };
}

export async function login() {
  return {};
}
