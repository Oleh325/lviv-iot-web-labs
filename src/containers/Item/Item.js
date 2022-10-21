import React, { useEffect, useState } from "react";
import { ItemContainer,
        ItemContent,
        ItemFooter }
        from "./Item.styled";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Item = ( { catsArray } ) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [options, setOptions] = useState([]);

    const id = useParams().id;
    let cat;
    catsArray.forEach(element => {
        if (element.id.toString() === id.toString()) {
            cat = element;
        }
    });
    const title = cat.title;
    const description = cat.description;
    setOptions(cat.options);
    const cuteness = cat.cuteness;
    const weight = cat.weight;
    const color = cat.color;
    const price = cat.price;
    useEffect(() => setSelectedOption(options[0]), [options]);
    
    return(
        <ItemContainer>
            <ItemContent>
                <img src="https://cataas.com/cat" alt=""></img>
                <div className="content-specs">
                    <div className="options">
                        {options.map(option => {
                            const className = option === selectedOption ? "option selected" : "option";
                            return <button className={className} key={option} onClick={() => setSelectedOption(option)}>{option}</button>
                        })}
                    </div>
                    <div className="text-content">
                        <div className="title">{title}</div>
                        <div className="description">{description}</div>
                    </div>
                    <div className="specs">
                        <div>Cuteness: {cuteness}%</div>
                        <div>Weight: {weight}kg</div>
                        <div>Color: {color}</div>
                    </div>
                </div>
            </ItemContent>
            <ItemFooter>
                <div className="price">Price: {price}$</div>
                <div className="buttons">
                    <Link to="/catalog" className="back-button"><div>Go back</div></Link>
                    <button className="addtocart-button">Add to cart</button>
                </div>
            </ItemFooter>
        </ItemContainer>
    );
}

export default Item;