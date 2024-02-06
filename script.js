const getAdvice = document.querySelector(".btn-getadvice");
const advice = document.querySelector(".advice");
const adviceId = document.querySelector(".advice-id");

document.addEventListener("DOMContentLoaded", async function () {
  try {
    const data = await fetchAdvice();
    console.log(data.slip);
    adviceRender(data);
  } catch (error) {
    alert(error);
  }
})

getAdvice.addEventListener('click', async function () {
  try {
    const data = await fetchAdvice();
    console.log(data.slip);
    adviceRender(data);
  } catch (error) {
    alert(error);
  }
});

async function fetchAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice", { cache: "no-store" });
  if (!response.ok) throw new Error('Error to fetch API!!!');
  return response.json();
}

function adviceRender(data) {
  adviceId.textContent = `advice #${data.slip.id}`;
  advice.textContent = `"${data.slip.advice}"`;
}