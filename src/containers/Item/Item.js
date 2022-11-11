import React, { useEffect, useState } from "react";
import { getCatById } from "../../Requests";
import { ItemContainer,
        ItemContent,
        ItemFooter }
        from "./Item.styled";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Item = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [cat, setCat] = useState({});
    
    const id = useParams().id;

    useEffect(() => {
        const getCatAsync = async (id) => {
            setCat(await getCatById(id).then(() => {
                
            }));
        } 
        getCatAsync(id);
    }, [id]);

    useEffect(() => setSelectedOption(cat.options ? cat.options[0] : ""), [cat]);
    
    return(
        <ItemContainer>
            <ItemContent>
                <img src={cat.imagesrc} alt=""></img>
                <div className="content-specs">
                    <div className="options">
                        {cat.options?.map(option => {
                            const className = option === selectedOption ? "option selected" : "option";
                            return <button className={className} key={option} onClick={() => setSelectedOption(option)}>{option}</button>
                        })}
                    </div>
                    <div className="text-content">
                        <div className="title">{cat.title}</div>
                        <div className="description">{cat.description}</div>
                    </div>
                    <div className="specs">
                        <div>Cuteness: {cat.cuteness}%</div>
                        <div>Weight: {cat.weight}kg</div>
                        <div>Color: {cat.color}</div>
                    </div>
                </div>
            </ItemContent>
            <ItemFooter>
                <div className="price">Price: {cat.price}$</div>
                <div className="buttons">
                    <Link to="/catalog" className="back-button"><div>Go back</div></Link>
                    <button className="addtocart-button">Add to cart</button>
                </div>
            </ItemFooter>
        </ItemContainer>
    );
}

export default Item;