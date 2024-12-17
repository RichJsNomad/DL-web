import React from "react";

const LoginError = () => {
  return (
    <div className="container">
      <div className="chat-admin">
        <p>DL CHAT</p>
        <p>Admin</p>
      </div>

      <div className="round-icon">
        <img className="icon-itself" src="./public/dlchat.png" alt="" />
      </div>

      <div className="error">
        <p className="error-text">Неверный логин и пароль</p>
      </div>

      <div className="inputs">
        <input
          type="text"
          placeholder="Email или номер телефона"
          className="input-field1"
        />
        <input type="text" placeholder="Пароль" className="input-field2" />
      </div>
      <div className="enter-button-div">
        <button className="enter-button">Войти</button>
      </div>
    </div>
  );
};

export default LoginError;
