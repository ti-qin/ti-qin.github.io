const nuclearGenomes = [
  {
    species: "Species name",
    strain: "Strain 1",
    assembly: "#",
    annotation: "#",
    cds: "#",
    proteome: "#",
  },
  {
    species: "Species name",
    strain: "Strain 2",
    assembly: "#",
    annotation: "#",
    cds: "#",
    proteome: "#",
  },
  {
    species: "Species name",
    strain: "Strain 3",
    assembly: "#",
    annotation: "#",
    cds: "#",
    proteome: "#",
  },
];

const fileLink = (href, label) => {
  if (!href || href === "#") {
    return `<span class="data-pending">${label}</span>`;
  }
  return `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
};

const renderNuclearGenomeTable = () => {
  const tableBody = document.getElementById("nuclear-genome-table");
  if (!tableBody) return;

  tableBody.innerHTML = nuclearGenomes
    .map(
      ({ species, strain, assembly, annotation, cds, proteome }) => `
        <tr>
          <td><em>${species}</em></td>
          <td>${strain}</td>
          <td>${fileLink(assembly, "GENOME")}</td>
          <td>${fileLink(annotation, "GFF")}</td>
          <td>${fileLink(cds, "CDS")}</td>
          <td>${fileLink(proteome, "PEP")}</td>
        </tr>`
    )
    .join("");
};

document.addEventListener("DOMContentLoaded", renderNuclearGenomeTable);
