import Header from "../../components/Header/Header";
// import ProjectsComponent from "../../components/ProjectsComponent";
import ProjectsSlider from "../../components/ProjectsSlider/ProjectsSlider";
import mainImg from "../../images/mainImg.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <section id="home">
        <div className="container">
          <div className="home__wrap">
            <div className="home-main">
              <div>
                <h1>Добро пожаловать в портфолио учеников по информатике!</h1>
                <p>
                  Здесь вы найдете лучшие работы учеников, созданные на уроках
                  информатики. Веб-сайты, программы, игры, анимации — всё это
                  результат их творчества, усердия и стремления к новым знаниям.
                </p>
                <p>
                  Наше портфолио — это не просто собрание проектов, а место, где
                  идеи оживают, а технологии помогают воплотить мечты в
                  реальность.
                </p>
              </div>
              <div>
                <img src={mainImg} alt="" />
              </div>
            </div>
            <div className="home-faq">
              <h6>Что вы найдете здесь?</h6>
              <ul>
                <li>Вдохновляющие проекты учеников</li>
                <li>Описания технологий, использованных в разработке</li>
                <li>Интерактивные демонстрации и исходные коды</li>
                <li>
                  Возможность увидеть, как школьники осваивают современные
                  IT-навыки
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <ProjectsSlider />
      </div>
    </>
  );
};

export default Home;
