import React, { useState, useEffect} from 'react';
import "./style.css"

function DevForm({onSubmit}){

    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [techs, setTechs] = useState('')
    const [github_username,setGithub_username]  = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLatitude(latitude)
            setLongitude(longitude)
    
          },
          (err) => {
            console.log(err)
          },
          {
            timeout: 30000,
          }
        )
      }, []);

    async function handleSubmit(e){
        e.preventDefault();
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
          });
        setGithub_username("")
        setTechs("")
    } 
    return(
        <form onSubmit={handleSubmit}>
          <div name="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required value={github_username} onChange={e => setGithub_username(e.target.value)} />
          </div>
          <div name="input-block">
            <label htmlFor="techs">technologias</label>
            <input name="techs" id="techs" required value= {techs} onChange={e => setTechs(e.target.value)} />
          </div>

          <div name="input-group">
            <label htmlFor="latitude" value={latitude}>latitude</label>
            <input type="number" step="any" name="latitude" id="latitude" required onChange={e => setLatitude(e.target.value)} />
            <label htmlFor="longitude" value={longitude}>longitude</label>
            <input type="number" step="any" name="longitude" id="longitude" required onChange={e => setLongitude(e.target.value)} />
          </div>
          <button type="submit">Salvar</button>
        </form>
    )

}


export default DevForm