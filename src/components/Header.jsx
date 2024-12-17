import React from "react";

const Header = () => {
  return (
    <div className="">
      <div>
        <div>ICON</div>
        <div>
          <div>
            <p>DL CHat</p>
          </div>
          <div>
            <p>Admin</p>
          </div>
        </div>
      </div>

      <div class="underline">Пользователи</div>

      <div>
        <button className="search-button">Поиск</button>

        <button>Добавить</button>

        <div class="round-button-container">
          <button class="button-first">««</button>
          <button class="button-next">«</button>
          <button class="button-middle">10V</button>
          <button class="button-next">»</button>
          <button class="button-last">»»</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
