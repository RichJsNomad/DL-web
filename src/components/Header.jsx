import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-first-line">
        <div className="icon-par">
          <div>
            <img className="pink-logo" src="../public/dlchat.png" alt="" />
          </div>

          <div>
            <div>
              <p>DL CHAT</p>
            </div>
            <div>
              <p>Admin</p>
            </div>
          </div>
        </div>

        <div className="users-par-div">
          <p className="users-par">Пользователи</p>
        </div>
      </div>

      <div className="buttons-container">
        <button className="search-button">Поиск</button>

        <button className="add-button">Добавить</button>

        <div className="five-btns">
          <button className="first-btn">««</button>
          <button className="second-btn">«</button>
          <button className="third-btn">10V</button>
          <button className="fourth-btn">»</button>
          <button className="fifth-btn">»»</button>
        </div>

        <button className="edit-button">Редактировать</button>
      </div>
      <div className="header-underline"></div>
    </div>
  );
};

export default Header;
