import { useState } from "react";

function FormComponent(){

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: ''

    })

    function onChange(e){
        const {name, value} = e.target
        setFormData({...formData, [name]:value})
    }

    function onSubmit(e){
       e.preventDefault();
       if (!formData.firstname || !formData.lastname) {
        alert('Fill it out')
       return}

       alert(`${formData.firstname} ${formData.lastname} submitted!`)
    }


    return(
        <form onSubmit={onSubmit}>
            <input onChange={onChange} name='firstname' value={formData.firstname}></input><br/>
            <input onChange={onChange}  name="lastname" value={formData.lastname}></input>
            <p>First Name: {formData.firstname}</p><br/>
            <p>Last Name: {formData.lastname}</p>
            <button>Submit</button>
        </form>
    )
}

export default FormComponent