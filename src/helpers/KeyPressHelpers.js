export default class KeyPressHelper {
  static executeWhenEnter(e, execute) {
    if (this.isEnterKey(e)) {
      execute();
    }
  }

  static isEnterKey(e) {
    return e.charCode === 13;
  }
}
