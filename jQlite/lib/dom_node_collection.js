class DOMNodeCollection {
  constructor(htmlEls) {
    this.htmlEls = htmlEls;
  }
  
  html(string) {
    if (!!string) {
      for (let i = 0; i < this.htmlEls.length; i++) {
        this.htmlEls[i].innerHTML = string;
      }
    } else {
      return this.htmlEls[0].innerHTML;
    }
  }
  
  empty() {
    for (let i = 0; i < this.htmlEls.length; i++) {
      this.htmlEls[i].innerHTML = '';
    }
  }
  
  append(arg) {
    if (typeof arg === "string") {
      for (let i = 0; i < this.htmlEls.length; i++) {
        this.htmlEls[i].innerHTML += arg;
      }
    } else if (arg instanceof HTMLElement) {
      for (let i = 0; i < this.htmlEls.length; i++) {
        this.htmlEls[i].innerHTML += arg.outerHTML;
      }
    } else {
      for (let i = 0; i < this.htmlEls.length; i++) {
        for (let j = 0; j < arg.length; j++) {
          this.htmlEls[i].innerHTML += arg[j].outerHTML;
        }
      }
    }
  }
  
  children() {
    let childs = [];
    for (let i = 0; i < this.htmlEls.length; i++) {
      let c = this.htmlEls[i].children;
      Array.from(c).forEach((el) => childs.push(el));
    }
    return new DOMNodeCollection(childs);
  }
  
  parents() {
    let pars = [];
    for (let i = 0; i < this.htmlEls.length; i++) {
      let p = this.htmlEls[i].parentElement;
      pars.push(p);
    }
    return new DOMNodeCollection(pars);
  }
  
  find(selector) {
    let c = this.children();
    c[0].querySelectorAll(selector);
  }
}



module.exports = DOMNodeCollection;