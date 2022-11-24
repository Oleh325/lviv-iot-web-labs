import axios from 'axios';

export const getCatById = async (id) => {
    let cat = await axios.get(`http://localhost:8080/api/cats/${id}`).then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log(error);
    });
    return cat;
}

export const getCats = async () => {
    let err = "";
    let cats = await axios.get(`http://localhost:8080/api/cats/`).then((response) => {
        return response.data._embedded?.cats?.map(cat => {
            cat.hidden = "";
            return cat;
        });
    })
    .catch((error) => {
        err = error.message;
    });
    return [cats, err];
}

export const getCatsWithFilters = async (cuteness, color, weight) => {
    let filters = "";
    let err = "";
    if (cuteness !== "all") {
        if (filters === "") {
            filters += `cuteness=${cuteness}`
        } else {
            filters += `&cuteness=${cuteness}`
        }
    }
    if (color !== "all") {
        if (filters === "") {
            filters += `color=${color}`
        } else {
            filters += `&color=${color}`
        }
    }
    if (weight !== "all") {
        if (filters === "") {
            filters += `weight=${cuteness}`
        } else {
            filters += `&weight=${cuteness}`
        }
    }
    if (filters === "") {
        return getCats();
    } else {
        let cats = await axios.get(`http://localhost:8080/api/cats/filters?${filters}`)
        .then((response) => {
            return response.data._embedded?.cats?.map(cat => {
                cat.hidden = "";
                return cat;
            });
        })
        .catch((error) => {
            err = error;
        });
        return [cats, err];
    }
}

export const sendEmail = async ( { title, body, receiver } ) => {
    // sending email logic
}