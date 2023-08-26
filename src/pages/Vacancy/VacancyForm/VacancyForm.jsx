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
          <h2 className={style.subtitle}>Название вакансии</h2>
          <input />
        </div>

        <div className={style.formWrapper}>
          <div className={style.section}>
            <span className={style.subtitle}>Тип занятости</span>
            <input className={style.sectionMenu} type="text" />
          </div>
          <div className={style.section}>
            <span className={style.subtitle}>Оклад, руб</span>
            <div>
              <input className={style.sectionMenu} type="text" />
              <input className={style.sectionMenu} type="text" />
            </div>
          </div>
          <div className={style.section}>
            <span className={style.subtitle}>Место работы</span>
            <input className={style.sectionMenu} type="text" />
          </div>
          <div className={style.section}>
            <span className={style.subtitle}>Город</span>
            <input className={style.sectionMenu} type="text" />
          </div>
        </div>

        <div className={style.form}>
          <h2 className={style.subtitle}>Требования</h2>
          <input />
        </div>

        <div className={style.form}>
          <h2 className={style.subtitle}>Задачи</h2>
          <input />
        </div>

        <div className={style.form}>
          <h2 className={style.subtitle}>Условия</h2>
          <input />
        </div>

        <h1>Компания</h1>
        <div className={style.form}>
          <h2 className={style.subtitle}>Название компании</h2>
          <input />
        </div>

        <h1>Контактная информация</h1>
        <div className={style.form}>
          <h2 className={style.subtitle}>Почта для соискателей</h2>
          <input />
        </div>

        <button>Разместить</button>
      </div>
    </div>
  );
};

export default VacancyForm;
