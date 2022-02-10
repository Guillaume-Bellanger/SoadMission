import React, { Component } from "react";

export default class Cards extends Component {
  render() {
    return (
      <div class="row row-cols-1 row-cols-md-3 g-4 b">
        <div class="col">
          <div class="card h-100 flex-fill">
            <div class="card-body">
              <h4 class="card-title">Pack Globale 590€</h4>
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
              <h4 class="card-title">Pack Français 390€</h4>
              <p class="card-text">
                Accès aux cours en direct et aux replays Possibilité de payer
                jusqu'à 6 fois
              </p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Étude de la langue, lexique</li>
                <li class="list-group-item">
                  Raisonnement rédigé et structuré
                </li>
                <li class="list-group-item">Apport méthodologique</li>
                <li class="list-group-item">
                  Approche par genre littéraire avec des fiches de lecture pour
                  compléter votre culture littéraire
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 flex-fill">
            <div class="card-body">
              <h4 class="card-title">Pack Didactique 299€</h4>
              <p class="card-text">
                Accès au cours en direct et aux replays ou au choix. Possibilité
                de payer jusqu'à 6 fois
              </p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  Comprendre les programmes des cycles 1, 2 et 3 dans le domaine
                  du français
                </li>
                <li class="list-group-item">
                  Articuler la connaissance des programmes à l’analyse des
                  séquences ou séances
                </li>
                <li class="list-group-item">
                  Apprendre à concevoir, élaborer des séquences ou des séances
                  d’apprentissage
                </li>
                <li class="list-group-item">
                  progressivité dans le déroulement de la formation, tant au
                  niveau des supports que des contenus.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 flex-fill">
            <div class="card-body">
              <h4 class="card-title">Pack CSE 299€</h4>
              <p class="card-text">
                Accès aux cours en direct et aux replays Possibilité de payer
                jusqu'à 6 fois
              </p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  Comprendre les grandes thématiques de la CSE
                </li>
                <li class="list-group-item">
                  Saisir les enjeux des textes en vigueur
                </li>
                <li class="list-group-item">
                  Comprendre, mettre du sens sur les compétences attendues du
                  professeur des écoles
                </li>
                <li class="list-group-item">
                  Mettre en valeur votre parcours au regard des attendus de
                  cette épreuve
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 flex-fill">
            <div class="card-body">
              <h4 class="card-title">Pack Histoire/geo 299€</h4>
              <p class="card-text">
                Accès aux cours en direct et aux replays Possibilité de payer
                jusqu'à 6 fois
              </p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  Comprendre les grandes thématiques de la CSE
                </li>
                <li class="list-group-item">
                  Saisir les enjeux des textes en vigueur
                </li>
                <li class="list-group-item">
                  Comprendre, mettre du sens sur les compétences attendues du
                  professeur des écoles
                </li>
                <li class="list-group-item">
                  Mettre en valeur votre parcours au regard des attendus de
                  cette épreuve
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
