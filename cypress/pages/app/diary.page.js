import AppPage from "./app.page";

class DiaryPage extends AppPage {
  get diaryHeader () {
    return cy.get('h1')
  }
}

export default new DiaryPage()