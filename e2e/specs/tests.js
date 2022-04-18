module.exports = {
  'clicking on the link shipping and payment redirects to the shipping and payment page': function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body')
      .click('link text','Доставка и Оплата')
      .assert.title('Доставка и Оплата | Интернет-магазин Русская леди')
      .expect.element('h1').text.to.equal('Доставка и оплата');
  },

  'clicking on the link size chart redirects to the size chart page': function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body')
      .click('link text','Таблица размеров')
      .assert.title('Таблица размеров | Интернет-магазин Русская леди')
      .expect.element('h1').text.to.equal('Таблица размеров');
  },

  'clicking on the link contacts redirects to the contacts page': function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body')
      .click('link text','Контакты')
      .assert.title('Контакты | Интернет-магазин Русская леди')
      .expect.element('h1').text.to.equal('Контакты');
  },

  'clicking on the link cart redirects to the contact': function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body')
      .click('partial link text','КОРЗИНА')
      .assert.title('Корзина | Интернет-магазин Русская леди')
      .expect.element('h1').text.to.equal('Корзина');
  }
}
