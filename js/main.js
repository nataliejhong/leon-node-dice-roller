document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){
  const integerSides = document.querySelector("#numOfSides").value;
  const res = await fetch(`/api?sides=${integerSides}`)
  console.log(res);
  const data = await res.json()
  document.querySelector("#diceOutcome").textContent = data.name
}