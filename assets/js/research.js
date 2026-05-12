/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title:
      "Intrinsic Bias of the Genetic Code Shapes the Folding and Stability Landscapes of Microproteins",
    authors:
      'Yabo Guo*, <span style="color: #2f80ed; font-weight: 700;">Ti Qin</span>*, Jiancheng Luo*, Qiannan Pan, Runguo Shu, Ruiyang Guo, Jiajia Qian, Chenyang Xu, Jiawei Wang, Ziyi Wang, Nanxiang Zheng, Hao Li, Xiaogang Guo, Xiongwen Cao, Yong Wang and Shan Zhang',
    conferences: "Molecular Cell",
    researchYr: 2026,
    citebox: "popup9",
    image: "assets/images/research-page/abstract.png",
    link: "#0",
    citation: {
      vancouver:
        "Yabo Guo, Ti Qin, Jiancheng Luo, Qiannan Pan, Runguo Shu, Ruiyang Guo, Jiajia Qian, Chenyang Xu, Jiawei Wang, Ziyi Wang, Nanxiang Zheng, Hao Li, Xiaogang Guo, Xiongwen Cao, Yong Wang and Shan Zhang. Intrinsic Bias of the Genetic Code Shapes the Folding and Stability Landscapes of Microproteins. Molecular Cell 2026.",
    },
    abstract:
      "Thousands of non-canonical ORFs in the human transcriptome are translated into microproteins, many with ribosome occupancy comparable to canonical proteins. Intriguingly, most microproteins fail to accumulate as stable proteins; instead, their derived peptides are widely presented by HLA-I molecules and show emerging immunomodulatory roles. To understand the underlying biology, we explored the folding and stability landscape of a large microprotein cohort, revealing a fundamental rule that connects the genetic code, protein folding, and stability. Structural modeling and parallel profiling revealed that most microproteins are intrinsically disordered and rapidly degraded. Mechanistically, the high GC content of microprotein-coding sequences, which facilitates non-canonical translation, enriches residues encoded by multiple GC-rich codons, primarily Glycine, Arginine, Alanine, and Proline, promoting structural disorder and terminal residue motif-mediated, CRL-dependent proteasomal degradation. Together, our findings establish a concise, quantitative rule by which high GC content constrains protein evolvability, revealing how surveillance machinery differentially targets microproteins versus canonical proteins.<br><br><strong>Keywords:</strong> Microprotein, Genetic code, GC content, Protein structure, Protein stability",
    absbox: "absPopup9",
  },
  {
    title:
      "Contrasting Selective Signatures of Gene Expression Plasticity in Response to Antifungal Clotrimazole and Common Environmental Stresses in Yeast",
    authors:
      'Yang Qian, Zhixuan Yao, Yu Yao, <span style="color: #2f80ed; font-weight: 700;">Ti Qin</span>, Piaopiao Chen and Haoxuan Liu',
    conferences: "Nature Communications",
    researchYr: 2026,
    citebox: "popup10",
    image: "assets/images/research-page/nc.png",
    link: "https://www.nature.com/articles/s41467-026-71153-0",
    citation: {
      vancouver:
        "Qian Y, Yao Z, Yao Y, Qin T, Chen P, Liu H. Contrasting selective signatures of gene expression plasticity in response to antifungal clotrimazole and common environmental stresses in yeast. Nature Communications. 2026.",
    },
    abstract:
      "Phenotypic plasticity plays a key role in adaptation to fluctuating environments. However, its evolutionary significance remains debated, with conflicting views on whether it is actively maintained by natural selection or a neutral consequence of molecular constraints. In this study, we examine the evolutionary role of gene expression plasticity in yeast populations exposed to both common, ancestrally experienced stressors, NaCl and heat at 37 C, and a novel stressor, the antifungal drug clotrimazole. Using mutation accumulation lines to separate the effects of natural selection from genetic drift, we compare gene expression responses, referred to as plastic change, between 22 natural strains, 15 mutation accumulation lines, and their progenitor under non-stressed and stressed conditions. Our results show that, in the antifungal environment, gene expression plasticity is selectively maintained, as indicated by its reduction in magnitude, reversal in directionality, and loss of stress-responsive pathways in mutation accumulation lines. In contrast, plasticity under the common stress conditions appears largely neutral, with random variation across mutation accumulation lines. This study provides direct evidence of the adaptive role of gene expression plasticity in response to novel stressors and offers insights into the molecular mechanisms driving these adaptive responses.",
    absbox: "absPopup10",
  },
  {
    title:
      "STREMI: a Dual-Function Upstream ORF-Encoded Regulator of Mitochondrial Cristae Architecture",
    authors:
      'Ruiyang Guo, Yabo Guo, Runguo Shu, Jiajia Qian, Jiawei Wang, Ruobing Li, <span style="color: #2f80ed; font-weight: 700;">Ti Qin</span>, Ziyi Wang, Hongtao Tian, Mengchen Wu, Long Zhou, Xiaogang Guo and Shan Zhang',
    conferences: "EMBO Reports",
    researchYr: 2026,
    citebox: "popup11",
    image: "assets/images/research-page/sumi.png",
    link: "https://www.embopress.org/doi/full/10.1038/s44319-026-00783-8",
    citation: {
      vancouver:
        "Guo R, Guo Y, Shu R, Qian J, Wang J, Li R, Qin T, Wang Z, Tian H, Wu M, Zhou L, Guo X, Zhang S. STREMI: a dual-function upstream ORF-encoded regulator of mitochondrial cristae architecture. EMBO Reports. 2026.",
    },
    abstract:
      "Eukaryotic mRNAs typically encode a single functional polypeptide, a principle challenged by the discovery of widespread non-canonical peptide-coding ORFs within 5'UTRs. However, their functional significance at the protein level remains underexplored. Using a four-layered pipeline, we identify 14 human transcripts predominantly transcribed in polycistronic forms, each encoding two conserved proteins. Focusing on the SLC35A4 transcript, we show that its 5'UTR encodes a mitochondrial inner membrane-localized microprotein that we name STREMI (SLC35A4 stress response regulating MICOS interactor). Sharing topology and motifs with the MICOS core subunit MIC10, STREMI regulates mitochondrial cristae morphogenesis in mice and human cells. Additionally, the STREMI-encoding uORF mediates stress-responsive translation of SLC35A4-a Golgi nucleotide sugar transporter-upregulating its translation during the integrated stress response. Evolutionary analyses indicate that these bicistronic transcripts likely arose through transcriptional readthrough following retroposition. We propose a mechanism of gene symbiosis that enables functional partitioning and coordinated translation of protein pairs from bicistronic transcripts.",
    absbox: "absPopup11",
  },
  {
    title:
      "CEAM Is a Mitochondrial-Localized, Amyloid-Like Motif-Containing Microprotein Expressed in Human Cardiomyocytes",
    authors:
      'Ruobing Li, <span style="color: #2f80ed; font-weight: 700;">Ti Qin</span>, Yabo Guo, Shan Zhang and Xiaogang Guo',
    conferences: "Biochemical and Biophysical Research Communications",
    researchYr: 2024,
    citebox: "popup12",
    image: "assets/images/research-page/crem.jpg",
    link: "https://doi.org/10.1016/j.bbrc.2024.150737",
    citation: {
      vancouver:
        "Li R, Qin T, Guo Y, Zhang S, Guo X. CEAM is a mitochondrial-localized, amyloid-like motif-containing microprotein expressed in human cardiomyocytes. Biochemical and Biophysical Research Communications. 2024.",
    },
    abstract:
      "Microproteins synthesized through non-canonical translation pathways are frequently found within mitochondria. However, the functional significance of these mitochondria-localized microproteins in energy-intensive organs such as the heart remains largely unexplored. In this study, we demonstrate that the long non-coding RNA CD63-AS1 encodes a mitochondrial microprotein. Notably, in ribosome profiling data of human hearts, there is a positive correlation between the expression of CD63-AS1 and genes associated with cardiomyopathy. We have termed this microprotein CEAM (CD63-AS1 encoded amyloid-like motif containing microprotein), reflecting its sequence characteristics. Our biochemical assays show that CEAM forms protease-resistant aggregates within mitochondria, whereas deletion of the amyloid-like motif transforms CEAM into a soluble cytosolic protein. Overexpression of CEAM triggers mitochondrial stress responses and adversely affect mitochondrial bioenergetics in cultured cardiomyocytes. In turn, the expression of CEAM is reciprocally inhibited by the activation of mitochondrial stresses induced by oligomycin. When expressed in mouse hearts via adeno-associated virus, CEAM impairs cardiac function. However, under conditions of pressure overload-induced cardiac hypertrophy, CEAM expression appears to offer a protective benefit and mitigates the expression of genes associated with cardiac remodeling, presumably through a mechanism that suppresses stress-induced translation reprogramming. Collectively, our study uncovers a hitherto unexplored amyloid-like microprotein expressed in the human cardiomyocytes, offering novel insights into myocardial hypertrophy pathophysiology.<br><br><strong>Keywords:</strong> CD63-AS1; Microprotein; Mitochondrial unfolded protein response; Pressure overload-induced cardiac hypertrophy; Transverse aortic constriction.",
    absbox: "absPopup12",
  },
  {
    title: "The Role of Extracellular Vesicles in Embryo Implantation",
    authors:
      'Kaiyu Chen, Junyong Liang, <span style="color: #2f80ed; font-weight: 700;">Ti Qin</span>, Yunchao Zhang, Xi Chen and Zhengguang Wang',
    conferences: "Frontiers in Endocrinology",
    researchYr: 2022,
    citebox: "popup13",
    image: "assets/images/research-page/ev role.png",
    link: "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.809596/full",
    citation: {
      vancouver:
        "Chen K, Liang J, Qin T, Zhang Y, Chen X, Wang Z. The role of extracellular vesicles in embryo implantation. Frontiers in Endocrinology. 2022;13:809596. doi: 10.3389/fendo.2022.809596.",
    },
    abstract:
      "Extracellular vesicles (EVs) are membrane-coating nanoparticles derived from cells. The effect of cell-to-cell communication mediated by EVs has been investigated in different fields of physio-logical as well as pathological process in recent years. Reproduction, regarded as a definitive characteristic of organisms, has been a focus in both animal and medical sciences. It is well agreed that implantation is a critical event during early pregnancy in viviparous animals, and a proper implantation is essential for the establishment and maintenance of normal pregnancy. However, successful implantation requires the synchronized development of both the uterus and the embryo, therefore, in which well communication and opportune regulation are necessary. This review focuses on the progression of studies that reveal the role of EVs in early pregnancy, especially during implantation. Based on current evidence, EVs are produced and exist in the environment for implantation. It has been proved that EVs of different origins such as endometrium and embryo, have positive influences on embryo implantation. With their cargos of proteins and nucleic acids (especially microRNAs), EVs exert their effects including information transportation, immune stimulation and regulation of gene expression.<br><br><strong>Keywords:</strong> embryo adhesion; embryo-maternal communication; exosomes; micro-RNA (miRNA); microvesicles.",
    absbox: "absPopup13",
  },
  {
    title:
      "Regulation of ARHGAP19 in the Endometrial Epithelium: a Possible Role in the Establishment of Uterine Receptivity",
    authors:
      'Jingjie Liang, Kui Li, Kaiyu Chen, Junyong Liang, <span style="color: #2f80ed; font-weight: 700;">Ti Qin</span>, Jiayi He, Shuang Shi, Qiang Tan and Zhengguang Wang',
    conferences: "Reproductive Biology and Endocrinology",
    researchYr: 2021,
    citebox: "popup14",
    image: "assets/images/research-page/ARHGAP19.png",
    link: "https://rbej.biomedcentral.com/articles/10.1186/s12958-020-00689-7",
    citation: {
      vancouver:
        "Liang J, Li K, Chen K, Liang J, Qin T, He J, Shi S, Tan Q, Wang Z. Regulation of ARHGAP19 in the endometrial epithelium: a possible role in the establishment of uterine receptivity. Reproductive Biology and Endocrinology. 2021.",
    },
    abstract:
      "<br><strong>Background:</strong> The establishment of uterine receptivity is essential for embryo implantation initiation and involves a significant morphological transformation in the endometrial epithelial cells (EECs). The remodeling of junctional complexes and membrane-associated cytoskeleton is crucial for epithelial transformation. However, little is known about how this process is regulated in EECs during the receptive phase. ARHGAP19 is a Rho GTPase-activating protein that participates in various cytoskeletal-related events, including epithelial morphogenesis. Here, we investigated the role of ARHGAP19 in endometrial epithelial transformation during the establishment of uterine receptivity. The upstream regulator of ARHGAP19 was also investigated.<br><strong>Methods:</strong> ARHGAP19 expression was examined in mouse uteri during early pregnancy and in human EEC lines. The role of ARHGAP19 was investigated by manipulating its expression in EECs. The effect of ARHGAP19 on junctional proteins in EECs was examined by western blotting and immunofluorescence. The effect of ARHGAP19 on microvilli was examined by scanning electron microscopy. The upstream microRNA (miRNA) was predicted using online databases and validated by the dual-luciferase assay. The in vivo and in vitro effect of miRNA on endogenous ARHGAP19 was examined by uterine injection of miRNA agomirs and transfection of miRNA mimics or inhibitors.<br><strong>Results:</strong> ARHGAP19 was upregulated in the receptive mouse uteri and human EECs. Overexpression of ARHGAP19 in non-receptive EECs downregulated the expression of junctional proteins and resulted in their redistribution. Meanwhile, upregulating ARHGAP19 reorganized the cytoskeletal structure of EECs, leading to a decline of microvilli and changes in cell configuration. These changes weakened epithelial cell polarity and promoted the transition of non-receptive EECs to a receptive phenotype. Besides, miR-192-5p, a miRNA that plays a key role in maintaining epithelial properties, was validated as an upstream regulator of ARHGAP19.<br><strong>Conclusion:</strong> These results suggested that ARHGAP19 may contribute to the transition of EECs from a non-receptive to a receptive state by regulating the remodeling of junctional proteins and membrane-associated cytoskeleton.<br><br><strong>Keywords:</strong> ARHGAP19; Epithelial transformation; Uterine receptivity; miR-192-5p.",
    absbox: "absPopup14",
  },

];
AOS.init();

const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
      link,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>

                        <a class="button button-accent button-small text-right button-abstract paper-link ${link === "#0" ? "paper-link-disabled" : ""}" href="${link}" target="_blank" rel="noopener noreferrer" aria-label="Open original article: ${title}">
                            LINK
                        </a>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
