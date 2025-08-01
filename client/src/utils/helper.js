export const validationEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const userLoggedIn = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  console.log("hello");
  return isAuthenticated;
};
