import AppPage from "./app.page";

class GoalsPage extends AppPage {
  get goalHeader() {
    return cy.get('h1')    //проверяю заголовок на странице
  }
}

export default new GoalsPage()