import React, { useState } from "react";
import { addCatSchema } from "../../../schemas";
import CustomInput from "../../Cart/Checkout/CustomInput";
import { CreateCatContainer, CreateCatTitle } from "./CreateCat.styled";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

const CreateCat = () => {
    const [cuteness, setCuteness] = useState(69);
    const [imagesrc, setImagesrc] = useState("");
    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();

    const onSubmit = async (values, actions) => {
        console.log(values.imagesrc);
        await axiosPrivate.post("/cats/", {
            title: values.title,
            description: values.description,
            cuteness,
            weight: values.weight,
            price: values.price,
            color: values.color,
            options: values.options,
            imagesrc
        });
        actions.resetForm();
        navigate("/catalog");
    }

    const handleCutenessChange = (e) => {
        setCuteness(e.target.value);
    }

    return(
        <CreateCatContainer className="flex-column">
            <CreateCatTitle>Create Cat</CreateCatTitle>
            <Formik initialValues={{
                title: "",
                description: "",
                cuteness: 69,
                weight: 0,
                price: 0,
                color: "",
                options: "",
                imagesrc: ""
            }}
            validationSchema={addCatSchema}
            onSubmit={onSubmit} >
            {({ isSubmitting }) => (
                <Form className="flex-column">
                <div className="inputs flex-column">
                    <CustomInput
                        label="Title"
                        name="title"
                        type="text"
                        placeholder="Enter cat name"
                    />
                        <CustomInput
                        label="Description"
                        name="description"
                        type="text"
                        placeholder="Enter cat description"
                    />
                    <label htmlFor="cuteness">Cuteness</label>
                    <div className="slidecontainer">
                        <input type="range" min="0" max="100" value={cuteness} className="create__input-cuteness" name="cuteness" onChange={handleCutenessChange} />
                        <div className="slidertext">{cuteness}%</div>
                    </div>
                    <div className="small-inputs">
                        <CustomInput
                            label="Weight"
                            name="weight"
                            type="number"
                            step="0.01"
                            placeholder="Enter cat weight"
                        />
                        <CustomInput
                            label="Price"
                            name="price"
                            type="number"
                            placeholder="Enter cat price"
                        />
                    </div>
                    <div className="small-inputs">
                        <CustomInput
                            label="Color"
                            name="color"
                            type="text"
                            placeholder="Enter cat color"
                        />
                        <CustomInput
                            label="Options"
                            name="options"
                            type="text"
                            placeholder="Enter cat options"
                        />
                    </div>
                    <CustomInput
                        label="Image source"
                        name="imagesrc"
                        type="text"
                        placeholder="Enter cat image source url"
                        value={imagesrc}
                        onChange={e => setImagesrc(e.target.value)}
                    />
                </div>
                { imagesrc !== "" &&
                <div className="image-preview flex-column">
                    <div className="image-preview-text">Image preview: </div>
                    <img src={imagesrc} alt="cat"></img>
                </div>}
                <div className="buttons">
                    <Link to="/catalog" className="button-white"><div>Go back</div></Link>
                    <button disabled={isSubmitting} type="submit" className="button-gray">Create cat</button>
                </div>
                </Form>
            )}
            </Formik>
        </CreateCatContainer>
    );
}

export default CreateCat;