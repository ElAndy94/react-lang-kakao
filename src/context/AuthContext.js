import React, { createContext } from "react";

export const AuthContext = createContext();

export const KakaoAuthProvider = ({ children }) => {
  const onLogin = () => {
    window.Kakao.Auth.login({
      scope: "profile_nickname, account_email",
      success: function (authObj) {
        console.log(authObj);
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            const kakao_account = res.kakao_account;
            console.log(kakao_account);
            // setAuth(kakao_account);
          },
        });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  const onLogout = () => {
    if (!window.Kakao.Auth.getAccessToken()) {
      console.log("Not logged in.");
      return;
    }
    window.Kakao.Auth.logout(function () {
      console.log(window.Kakao.Auth.getAccessToken());
    });
  };

  const unLink = () => {
    if (!window.Kakao.Auth.getAccessToken()) {
      console.log("Not logged in.");
      return;
    }
    window.Kakao.API.request({
      url: '/v1/user/unlink',
      success: function(response) {
        console.log(response);
      },
      fail: function(error) {
        console.log(error);
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        onLogin,
        onLogout,
        unLink
        // isSignedIn,
        // fetchWithRefresh,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default KakaoAuthProvider;
