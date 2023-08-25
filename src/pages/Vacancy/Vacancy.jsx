import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import VacancyCard from "./VacancyCard/VacancyCard";
import VacancyFilter from "./VacancyFilter/VacancyFilter";
import VacancyForm from "./VacancyForm/VacancyForm";
import style from "./vacancy.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setActiveVacancyForm } from "../../redux/navBarSlice";

const Vacancy = () => {
  const dispatch = useDispatch();
  const { activeVacancyForm, setNavItemId } = useSelector((state) => state.navBar);
  const createClick = () => {
    dispatch(setActiveVacancyForm(true));
  };

  // ???

  useEffect(() => {
    dispatch(setActiveVacancyForm(false));
  }, [setNavItemId]);

  // ???

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Navbar />

        <div className={style.vacancy}>
          {activeVacancyForm ? (
            <VacancyForm />
          ) : (
            <div>
              <div className={style.info}>
                <h3>Вакансии</h3>
                <p onClick={createClick}>Разместить вакансию</p>
              </div>
              <div className={style.content}>
                <div className={style.main}>
                  {[...new Array(2)].map((item, index) => (
                    <VacancyCard item={item} key={index} />
                  ))}
                </div>
                <VacancyFilter />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Vacancy;
