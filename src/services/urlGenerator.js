export default class UrlGenerator {
  constructor(origin, pathOnly=false, resolve=true) {
    this.origin = origin;
    this.pathOnly = pathOnly;
    this.resolve = resolve;
    this.paramPattern = /(:[a-zA-Z_]+\w*)/g;
  }

  urlHasParameter = url => !!url.match(this.paramPattern)
  generateUrl = url =>
    this.urlHasParameter(url) && this.resolve ?
      this.generateUrlBuilder(url)
      :
      url
  baseUrlFor = (originType) =>
    (this.pathOnly ? '' : this.origin[originType].host)
      + this.origin[originType].prefix

  getTrap(target, name) {
    const property = target[name];
    switch(typeof property) {
      case 'string':
        return this.generateUrl(this.baseUrlFor('frontend')+property);
      case 'object':
        return new Proxy(property, {
          get: function(_target, _name) {
            const _property = _target[_name];
            return typeof(_property)==='string'
              ?
              this.generateUrl(this.baseUrlFor('api')+_property)
              :
              undefined;
          }.bind(this)
        });
      default:
        return undefined;
    }
  }

  generateUrlBuilder(url) {
    return function() {
      let currentArgIndex = 0;
      return url.replace(
        this.paramPattern, () => `${arguments[currentArgIndex++]}`);
    }.bind(this);
  }

  bind(path) {
    return new Proxy(path, { get: this.getTrap.bind(this) });
  }
}
