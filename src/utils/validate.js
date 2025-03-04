export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  const isNameValid = name
    ? /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name.trim())
    : true;

  if (!isNameValid) return "Username is not valid";
  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
