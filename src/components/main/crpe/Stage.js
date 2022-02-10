import React, { Component } from "react";

export default class Cards extends Component {
  render() {
    return (
      <div class="row row-cols-1 row-cols-md-3 g-4 b">
        <div class="col">
          <div class="card h-100 flex-fill">
            <div class="card-body">
              <h4 class="card-title">Stage Decembre 590€</h4>
              <p class="card-text">
                Accès aux cours en direct et aux replays Possibilité de payer
                jusqu'à 6 fois
              </p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  Préparation à l’épreuve écrite de français
                </li>
                <li class="list-group-item">
                  Inscription de fait aux stages intensifs
                </li>
                <li class="list-group-item">
                  Préparation à l’épreuve de leçon de français-didactique
                </li>
                <li class="list-group-item">
                  Préparation à l’épreuve de CSE-motivation
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 flex-fill">
            <div class="card-body">
              <h4 class="card-title">Stage Devrier 590€</h4>
              <p class="card-text">
                Accès aux cours en direct et aux replays Possibilité de payer
                jusqu'à 6 fois
              </p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  Préparation à l’épreuve écrite de français
                </li>
                <li class="list-group-item">
                  Inscription de fait aux stages intensifs
                </li>
                <li class="list-group-item">
                  Préparation à l’épreuve de leçon de français-didactique
                </li>
                <li class="list-group-item">
                  Préparation à l’épreuve de CSE-motivation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
