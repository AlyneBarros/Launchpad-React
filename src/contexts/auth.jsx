import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.user === JSON.parse(userToken).user
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const signin = (username, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.filter((user) => user.user === username);

    if (hasUser?.length) {
      if (hasUser[0].user === username && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ user: username, token }));
        setUser({ user: username, password });
        return;
      } else {
        return "Usuário ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  // const signup = (username, password) => {
  //   const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

  //   const hasUser = usersStorage?.filter((user) => user.user === username);

  //   if (hasUser?.length) {
  //     return "Já tem uma conta com esse usuário";
  //   }

  //   let newUser;

  //   if (usersStorage) {
  //     newUser = [...usersStorage, { user: username, password }];
  //   } else {
  //     newUser = [{ user: username, password }];
  //   }

  //   localStorage.setItem("users_bd", JSON.stringify(newUser));

  //   return;
  // };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
