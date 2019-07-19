import React from 'react';
import confLogo from '../images/logo-ag.png'
import './Styles/ProfileStyle.css';


class Profile extends React.Component{

    render(){
        return (
            //contenedor de mi card
            <div className="Profile">
                {/*encabezado del perfil*/}
                <div className="Profile__header">
                    <img className="Profile__logo" src={confLogo} alt="Logo de la academia geek"/>
                </div>
                {/*Nombre de usuario y su avatar*/ }
                <div className="Profile__section-name">
                    <img className="Profile__avatar" src="https://eafitrequisitos.s3.us-east-2.amazonaws.com/john.png" alt="Avatar del usuario" />
                    <h1>Mario Alejandro <br/> Ortega Alzate</h1>
                </div>
                {/*Informacion profesional del usuario*/ }
                <div className="profile__section-info">
                    <h2 >Front_end Developer</h2>
                    <div>@alejandroortega2001</div>
                </div>
                {/*Etiqeuta que hace mención a la geek conferencia*/ }
                <div className="Profile__footer">
                    #geekconf
                </div>
            </div>
        );
    }    

}

export default Profile;