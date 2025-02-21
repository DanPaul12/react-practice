import { useState } from "react";

function ProfileEditor({name, bio, onUpdate}){

    const [newName, setNewName] = useState('')
    const [newBio, setNewBio] = useState('')
    const [editable, setEditable] = useState(false)

    function onSubmit(e){
        e.preventDefault()
        onUpdate(newName, newBio)
        setNewName('')
        setNewBio('')
    }

    function makeEditable(){
        setEditable(prev => !prev)
    }

    return(
        <div>
            <p>{name}</p><br/>
            <p>{bio}</p><br/>

            <button onClick={makeEditable}>{editable ? 'Done Editing': 'Edit'}</button>

            {editable && 
            <form onSubmit={onSubmit}>
                <input onChange={(e)=> setNewName(e.target.value)} value={newName}></input>
                <input onChange={(e)=> setNewBio(e.target.value)} value={newBio}></input>
                <button type="submit">Submit</button>
            </form>}
        </div>
    )

}

function Profile(){
    const [name, setName] = useState('Gollum')
    const [bio, setBio] = useState('Underworld Dweller')

    function onUpdate(updatedName, updatedBio){
        setName(updatedName)
        setBio(updatedBio)
    }

    return(
        <ProfileEditor name= {name} bio = {bio} onUpdate={onUpdate}/>
    )
}

export default Profile;