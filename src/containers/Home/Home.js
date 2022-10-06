import React from "react";
import { HomeContainer, Heading, TextContent, Title, Description, ContentCats, Tiles } from "./Home.styled";
import Tile from "./Tile/Tile";
import cats from "../../images/cats.jpg";
import cat1 from "../../images/cat1.jpg";
import cat2 from "../../images/cat2.jpg";
import cat3 from "../../images/cat3.jpg";

const tileDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat";

const Home = () => {
    return(
        <HomeContainer>
            <Heading>
            <img src={cats} alt={"cats"}></img>
            <TextContent>
                <Title>Heading</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</Description>
            </TextContent>
            </Heading>
            <ContentCats>
                <Tiles>
                    <Tile image={cat1} title="Tile 1 heading" description={tileDesc} id={1} />
                    <Tile image={cat2} title="Tile 2 heading" description={tileDesc} id={2} />
                    <Tile image={cat3} title="Tile 3 heading" description={tileDesc} id={3} />
                </Tiles>
                <button>View more</button>
            </ContentCats>
        </HomeContainer>
    );
};

export default Home;