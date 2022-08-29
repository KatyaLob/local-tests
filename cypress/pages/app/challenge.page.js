import AppPage from "./app.page";

class ChallengePage extends AppPage {
  get challengeHeader() {
    return cy.get('.h1')
  }
}

export default new ChallengePage()