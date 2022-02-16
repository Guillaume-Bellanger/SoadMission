import React, { Component } from "react";

export default class Cards extends Component {
  render() {
    return (
      <div class="col-12 col-lg-4 news_4 align-self-center">
        <form>
          <h4>Laisser un message</h4>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At modi,
            amet aliquam? Obcaecati.
          </p>
          <div class="form-row">
            <div class="col">
              <label for="name">Nom</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col">
              <label for="name">Prénom</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="form-row">
            <div class="col">
              <label for="name">Objet</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="form-row">
            <div class="col">
              <label for="name">Message</label>
              <textarea class="form-control"></textarea>
              <button class="btn">Envoyer</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
