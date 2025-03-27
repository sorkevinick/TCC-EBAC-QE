import LoginPage from '../pages/LoginPage';

describe('[US-0002] - Login na plataforma EBAC-SHOP', () => {

    beforeEach(() => {
        LoginPage.visit();
    });

    it('CT-005 - Login bem-sucedido', () => {
      cy.fixture('users').then((users) => {
          cy.login(users.validUser.username, users.validUser.password);
          LoginPage.validateLoginSuccess();
      });
    });

    it('CT-007 - Credenciais inválidas', () => {
      cy.fixture('users').then((users) => {
          cy.login(users.validUser.username, users.invalidUser.password);
          LoginPage.validateLoginFailure();
      });
    });

    it('CT-008 - Bloqueio após 3 tentativas erradas', () => {
      cy.fixture('users').then((users) => {
          for (let i = 0; i < 4; i++) {
              cy.login(users.validUser.username, users.invalidUser.password);
          }
           LoginPage.validateLoginFailure();
      });
    });
  

});
