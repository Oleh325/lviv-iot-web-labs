import React from "react";
import { HomeContainer } from "./Home.styled";
import Tile from "./Tile/Tile";
import cats from "../../images/cats.jpg";
import cat1 from "../../images/cat1.jpg";
import cat2 from "../../images/cat2.jpg";
import cat3 from "../../images/cat3.jpg";

const tileDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat";

const Home = () => {
    return(
        <HomeContainer>
            <section className="heading">
            <img src={cats} alt={"cats"}></img>
            <div className="text-content">
                <div className="text-content-title">Heading</div>
                <div className="text-content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</div>
            </div>
            </section>
            <div className="content-cats">
                <section className="tiles">
                    <Tile image={cat1} title="Tile 1 heading" description={tileDesc} id={1} />
                    <Tile image={cat2} title="Tile 2 heading" description={tileDesc} id={2} />
                    <Tile image={cat3} title="Tile 3 heading" description={tileDesc} id={3} />
                </section>
                <button>View more</button>
            </div>
        </HomeContainer>
    );
};

export default Home;