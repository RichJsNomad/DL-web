import React from "react";

function Login() {
  return (
    <div className="container">
      <div className="chat-admin">
        <p>DL CHAT</p>
        <p>Admin</p>
      </div>

      <div className="round-icon">
        <img className="icon-itself" src="./public/dlchat.png" alt="" />
      </div>

      <div className="inputs">
        <input
          type="text"
          placeholder="Email или номер телефона"
          className="input-fields"
        />
        <input type="text" placeholder="Пароль" className="input-fields" />
      </div>
      <div className="enter-button-div">
        <button className="enter-button">Войти</button>
      </div>
    </div>
  );
}

export default Login;
