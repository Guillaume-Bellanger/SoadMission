import React, { Component } from "react";

export default class HeaderMain extends Component {
  render() {
    return (
      <div id="HeaderMain" className="col-12 ">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Présentation</h1>
            <p class="lead">
              Directrice et formatrice dans l'enseignement du premier degré, je
              souhaite apporter mon expertise du terrain et former les candidats
              aux attendus du concours dans le domaine du français et de la CSE.
              Mon objectif, vous préparer au mieux et viser l'admission. Les
              corrigés d'annales vous font douter car les contenus sont trop
              ambitieux ? Les ressources des programmes trop nombreuses ? Vous
              vous demandez ce qu'il faut retenir dans tout cela ? Faites le
              choix de cours clairs et concis.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
