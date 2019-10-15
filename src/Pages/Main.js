import React from 'react';
import "./main.css";
import Formulaire from '../Components/Formulaire/formulaire';
import ListeLiens from '../Components/Listeliens/ListeLiens';

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isFormDisplayed: false,
            isLinkConfirmed: false
        };
        this.addLinkClick = this.addLinkClick.bind(this);
        this.sendNewFormState = this.sendNewFormState.bind(this);
    }
    addLinkClick() {
        this.setState(state => ({
            isFormDisplayed: !state.isFormDisplayed
        }));
    }

    sendNewFormState(newFormState, confirm) {
        this.setState({isFormDisplayed: newFormState, isLinkConfirmed: confirm});
        setInterval(() => this.setState({isLinkConfirmed: false}), 2000)
    }

    render() {
        return(
            <div>
                <div>
                    <div>
                        <h1>Activité API</h1>
                    </div>
                    {this.state.isLinkConfirmed && <div className = "info">Le lien a bien été envoyé</div>}
                    {this.state.isFormDisplayed ? <Formulaire newFormState = {this.sendNewFormState} /> : <button onClick = {this.addLinkClick}>Ajouter un lien</button>}
                </div>
                <div>
                    <ListeLiens />
                </div>
            </div>
            
        );
    }
}