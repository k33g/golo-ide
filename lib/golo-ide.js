'use babel';
// 🌏 https://github.com/atom/autocomplete-plus/wiki/Provider-API

function getSnippets() {
  // 🛠 1snippets
  let snippets = [
    {snippet:'each(|${1:item}| { ${2:something} })', type:'method'},
    {snippet:'filter(|${1:item}| { return ${2:something} })', type:'method'},
    {snippet:'find(|${1:item}| { return ${2:something} })', type:'method'},
    {snippet:'print(${1:name})', type:'keyword'},
    {snippet:'println(${1:name})', type:'keyword'},
    {snippet:'augment ${1:name} {${2:code}}', type:'function'},
    {snippet:'augmentation ${1:name} = {${2:code}}', type:'function'},
    {snippet:'Adapter()', type:'class'},
    {snippet:'Adapter(): extends(${1:class})', type:'class'},
    {snippet:'Adapter(): extends(${1:class}): interfaces([${2:interfaces}])', type:'class'},
    {snippet:'Adapter(): interfaces([${1:interfaces}])', type:'class'},
    {snippet:'extends(${1:class})', type:'method'},
    {snippet:'interfaces([${1:interfaces}])', type:'method'},
    {snippet:'implements("${1:name}", |this, ${2:args}| {${3:code}})', type:'method'},
    {snippet:'implements("${1:name}", |this, ${2:args}| -> ${3:code})', type:'method'},
    {snippet:'overrides("${1:name}", |super, this, ${2:args}| {${3:code}})', type:'method'},
    {snippet:'overrides("${1:name}", |super, this, ${2:args}| -> ${3:code})', type:'method'},
    {snippet:'overrides("*", |super, name, ${2:args}| {${3:code}})', type:'method'},
    {snippet:'overrides("*", |super, name, ${2:args}| -> ${3:code})', type:'method'},
    {snippet:'foreach ${1:name} in ${2:name} {${3:code}}', type:'loop'},
    {snippet:'foreach ${1:name} in ${2:name} when ${3:guard} {${4:code}}', type:'loop'},
    {snippet:'for (var ${1:name} = ${2:value}, ${3:pred}, {4:update}) {${5:code}}', type:'loop'},
    {snippet:'struct ${1:name} = { ${2:field} }', type:'class'},
    {snippet:'union ${1:name} = { ${2:field} }', type:'class'},
    {snippet:'DynamicObject()', type:'class'},
    {snippet:'define("${1:name}", |this, ${2:args}| -> ${3:code})', type:'method'},
    {snippet:'define("${1:name}", |this, ${2:args}| {${3:code}})', type:'method'},
    {snippet:'define("${1:name}", |this| -> ${2:code})', type:'method'},
    {snippet:'define("${1:name}", |this| {${2:code}})', type:'method'},
    {snippet:'DynamicVariable(${1:value})', type:'class'},
    {snippet:'withValue(${1:value}, -> ${2:code})', type:'method'},
    {snippet:'withValue(${1:name}, {${2:code}})', type:'method'},
    {snippet:'value()', type:'method'},
    // --- Observable ---
    {snippet:'Observable(${1:value})', type:'class'},
    {snippet:'onChange(|${1:arg}| -> ${2:code})', type:'method'},
    {snippet:'onChange(|${1:args}| {${2:code}})', type:'method'},
    {snippet:'set(${1:value})', type:'method'},
    // --- End of Observable ---
    // --- List ---
    // --- Async, Promise, Worker ---
    // --- Errors ---
    // --- Console ANSI Code ---
    {snippet:'module ${1:name}', type:'module'},
    {snippet:'import ${1:name}', type:'module'},
    {snippet:'function ${1:name} = |${2:args}| -> ${3:code}', type:'function'},
    {snippet:'function ${1:name} = |${2:args}| {${3:code}}', type:'function'},
    {snippet:'let ${1:name} = ${2:value}', type:'variable'},
    {snippet:'let ${1:name} = |${2:args}| -> ${3:code}', type:'function'},
    {snippet:'let ${1:name} = -> ${2:code}', type:'function'},
    {snippet:'let ${1:name} = |${2:args}| {${3:code}}', type:'function'},
    {snippet:'let ${1:name} = {${2:code}}', type:'function'},
    {snippet:'local ${1:name} = ${2:value}', type:'variable'},
    {snippet:'return ${1:value}', type:'variable'},
    {snippet:'if ${1:pred}', type:'test'},
    //{snippet:'if (${1:pred})', type:'test'},
    {snippet:'if ${1:pred} { ${2:code} }', type:'test'},
    //{snippet:'if (${1:pred}) { ${2:code} }', type:'test'},
    {snippet:'if ${1:pred} {${2:code}} else {${3:code}}', type:'test'},
    //{snippet:'if (${1:pred}) { ${2:code} } else { ${3:code} }', type:'test'},
    {snippet:'if ${1:pred} ${2:code}', type:'test'},
    {snippet:'if ${1:pred} ${2:code} else ${3:code}', type:'test'},
    {snippet:'while ${1:pred} {${2:code}}', type:'loop'},
    {snippet:'try {${1:code}} catch (err) {${2:code}}', type:'exception'},
    {snippet:'try {${1:code}} catch (err) {${2:code}} finally {${3:code}}', type:'exception'},
    {snippet:'raise(${1:code})', type:'exception'},
    {snippet:'throw ${1:exception}', type:'exception'},
    {text:'continue', type:'keyword'},
    {text:'break', type:'keyword'},
    {text:'case', type:'keyword'},
    {text:'otherwise', type:'keyword'},
    {text:'when', type:'keyword'},
    {text:'match', type:'keyword'},
    {text:'gololang', type:'module'},
    {text:'gololang.Adapters', type:'module'},
    {text:'gololang.AnsiCodes', type:'module'},
    {text:'gololang.Async', type:'module'},
    {text:'gololang.Decorators', type:'module'},
    {text:'gololang.Errors', type:'module'},
    {text:'gololang.Functions', type:'module'},
    {text:'gololang.JSON', type:'module'},
    {text:'gololang.LazyLists', type:'module'},
    {text:'gololang.StandardAugmentations', type:'module'}
  ];
  return snippets;
}


class GoloCodeProvider {
  constructor () {
    this.selector = '.source.golo';
    this.filterSuggestions = true;
  }

  getSuggestions({activatedManually, bufferPosition, editor, prefix, scopeDescriptor}) {
    // 🛠 WIP
    regex = /[a-zA-Z]+$/

    if(activatedManually || prefix.match(regex))
        return getSnippets();
    else
        return [];
    return getSnippets();
  }

}

let provider  = new GoloCodeProvider()

export default {
  provide() {
    return [provider]; // a list of provider(s)
  }

};
