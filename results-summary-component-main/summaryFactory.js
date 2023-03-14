const summaryRootEl = document.getElementById("summaryEntries");

fetch("./data.json")
  .then(function (response) {
    return response.json();
  })
  .then((summaryElements) => {
    for (let summaryEl of summaryElements) {
      const summaryHTMLEl = document.createElement("div");
      summaryHTMLEl.className = `flex justify-between bg-${summaryEl.colorClass}/[0.08] rounded-lg px-4 py-[0.9rem]`;
      summaryHTMLEl.innerHTML = `
        <div
          class="inline-flex items-center gap-2 text-${summaryEl.colorClass} font-[500] sm:text-lg"
        >
          <img src="${summaryEl.icon}" />
          ${summaryEl.category}
        </div>
        <span class="text-gray-blue/90 font-[700] sm:text-lg">
          ${summaryEl.score} <span class="text-gray-blue/40">/ 100</span>
        </span>
      `;
      summaryRootEl.appendChild(summaryHTMLEl);
    }
  });
