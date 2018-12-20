/* eslint-disable func-names */
const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersRegistered(() => {
  /**
   * extends Response object
   * adds custom response presets
   */
  require('./extend/Response')

  /**
   * extends Validator object
   * adds custom validations rules
   */
  require('./extend/Validator')
})
