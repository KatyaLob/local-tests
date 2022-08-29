import MainPage from "../pages/app/main.page";
import GoalsPage from "../pages/app/goals.page";
import ChallengePage from "../pages/app/challenge.page";
import GroupsPage from "../pages/app/groups.page";
import DiaryPage from "../pages/app/diary.page";


describe('Navigation', function () {
  before( () => {
    cy.login(Cypress.env('TOKEN'), Cypress.env('USER_ID'))
    cy.reload()
  })

  it('Courses page opens', () => {
    MainPage.navbar.linkCourses.click()
    cy.location('pathname')
      .should('include', 'course')
  })


  it('Interview Questions page opens', () => {
    MainPage.navbar.linkInterviewQuestions.click()
    cy.location('pathname')
      .should('include', 'flash')
  })

  it('Goals page opens', () => {
    MainPage.navbar.linkGoals.click()
    cy.location('pathname')
      .should('include', 'goal')
    GoalsPage.goalHeader.should('contain', 'Goals')
  })

  it('Challenges page opens', () => {
    MainPage.navbar.linkChallenges.click()
    cy.location('pathname')
      .should('include', 'challenge')  // check end point
    ChallengePage.challengeHeader.should('contain', 'Challenges') //на самой старнице
  })

  it('Groups page opens', () => {
    MainPage.navbar.linkGroups.click()
    cy.location('pathname')
      .should('include', 'group')  // check end point
    GroupsPage.groupHeader.should('contain', 'Groups') //на самой старнице
  })

  it('Diary page opens', () => {
    MainPage.navbar.linkDiary.click()
    cy.location('pathname')
      .should('include', 'diary')  // check end point
    DiaryPage.diaryHeader.should('contain', 'Daily reports') //на самой старнице
  })
})