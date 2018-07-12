const IE      = 'ie'
const Edge    = 'edge'
const Chrome  = 'chrome'
const Safari  = 'safari'
const Firefox = 'firefox'
const Opera   = 'opera'
const iPhone  = 'iphone'
const iPad    = 'ipad'
const Android = 'android'
const Mobile  = 'mobile'
const Tablet  = 'tablet'
const PC      = 'pc'
const App     = 'pressblog'

class UserAgent {
  constructor() {
    this._ua = window.navigator.userAgent.toLowerCase();
    this._browser =
      this._ua.indexOf(App)         != -1 && App
      || (this._ua.indexOf('msie')  != -1 || this._ua.indexOf('trident') != -1) && IE
      || this._ua.indexOf(Edge)     != -1 && Edge
      || this._ua.indexOf(Chrome)   != -1 && Chrome
      || this._ua.indexOf(Safari)   != -1 && Safari
      || this._ua.indexOf(Firefox)  != -1 && Firefox
      || this._ua.indexOf(Opera)    != -1 && Opera
      || 'unknown';
    this._device =
      this._ua.indexOf(App)         != -1 && App
      || this._ua.indexOf(iPhone)   != -1 && iPhone
      || this._ua.indexOf(iPad)     != -1 && iPad
      || this._ua.indexOf(Android)  != -1 && (this._ua.indexOf(Mobile) != -1 && Android + Mobile || Android + Tablet)
      || PC;
  }

  /*
   * ブラウザ
   */
  get isIE()            { return this._browser === IE }
  get isEdge()          { return this._browser === Edge }
  get isChrome()        { return this._browser === Chrome }
  get isSafari()        { return this._browser === Safari }
  get isFirefox()       { return this._browser === Firefox }
  get isOpera()         { return this._browser === Opera }

  /*
   * デバイス
   */
  get isiPhone()        { return this._device === iPhone }
  get isiPad()          { return this._device === iPad }
  get isAndroid()       { return this._device.indexOf(Android) != -1 }
  get isAndroidMobile() { return this._device === Android + Mobile }
  get isAndroidTablet() { return this._device === Android + Tablet }

  /*
   * PRESSアプリ
   */
  get isApp()           { return this._device === App }

  /*
   * 種別
   */
  get isPC()            { return this._device === PC }
  get isMobile()        { return this.isiPhone || this.isAndroidMobile || this.isApp }
}

export default new UserAgent()