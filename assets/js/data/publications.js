// All publications, newest first.
// - authors: plain text; "B. Deng" is bolded automatically. * corresponding, ‡ equal contribution.
// - venue: journal / conference; may contain <i>…</i>.
// - img: file in assets/img/papers/ (leave empty for an auto-generated placeholder).
// - topics: any of "agents", "mlip", "materials" (used by the filter on the Publications page).
// - selected: true → shown on Home and in "Selected".
window.TOPICS = {
  agents:    { en: "Scientific AI Agents", zh: "科学智能体" },
  mlip:      { en: "Atomistic ML", zh: "Atomistic ML" },
  materials: { en: "Materials Discovery", zh: "材料发现" }
};

window.PUBLICATIONS = [
  {
    year: 2026, topics: ["mlip"],
    title: "Universal Thermodynamic Interatomic Potentials for Crystalline Materials",
    authors: "J. Nam, B. Deng, X. Du, L. Barroso-Luque, B. K. Miller, R. Gómez-Bombarelli",
    venue: "<i>arXiv</i>:2608.14502",
    url: "https://arxiv.org/abs/2608.14502",
    img: "thermo-potentials.png"
  },
  {
    year: 2026, selected: true, topics: ["agents", "mlip"],
    title: "Harnessing AtomisticSkills for Agentic Atomistic Research",
    authors: "B. Deng, B. Li, M. Cox, H. Chun, J. Nam, A. Lyssenko, S. Edamadaka, J. Ruza, X. Du, N. Segal, J. D. Sanchez, M. Xie, T. Perez, Y. Yao, M. Steiner, S. Majumdar, C. B. Musgrave, A. Chandra, A. Patra, D. Hohl, C. W. Coley, J. Li, R. Gómez-Bombarelli*",
    venue: "<i>arXiv</i>:2605.24002",
    url: "https://arxiv.org/abs/2605.24002",
    img: "atomisticskills.png"
  },
  {
    year: 2026, topics: ["materials", "mlip"],
    title: "Hierarchical high-throughput screening of alkaline-stable lithium-ion conductors combining machine learning and first-principles calculations",
    authors: "Z. Li‡, K. Jun‡, B. Deng, G. Ceder*",
    venue: "<i>Cell Press Blue</i>",
    url: "https://www.cell.com/cell-press-blue/fulltext/S3051-3839(26)00010-1",
    img: "alkaline-screening.png"
  },
  {
    year: 2026, topics: ["mlip"],
    title: "Smooth Dynamic Cutoffs for Machine Learning Interatomic Potentials",
    authors: "K. Han, H. Cong, B. Deng, A. B. Farimani",
    venue: "<i>ICML</i>",
    url: "https://arxiv.org/abs/2601.21147",
    img: "dynamic-cutoffs.png"
  },
  {
    year: 2026, selected: true, topics: ["mlip"],
    title: "DistMLIP: A Distributed Inference Platform for Machine Learning Interatomic Potentials",
    authors: "K. Han, B. Deng*, A. B. Farimani, G. Ceder",
    venue: "<i>ICLR</i>",
    url: "https://openreview.net/forum?id=4tasfBIPxp",
    img: "distmlip.png"
  },
  {
    year: 2026, topics: ["materials"],
    title: "Mechanisms of alkali ionic transport in amorphous oxyhalides solid state conductors",
    authors: "L. Binci, K. Jun, B. Deng, G. Ceder*",
    venue: "<i>Adv. Energy Mater.</i>",
    url: "https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/aenm.71124",
    img: "oxyhalides.png"
  },
  {
    year: 2025, selected: true, topics: ["mlip"],
    title: "Cross-functional transferability in foundation machine learning interatomic potentials",
    authors: "X. Huang, B. Deng*, P. Zhong, A. D. Kaplan, K. A. Persson, G. Ceder*",
    venue: "<i>npj Comput. Mater.</i> <b>11</b>, 313",
    url: "https://www.nature.com/articles/s41524-025-01796-y",
    img: "cross-functional.png"
  },
  {
    year: 2025, topics: ["materials", "mlip"],
    title: "Modeling phase transformations in Mn-rich disordered rocksalt cathodes with charge-informed machine-learning interatomic potentials",
    authors: "P. Zhong*, B. Deng, S. Anand, T. Mishra, G. Ceder*",
    venue: "<i>Phys. Rev. Mater.</i> <b>9</b>, 105404",
    url: "https://journals.aps.org/prmaterials/abstract/10.1103/mk2d-tjyj",
    img: "mn-drx-phase.png"
  },
  {
    year: 2025, topics: ["mlip"],
    title: "Materials Graph Library (MatGL), an open-source graph deep learning library for materials science and chemistry",
    authors: "T. W. Ko, B. Deng, M. Nassar, L. Barroso-Luque, R. Liu, J. Qi, E. Liu, G. Ceder, S. Miret, S. P. Ong*",
    venue: "<i>npj Comput. Mater.</i> <b>11</b>, 253",
    url: "https://www.nature.com/articles/s41524-025-01742-y",
    img: "matgl.png"
  },
  {
    year: 2025, topics: ["mlip"],
    title: "Spin-informed universal graph neural networks for simulating magnetic ordering",
    authors: "W. Xu, R. Y. Sanspeur*, A. Kolluru, B. Deng, P. Harrington, S. Farrell, K. Reuter, J. R. Kitchin*",
    venue: "<i>Proc. Natl. Acad. Sci.</i> <b>122</b>, e2422973122",
    url: "https://www.pnas.org/doi/10.1073/pnas.2422973122",
    img: "spin-gnn.png"
  },
  {
    year: 2025, topics: ["mlip", "materials"],
    title: "A framework to evaluate machine learning crystal stability predictions",
    authors: "J. Riebesell*, R. E. A. Goodall, P. Benner, Y. Chiang, B. Deng, G. Ceder, M. Asta, A. A. Lee, A. Jain, K. A. Persson*",
    venue: "<i>Nat. Mach. Intell.</i> <b>7</b>, 836–847",
    url: "https://www.nature.com/articles/s42256-025-01055-1",
    img: "matbench-discovery.png"
  },
  {
    year: 2025, topics: ["materials"],
    title: "Crystal structure prediction with host-guided inpainting generation and foundation potentials",
    authors: "P. Zhong*, X. Dai, B. Deng, G. Ceder, K. A. Persson*",
    venue: "<i>Mater. Horiz.</i> <b>12</b>, 9669–9678",
    url: "https://pubs.rsc.org/en/content/articlelanding/2025/mh/d5mh00774g",
    img: "host-guided-csp.png"
  },
  {
    year: 2025, topics: ["mlip"],
    title: "A Foundational Potential Energy Surface Dataset for Materials",
    authors: "A. D. Kaplan, R. Liu, J. Qi, T. W. Ko, B. Deng, J. Riebesell, G. Ceder, K. A. Persson, S. P. Ong*",
    venue: "<i>arXiv</i>:2503.04070",
    url: "https://arxiv.org/abs/2503.04070",
    img: "matpes.png"
  },
  {
    year: 2025, topics: ["mlip"],
    title: "A practical guide to machine learning interatomic potentials – Status and future",
    authors: "R. Jacobs*, D. Morgan*, S. Attarian, J. Meng, C. Shen, Z. Wu, C. Y. Xie, J. H. Yang, N. Artrith, B. Blaiszik, G. Ceder, K. Choudhary, G. Csanyi, E. D. Cubuk, B. Deng, R. Drautz, X. Fu, J. Godwin, V. Honavar, O. Isayev, A. Johansson, B. Kozinsky, S. Martiniani, S. P. Ong, I. Poltavsky, K. Schmidt, S. Takamoto, A. P. Thompson, J. Westermayr, B. M. Wood",
    venue: "<i>Curr. Opin. Solid State Mater. Sci.</i> <b>35</b>, 101214",
    url: "https://www.sciencedirect.com/science/article/pii/S1359028625000014",
    img: "mlip-guide.png"
  },
  {
    year: 2025, topics: ["materials"],
    title: "Oxygen Dimerization-Driven Cation Migration Induces Voltage Hysteresis in Disordered Rocksalt Cathodes",
    authors: "B. Kim, P. Zhong, Y. Choi, S. Anand, H.-M. Hau, B. Deng, G. Ceder*",
    venue: "<i>J. Am. Chem. Soc.</i> <b>147</b>, 223–233",
    url: "https://doi.org/10.1021/jacs.4c09070",
    img: "oxygen-dimerization.png"
  },
  {
    year: 2025, selected: true, topics: ["mlip"],
    title: "Systematic softening in universal machine learning interatomic potentials",
    authors: "B. Deng, Y. Choi, P. Zhong, J. Riebesell, S. Anand, Z. Li, K. Jun, K. A. Persson, G. Ceder*",
    venue: "<i>npj Comput. Mater.</i> <b>11</b>, 9",
    url: "https://www.nature.com/articles/s41524-024-01500-6",
    img: "softening.jpg"
  },
  {
    year: 2024, topics: ["materials"],
    title: "Effect of Cation Disorder on Lithium Transport in Halide Superionic Conductors",
    authors: "P. Zhong, S. Gupta, B. Deng, K. Jun, G. Ceder*",
    venue: "<i>ACS Energy Lett.</i> <b>9</b>, 2775–2781",
    url: "https://pubs.acs.org/doi/10.1021/acsenergylett.4c00799",
    img: "halide-disorder.png"
  },
  {
    year: 2024, topics: ["materials"],
    title: "Inpainting crystal structure generations with score-based denoising",
    authors: "X. Dai‡, P. Zhong‡, B. Deng, Y. Chen, G. Ceder*",
    venue: "<i>ICML AI for Science Workshop</i>",
    url: "https://openreview.net/forum?id=T1mIt5exUF",
    img: "inpainting.png"
  },
  {
    year: 2024, topics: ["materials"],
    title: "Deep learning of experimental electrochemistry for battery cathodes across diverse compositions",
    authors: "P. Zhong, B. Deng, T. He, Z. Lun, G. Ceder*",
    venue: "<i>Joule</i> <b>8</b>, 1837–1854",
    url: "https://www.cell.com/joule/abstract/S2542-4351(24)00145-4",
    img: "echem-dl.png"
  },
  {
    year: 2023, selected: true, topics: ["mlip"],
    title: "CHGNet as a pretrained universal neural network potential for charge-informed atomistic modelling",
    authors: "B. Deng, P. Zhong*, K. Jun, J. Riebesell, K. Han, C. J. Bartel, G. Ceder*",
    venue: "<i>Nat. Mach. Intell.</i> <b>5</b>, 1031–1041",
    url: "https://www.nature.com/articles/s42256-023-00716-3",
    img: "chgnet.png",
    badge: "1,500+ citations"
  },
  {
    year: 2022, topics: ["agents"],
    title: "ULSA: unified language of synthesis actions for the representation of inorganic synthesis protocols",
    authors: "Z. Wang‡, K. Cruse‡, Y. Fei, A. Chia, Y. Zeng, H. Huo, T. He, B. Deng, O. Kononova*, G. Ceder*",
    venue: "<i>Digit. Discov.</i> <b>1</b>, 313–324",
    url: "https://pubs.rsc.org/en/content/articlelanding/2022/dd/d1dd00034a",
    img: "ulsa.png"
  },
  {
    year: 2020, topics: ["materials"],
    title: "Phonon softening near topological phase transitions",
    authors: "S. Yue‡, B. Deng‡, Y. Liu‡, Y. Quan, R. Yang, B. Liao*",
    venue: "<i>Phys. Rev. B</i> <b>102</b>, 235428",
    url: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.102.235428",
    img: "phonon-topological.png"
  },
  {
    year: 2020, topics: ["materials"],
    title: "Layer dependence of stacking order in nonencapsulated few-layer CrI₃",
    authors: "K. Guo, B. Deng, Z. Liu, C. Gao, Z. Shi, L. Bi, L. Zhang, H. Lu, P. Zhou, L. Zhang, Y. Cheng, B. Peng*",
    venue: "<i>Sci. China Mater.</i> <b>63</b>, 413–420",
    url: "https://link.springer.com/article/10.1007/s40843-019-1214-y",
    img: "cri3.png"
  },
  {
    year: 2019, topics: ["materials"],
    title: "Soft phonons and ultralow lattice thermal conductivity in the Dirac semimetal Cd₃As₂",
    authors: "S. Yue, H. T. Chorsi, M. Goyal, T. Schumann, R. Yang, T. Xu, B. Deng, S. Stemmer, J. A. Schuller, B. Liao*",
    venue: "<i>Phys. Rev. Research</i> <b>1</b>, 033101",
    url: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.1.033101",
    img: "dirac-phonons.png"
  }
];
