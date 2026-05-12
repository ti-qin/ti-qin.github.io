"use strict";

const bookmarkGroups = [
  {
    title: "Literature",
    description: "Search engines and publication sources for daily reading.",
    links: [
      {
        name: "PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
        note: "Biomedical literature database",
      },
      {
        name: "Google Scholar",
        url: "https://scholar.google.com/",
        note: "Broad academic search",
      },
      {
        name: "bioRxiv",
        url: "https://www.biorxiv.org/",
        note: "Biology preprints",
      },
      {
        name: "Nature",
        url: "https://www.nature.com/",
        note: "Research journals and news",
      },
      {
        name: "Science",
        url: "https://www.science.org/",
        note: "Research journals and news",
      },
      {
        name: "Cell",
        url: "https://www.cell.com/",
        note: "Life science journals",
      },
    ],
  },
  {
    title: "Genomics",
    description: "Reference databases and genome browsers.",
    links: [
      {
        name: "NCBI",
        url: "https://www.ncbi.nlm.nih.gov/",
        note: "Sequence and literature resources",
      },
      {
        name: "Ensembl",
        url: "https://www.ensembl.org/",
        note: "Genome annotation browser",
      },
      {
        name: "UCSC Genome Browser",
        url: "https://genome.ucsc.edu/",
        note: "Interactive genome browser",
      },
      {
        name: "UniProt",
        url: "https://www.uniprot.org/",
        note: "Protein sequence and function",
      },
      {
        name: "Enrichr",
        url: "https://maayanlab.cloud/Enrichr/",
        note: "Gene set enrichment analysis",
      },
      {
        name: "SGD",
        url: "https://www.yeastgenome.org/",
        note: "Saccharomyces Genome Database",
      },
    ],
  },
  {
    title: "Code and Tools",
    description: "Places for code, writing, and reproducible work.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/",
        note: "Code hosting and collaboration",
      },
      {
        name: "Codeforces",
        url: "https://codeforces.com/",
        note: "Programming practice",
      },
      {
        name: "Overleaf",
        url: "https://www.overleaf.com/",
        note: "Online LaTeX writing",
      },
      {
        name: "ImageJ",
        url: "https://imagej.net/",
        note: "Scientific image analysis",
      },
    ],
  },
  {
    title: "Data and Archives",
    description: "Repositories for datasets, protocols, and shared resources.",
    links: [
      {
        name: "Zenodo",
        url: "https://zenodo.org/",
        note: "Research data repository",
      },
      {
        name: "Figshare",
        url: "https://figshare.com/",
        note: "Data and supplementary files",
      },
      {
        name: "GEO",
        url: "https://www.ncbi.nlm.nih.gov/geo/",
        note: "Gene expression datasets",
      },
      {
        name: "SRA",
        url: "https://www.ncbi.nlm.nih.gov/sra",
        note: "Sequencing read archive",
      },
    ],
  },
];

const bookmarksGrid = document.querySelector("#bookmarks-grid");

const renderBookmarks = () => {
  if (!bookmarksGrid) {
    return;
  }

  bookmarksGrid.innerHTML = bookmarkGroups
    .map(
      ({ title, description, links }) => `
        <article class="bookmark-group">
          <div class="bookmark-group-header">
            <h2>${title}</h2>
            <p>${description}</p>
          </div>
          <div class="bookmark-list">
            ${links
              .map(
                ({ name, url, note }) => `
                  <a class="bookmark-link" href="${url}" target="_blank" rel="noopener noreferrer">
                    <span>
                      <strong>${name}</strong>
                      <small>${note}</small>
                    </span>
                    <i class="fas fa-external-link-alt" aria-hidden="true"></i>
                  </a>
                `
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
};

document.addEventListener("DOMContentLoaded", renderBookmarks);
