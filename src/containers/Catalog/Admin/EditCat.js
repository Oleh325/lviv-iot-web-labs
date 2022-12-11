import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { editCatSchema } from "../../../schemas";
import CustomInput from "../../Cart/Checkout/CustomInput";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { EditCatContainer, EditCatTitle } from "./EditCat.styled";

const EditCat = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [cuteness, setCuteness] = useState(69);
    const [weight, setWeight] = useState(0);
    const [price, setPrice] = useState(0);
    const [color, setColor] = useState("");
    const [options, setOptions] = useState("");
    const [imagesrc, setImagesrc] = useState("");
    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();

    const id = useParams().id;

    useEffect(() => {
        const getCatById = async (id) => {
            let cat = await axiosPrivate.get(`http://localhost:8080/api/cats/${id}`).then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
            return cat;
        }
        const getCatAsync = async (id) => {
            const fetchedCat = await getCatById(id);
            setTitle(fetchedCat?.title);
            setDescription(fetchedCat?.description);
            setCuteness(fetchedCat?.cuteness);
            setWeight(fetchedCat?.weight);
            setPrice(fetchedCat?.price);
            setColor(fetchedCat?.color);
            setOptions(fetchedCat?.options?.join(', '));
            setImagesrc(fetchedCat?.imagesrc);
        } 
        getCatAsync(id);
    }, [axiosPrivate, id]);

    const onSubmit = async (values, actions) => {
        await axiosPrivate.put(`/cats/${id}`, {
            title: values.title,
            description: values.description,
            cuteness: parseInt(values.cuteness),
            weight: values.weight,
            price: values.price,
            color: values.color,
            options: values.options,
            imagesrc: values.imagesrc
        });
        actions.resetForm();
        navigate(`/item/${id}`);
    }

    return(
        <EditCatContainer>
            <EditCatTitle>Edit Cat</EditCatTitle>
            <Formik initialValues={{
                title,
                description,
                cuteness,
                weight,
                price,
                color,
                options,
                imagesrc
            }}
            enableReinitialize
            validationSchema={editCatSchema}
            onSubmit={onSubmit} >
            {({ isSubmitting }) => (
                <Form>
                    <div className="inputs">
                        <CustomInput
                            label="Title"
                            name="title"
                            type="text"
                            placeholder="Enter cat name"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                            <CustomInput
                            label="Description"
                            name="description"
                            type="text"
                            placeholder="Enter cat description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <label for="cuteness">Cuteness</label>
                        <div class="slidecontainer">
                            <input type="range" min="0" max="100" value={cuteness} className="create__input-cuteness" name="cuteness"
                             onChange={(e) => setCuteness(e.target.value)} />
                            <div className="slidertext">{cuteness}%</div>
                        </div>
                        <div className="small-inputs">
                            <CustomInput
                                label="Weight"
                                name="weight"
                                type="number"
                                step="0.01"
                                placeholder="Enter cat weight"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                            <CustomInput
                                label="Price"
                                name="price"
                                type="number"
                                placeholder="Enter cat price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="small-inputs">
                            <CustomInput
                                label="Color"
                                name="color"
                                type="text"
                                placeholder="Enter cat color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            />
                            <CustomInput
                                label="Options"
                                name="options"
                                type="text"
                                placeholder="Enter cat options"
                                value={options}
                                onChange={(e) => setOptions(e.target.value)}
                            />
                        </div>
                        <CustomInput
                            label="Image source"
                            name="imagesrc"
                            type="text"
                            placeholder="Enter cat image source url"
                            value={imagesrc}
                            onChange={(e) => setImagesrc(e.target.value)}
                        />
                    </div>
                    { imagesrc !== "" &&
                    <div className="image-preview">
                        <div className="image-preview-text">Image preview: </div>
                        <img src={imagesrc} alt="cat"></img>
                    </div>}
                    <div className="buttons">
                        <Link to={"/item/" + id} className="back-button"><div>Go back</div></Link>
                        <button disabled={isSubmitting} type="submit" className="continue-button">Edit cat</button>
                    </div>
                </Form>
            )}
            </Formik>
        </EditCatContainer>
    );
}

export default EditCat;