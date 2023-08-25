import style from "./vacancyform.module.scss";

const VacancyForm = () => {
  const city = [
    "Москва",
    "Санкт-Петербург",
    "Новосибирск",
    "Екатеринбург",
    "Казань",
    "Нижний Новгород",
    "Красноярск",
    "Челябинск",
    "Самара",
    "Уфа",
    "Ростов-на-Дону",
    "Краснодар",
    "Омск",
    "Воронеж",
    "Пермь",
    "Волгоград",
  ];
  const workplace = ["Офис", "Удалённо"];
  const type = ["Полная", "Частичная"];
  return (
    <div className={style.wrapper}>
      <div className={style.vacancyForm}>
        <h1>Добавить вакансию</h1>

        <div className={style.form}>
          <h2>Название вакансии</h2>
          <input />
        </div>

        <div className={style.formWrapper}>
          
        </div>

        <div className={style.form}>
          <h2>Требования</h2>
          <input />
        </div>

        <div className={style.form}>
          <h2>Задачи</h2>
          <input />
        </div>

        <div className={style.form}>
          <h2>Условия</h2>
          <input />
        </div>

        <h1>Компания</h1>
        <div className={style.form}>
          <h2>Название компании</h2>
          <input />
        </div>

        <h1>Контактная информация</h1>
        <div className={style.form}>
          <h2>Почта для соискателей</h2>
          <input />
        </div>

        <button>Разместить</button>
      </div>
    </div>
  );
};

export default VacancyForm;
