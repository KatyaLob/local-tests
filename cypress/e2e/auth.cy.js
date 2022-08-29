import LoginPage from '../pages/login.page'
import ProfilePage from "../pages/app/profile.page";
import {shallowMount} from "cypress/vue/dist/@vue/test-utils";

describe('Authentication', () => {
  beforeEach(() => {
    LoginPage.open()
  })

  it('Sign in with valid credentials', () => {
    LoginPage.login(Cypress.env('Email'), Cypress.env('Password'))
    ProfilePage.iconAvatar.should('be.visible')
    cy.location('pathname')
      .should('include', 'profile')

  })

  it('Sign in with invalid credentials', () => {
    LoginPage.login(Cypress.env('Email'), '123456')

    LoginPage.toast.should('have.text', 'Auth failed')
      .should('have.text', 'Auth failed')
  })

  it('Credentials validation', () => {
    LoginPage.inputEmail.type('test')
    LoginPage.emailValidation
      .should('have.text', '\'email\' is not a valid email')

    LoginPage.inputEmail.clear()
    LoginPage.emailValidation
      .should('have.text', 'Required')

    LoginPage.inputPassword
      .type('test')
      .clear()

    LoginPage.passwordValidation
      .should('have.text', 'Required')


    //   cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_email"]]//div[@class="ant-form-item-explain-error"]')
    //     .should('have.text', '\'email\' is not a valid email')
    //
    //   cy.get('#normal_login_email')
    //     .clear()
    //
    //   cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_email"]]//div[@class="ant-form-item-explain-error"]')
    //     .should('have.text', 'Required')
    //
    //   cy.get('#normal_login_password')
    //     .type('test')
    //     .clear()
    //
    //   cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_password"]]//div[@class="ant-form-item-explain-error"]')
    //     .should('have.text','Required')
    // })
  })
})
