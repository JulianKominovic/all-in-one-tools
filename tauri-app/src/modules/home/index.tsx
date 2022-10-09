import { Divider } from "primereact/divider";
import { Card } from "primereact/card";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import routes, { IRoutes } from "../../config/routes";
import groupBy from "../../lib/groupBy";
import styles from "./index.module.css";
type Props = {};
const {
  home__layout,
  flex,
  hero,
  dir__col,
  card,
  divider,
  mx_auto,
  gap_4,
  my_2,
} = styles;
const Home = ({}: Props) => {
  return (
    <div className={`${home__layout} ${flex} ${dir__col}`}>
      <img height={"100"} src={logo} alt="Toolbox logo" />
      <h4 className={`${mx_auto} ${my_2}`}>All your tools in one place</h4>
      <main className={hero}>
        {groupBy(Object.values(routes), "category").map((items: IRoutes[]) => {
          const category = items[0].category;
          return (
            <div key={category}>
              <Divider type="dashed" align="left" className={divider}>
                <span className="p-tag"> {category}</span>
              </Divider>
              <section className={`${flex} ${gap_4}`}>
                {items.map(({ description, title, url }) => {
                  return (
                    <NavLink to={url}>
                      <Card className={card} title={title}>
                        {description}
                      </Card>
                    </NavLink>
                  );
                })}
              </section>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Home;
