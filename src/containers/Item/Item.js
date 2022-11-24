import React, { useEffect, useState } from "react";
import { getCatById } from "../../Requests";
import { ItemContainer,
        ItemContent,
        ItemFooter }
        from "./Item.styled";
import ItemAddedPopup from "./ItemAddedPopup/ItemAddedPopup";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/slices";

const Item = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [popupOption, setPopupOption] = useState("");
    const [cat, setCat] = useState({});
    const [popup, setPopup] = useState(<></>);
    const [isShownPopup, setIsShownPopup] = useState(false);
    const dispatch = useDispatch();
    
    const id = useParams().id;

    useEffect(() => {
        const getCatAsync = async (id) => {
            const fetchedCat = await getCatById(id);
            setCat(fetchedCat == null ? {} : fetchedCat);
        } 
        getCatAsync(id);
    }, [id]);

    useEffect(() => setSelectedOption(cat.options ? cat.options[0] : ""), [cat]);

    const addToCart = async () => {
        dispatch(cartActions.addItemToCart({
            id,
            price: cat.price,
            option: selectedOption
        }));
        setIsShownPopup(true);
        await new Promise(r => setTimeout(r, 1700));
        setIsShownPopup(false);
    }
    
    useEffect(() => {
        if (isShownPopup) {
            setPopup(<ItemAddedPopup option={selectedOption} itemName={cat.title} isShown={isShownPopup} />);
            setPopupOption(selectedOption);
        } else {
            if (selectedOption === popupOption) {
                setPopup(<ItemAddedPopup option={selectedOption} itemName={cat.title} isShown={isShownPopup} />);
            } else {
                setPopup(<ItemAddedPopup option={popupOption} itemName={cat.title} isShown={isShownPopup} />);
                setPopupOption(selectedOption);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isShownPopup]);

    return(
        <ItemContainer>
            {popup}
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
                    <button className="addtocart-button" onClick={addToCart}>Add to cart</button>
                </div>
            </ItemFooter>
        </ItemContainer>
    );
}

export default Item;