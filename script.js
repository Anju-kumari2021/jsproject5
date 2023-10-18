const button = document.getElementById('btn')
const inputText = document.getElementById("inp")
const pokelist=document.getElementById('list')
const url="https://pokeapi.co/api/v2/pokemon/"
button.addEventListener('click', (() =>
{
    const search = inputText.value;
  fetchData(url,search)
}))
async function fetchData (url,search)
{
    try
    {
        const response = await fetch(url + search)
    console.log(response)
    if (!response.ok)
    {
        throw new Error("something wrong happened")
        }
        const data = await response.json()
        console.log(data)
        displayData(data);
    }
    catch (err)
    {
        console.error(err)
    }
   
  }
function displayData (data)
{
    let p = [];
   
       p.push(data)
        const pokeValue = document.createElement("div")
        pokeValue.innerHTML = `
        <img src=${p[0].sprites.front_default} alt=${p[0].name} />
        <h2>Name: ${p[0].name}</h2>
        <p>Height:${p[0].height}</p>
        <p>Weight:${p[0].weight}</p>`
    console.log(pokeValue)
    pokelist.appendChild(pokeValue)
}