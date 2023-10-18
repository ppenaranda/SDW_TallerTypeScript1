import { Serie } from "./Serie.js";
import { series } from "./dataSeries.js";

const seriesTbody: HTMLElement = document.getElementById('series')!;
renderSeriesInTable(series);

function renderSeriesInTable(series: Serie[]): void {
  console.log(series);
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
    <td>${c.name}</td>
    <td>${c.channel}</td>
    <td>${c.seasons}</td>`
    seriesTbody.appendChild(trElement);
  });
  let i = average(series);
  let trElement = document.createElement("tr");
  trElement.innerHTML= `<td colspan="6">Seasons average: 
  ${i}</td>`;
  seriesTbody.appendChild(trElement);
}

function average(series: Serie[]): number {
  let sum = 0;
  series.forEach(c => {
    sum += c.seasons;
  });
  return Math.round((sum/series.length) * 100) / 100;
}