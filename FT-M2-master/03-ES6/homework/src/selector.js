var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ

  const allElements = startEl.getElementsByTagName('*');
  for(element of allElements){
    if(matchFunc(element)) resultSet.push(element)
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if(selector.at(0) === '#'){
    return 'id'
  }
  if(selector.at(0) === '.'){
    return 'class'
  }
  if(selector.includes('.') && selector.at(0) != '.'){
    return 'tag.class'
  }
  return 'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = arg => {
      if(arg.id === selector.slice(1)) return true;
      return false
    }
  } else if (selectorType === "class") {
    matchFunction = arg => {
      const arrSelector = arg.className.split(' ');
      for(let i = 0; i < arrSelector.length; i++){
        if(arrSelector[i] === selector.slice(1)) return true;
      }
      return false
    }
  } else if (selectorType === "tag.class") {
    matchFunction = arg => {
      const classSelector = selector.split('.');
      const arrSelector = arg.className.split(' ');
      for(let i = 0; i < arrSelector.length; i++){
        if(arrSelector[i] === classSelector[1] && arg.tagName.toLowerCase() === classSelector[0]) return true;
      }
      return false
    }
  } else if (selectorType === "tag") {
    matchFunction = arg => {
      if(arg.tagName.toLowerCase() === selector) return true;
      return false;
    }
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
