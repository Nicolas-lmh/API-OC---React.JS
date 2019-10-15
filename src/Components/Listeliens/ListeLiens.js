import React from "react";
import axios from "axios";
import "./listeliens.css";

export default class ListeLiens extends React.Component {
    state = {
        links: []
    };
    
    componentDidMount() {
        axios.get(`https://oc-jswebsrv.herokuapp.com/api/liens`).then(response => {
            this.setState({ links: response.data });
        })
    }

    render() {
        return(
            this.state.links.map(link => {
                const {id, url, titre, auteur} = link;
                return(
                    <div key={id} className ="link">
                        <h4><a href={url}>{titre}</a><span>{url}</span></h4>
                        <span>{auteur}</span>
                    </div>
                ) 
            })
        );
    }
}