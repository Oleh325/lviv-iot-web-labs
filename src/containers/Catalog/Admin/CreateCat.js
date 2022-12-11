import React, { useState } from "react";
import { addCatSchema } from "../../../schemas";
import CustomInput from "../../Cart/Checkout/CustomInput";
import { CreateCatContainer, CreateCatTitle } from "./CreateCat.styled";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

const CreateCat = () => {
    const [cuteness, setCuteness] = useState(69);
    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();

    const onSubmit = async (values, actions) => {
        await axiosPrivate.post("/cats/", {
            title: values.title,
            description: values.description,
            cuteness: values.cuteness,
            weight: values.weight,
            price: values.price,
            color: values.color,
            options: values.options,
            imagesrc: values.imagesrc
        });
        actions.resetForm();
        navigate("/catalog");
    }

    const handleCutenessChange = (e) => {
        setCuteness(e.target.value);
    }

    return(
        <CreateCatContainer>
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
                <Form>
                <div className="inputs">
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
                    <label for="cuteness">Cuteness</label>
                    <div class="slidecontainer">
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
                    />
                </div>
                <div className="buttons">
                    <Link to="/catalog" className="back-button"><div>Go back</div></Link>
                    <button disabled={isSubmitting} type="submit" className="continue-button">Create cat</button>
                </div>
                </Form>
            )}
            </Formik>
        </CreateCatContainer>
    );
}

export default CreateCat;