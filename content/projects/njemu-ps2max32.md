---
name: njemu
slug: njemu-ps2max32
summary: NJEMU port for the Playstation 2 using maxsdk
categories:
  - utilities
tags:
  - auto-discovered
  - pending-promoted
  - active-unreleased
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://fjtrujy.github.io/NJEMU/'
source:
  provider: github
  repository: ps2max32/njemu
  repositoryId: '1449106544'
repository:
  archived: false
  defaultBranch: ps2
  stars: 0
  forks: 0
  lastCommit: '2026-11-07T07:45:24Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-08T23:44:15.464Z'
automation:
  sync: true
  github:
    repoEtag: W/"f6d6a7964dab4f287e3c835c874263a4da4f20e732139adaadcdadcc4a6f413d"
    releasesEtag: '"4005231bffdbdb5a011efd68a7b178927da97ecc27946b720ce15f1d0a3adf03"'
discovery:
  method: 'incremental:ps2sdk in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: phoe-nix/NJEMU'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: fjtrujy/NJEMU
  source: phoe-nix/NJEMU
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
