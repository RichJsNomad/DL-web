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

        <div class="five-btns">
          <button class="first-btn">««</button>
          <button class="second-btn">«</button>
          <button class="third-btn">10V</button>
          <button class="fourth-btn">»</button>
          <button class="fifth-btn">»»</button>
        </div>

        <button className="edit-button">Редактировать</button>
      </div>
      <div className="header-underline"></div>
    </div>
  );
};

export default Header;
