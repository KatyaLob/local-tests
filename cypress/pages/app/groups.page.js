import AppPage from "./app.page";

class GroupsPage extends AppPage {
  get groupHeader() {
    return cy.get('h1')
  }
}

export default new GroupsPage()