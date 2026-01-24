import React from 'react'

export default function userFormValidation(name, email, place) {

        const formData = {name, email, place};
        const errorValidation = {}

        if(formData.name.trim() === ""){
            errorValidation.name = "Name is required";
        }else if(formData.name.length < 3){
            errorValidation.name = "Name must be at least 3 characters";
        }

        if(formData.email.trim() === ""){
            errorValidation.email = "Email is required";
        }
        if(formData.place.trim() === ""){
            errorValidation.place = "Place is required";
        }

        return {errorValidation, formData};
        
}
