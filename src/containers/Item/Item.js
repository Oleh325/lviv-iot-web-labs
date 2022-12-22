import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { ItemContainer,
        ItemContent,
        ItemEmpty,
        ItemFooter }
        from "./Item.styled";
import ItemAddedPopup from "./ItemAddedPopup/ItemAddedPopup";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/slices/cartSlice";

const Item = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [popupOption, setPopupOption] = useState("");
    const [cat, setCat] = useState({});
    const [popup, setPopup] = useState(<></>);
    const [isShownPopup, setIsShownPopup] = useState(false);
    const [isCatLoaded, setIsCatLoaded] = useState(true);
    const dispatch = useDispatch();
    const axiosPrivate = useAxiosPrivate();
    const [editCat, setEditCat] = useState(<></>);
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const id = useParams().id;

    useEffect(() => {
        auth.roles?.find(role => role === "ADMIN")
        ? setEditCat(<button className="edit-cat" onClick={() => navigate(`/editcat/${id}`)}><div className="text">Edit</div></button>)
        : setEditCat(<></>);
    }, [auth.roles, navigate, id]);

    useEffect(() => {
        const getCatById = async (id) => {
            let cat = await axiosPrivate.get(`/cats/${id}`).then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
            return cat;
        }
        const getCatAsync = async (id) => {
            const fetchedCat = await getCatById(id);
            setCat(fetchedCat == null ? {} : fetchedCat);
            setIsCatLoaded(fetchedCat == null ? false : true);
        } 
        getCatAsync(id);
    }, [id, axiosPrivate]);

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
        <ItemContainer className="flex-column">
            {popup}
            {isCatLoaded &&
            <ItemContent>
                <img src={cat.imagesrc} alt=""></img>
                <div className="content-specs flex-column">
                    <div className="options">
                        {cat.options?.map(option => {
                            const className = option === selectedOption ? "option selected" : "option";
                            return <button className={className} key={option} onClick={() => setSelectedOption(option)}>{option}</button>
                        })}
                    </div>
                    <div className="text-content flex-column">
                        <div className="title">{cat.title}</div>
                        <div className="description">{cat.description}</div>
                    </div>
                    <div className="specs">
                        <div>Cuteness: {cat.cuteness}%</div>
                        <div>Weight: {cat.weight}kg</div>
                        <div>Color: {cat.color}</div>
                    </div>
                </div>
            </ItemContent>}
            {editCat}
            {isCatLoaded &&
            <ItemFooter>
                <div className="price">Price: {cat.price}$</div>
                <div className="buttons">
                    <Link to="/catalog" className="button-white"><div>Go back</div></Link>
                    <button className="button-gray" onClick={addToCart}>Add to cart</button>
                </div>
            </ItemFooter>}
            {!isCatLoaded &&
            <ItemEmpty className="flex-column">
                <div className="empty-title">Item not found!</div>
                <Link to="/catalog" className="button-gray"><div>Catalog</div></Link>
            </ItemEmpty>}
        </ItemContainer>
    );
}

export default Item;