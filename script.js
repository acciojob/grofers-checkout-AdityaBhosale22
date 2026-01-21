const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");

  let total = 0;

  prices.forEach(price => {
    total += Number(price.textContent);
  });

  const oldAns = document.getElementById("ans");
  if (oldAns) oldAns.remove();

  const tr = document.createElement("tr");
  const td = document.createElement("td");

  td.colSpan = 2;
  td.id = "ans";
  td.innerText = total;

  tr.appendChild(td);
  document.querySelector("table").appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);
