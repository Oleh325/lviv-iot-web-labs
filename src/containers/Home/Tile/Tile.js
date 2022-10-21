import React from "react";
import { TileContainer } from "./Tile.styled";

const Tile = ( { image, title, description, id, className="" } ) => {
    return (
        <TileContainer className={className}>
            <img src={image} alt={`cat${id}`} className="cat"></img>
            <div className="tile-title">{title}</div>
            <div className="tile-description">{description}</div>
        </TileContainer>
    );
}

export default Tile;