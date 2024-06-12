import "../profile/profle-style.css";

function Profile() {
  return (
    <div className="profileinfo">
      <img src="/public/img/svg/svgUser.svg" alt="" />
      <input type="text" name="name" placeholder="Имя" />
      <br />
      <input type="text" name="surname" placeholder="Фамилия" />
      <br />
      <input type="text" name="patronymic" placeholder="Очество " />
      <br />
      <input type="email" name="email" placeholder="Почта " />
      <button classname="accept">Подтвердить</button>
    </div>
  );
}

export default Profile;
