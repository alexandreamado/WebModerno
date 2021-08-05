const jsx = {} 

Object.defineProperty(jsx, 'name', {
    configurable: true,
    enumerable:true,
    value: "Programador",
    writable:true
}) 

jsx.name = 'Alexandre'
delete jsx.name

console.log(jsx)