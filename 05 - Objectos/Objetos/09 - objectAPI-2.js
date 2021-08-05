const jsx = {
    name: 'javascript',
    year: 1995,
    paradigm: "OO and Funcional"
}; 

Object.preventExtensions(jsx); 
Object.freeze(jsx); 
Object.seal(jsx); 
jsx.name = 'Ecmascript',
jsx.author = 'Breand'
delete jsx.paradigm
console.log(jsx)
console.log(Object.isExtensible(jsx))