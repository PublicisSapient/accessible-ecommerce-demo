const HTMLLoader = (function() {
  function load(path, selector) {
    if(path && selector) {
      return new Promise(resolve => {
        fetch(path)
          .then(response => {
            return response.text();
          })
          .then(body => {
            document.querySelector(selector).innerHTML = body;
            resolve(body);
            //console.log(selector + 'Ready');
            var event = new CustomEvent(selector + 'Ready');
            document.dispatchEvent(event);
          });
      });
    } else {
      console.error('Loader error: Path and selector are required.'); // eslint-disable-line no-console
    }
  }

  function loadAll(components) {
    let promises = [];
    if(Array.isArray(components)) {
      components.forEach(obj => {
        promises.push(this.load(obj.path, obj.selector));
      });

      return Promise.all(promises).then(() => {
        return components;
      });
    } else {
      console.error('Loader error: loadAll argument is not an iterable array'); // eslint-disable-line no-console
    }
  }

  return {
    load: load,
    loadAll: loadAll
  };
}());

export default HTMLLoader;