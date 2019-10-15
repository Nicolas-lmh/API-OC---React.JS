import React from "react";
import axios from "axios";

export default class Formulaire extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            auteur: null,
            titre: null,
            url: null
        }
        this.setAuteurTitreUrlValue = this.setAuteurTitreUrlValue.bind(this)
        this.submitItAll = this.submitItAll.bind(this)
    }

    setAuteurTitreUrlValue(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({[name]: value})
    }

    submitItAll(event) {
        event.preventDefault();
        axios.post(`https://oc-jswebsrv.herokuapp.com/api/lien`, this.state);
        this.props.newFormState(false, true);
    }

    render() {
        return(
            <form autoComplete="off" onSubmit={this.submitItAll}>
                <input
                    type="text"
                    name = "auteur"
                    placeholder="Entrez votre nom"
                    size = {styles.nameSize}
                    style = {{marginRight: `${styles.marginRights}px`}}
                    onChange = {this.setAuteurTitreUrlValue}
                    required
                >
                </input>
                <input
                    type="text"
                    name = "titre"
                    placeholder="Entrez le titre du lien"
                    size ={styles.linkUrlSize}
                    style = {{marginRight: `${styles.marginRights}px`}}
                    onChange = {this.setAuteurTitreUrlValue}
                    required
                >
                </input>
                <input
                    type="text"
                    name = "url"
                    placeholder="Entrez l'URL du lien"
                    size ={styles.linkUrlSize}
                    style = {{marginRight: `${styles.marginRights}px`}}
                    onChange = {this.setAuteurTitreUrlValue}
                    required
                >
                </input>
                <button>Ajouter</button>
        </form>
        )
    }
}

const styles = {
    nameSize: 20,
    linkUrlSize: 40,
    marginRights: 5
}