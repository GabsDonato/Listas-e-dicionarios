var lista = [
    {nome:"Spiderman" , ano: 2000 , categoria: "aventura"},
    {nome:"Hulk" , ano: 2003 , categoria: "ação"},
    {nome:"Irona man" , ano: 2008 , categoria: "ação"},
];

document.getElementById("button").onclick = function(){
    document.getElementById("nomes").innerHTML = lista[0].nome;
}