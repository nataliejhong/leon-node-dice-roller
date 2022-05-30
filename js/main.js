document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const integerSides = document.querySelector("#numOfSides").value;
  const res = await fetch(`/api?sides=${integerSides}`)
  const data = await res.json()

  console.log(data)
  document.querySelector("#diceOutcome").textContent = data.name
}