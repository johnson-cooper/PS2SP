---
name: mymc_web
slug: mymc-web-warksmith
summary: Web interface to manage PCSX2 .ps2 memory card images
categories:
  - save-tools
  - host-tools
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: 'https://warksmith.github.io/mymc_web/'
source:
  provider: github
  repository: Warksmith/mymc_web
  repositoryId: '1447624235'
repository:
  archived: false
  defaultBranch: mcd-card-support
  stars: 0
  forks: 0
  lastCommit: '2026-11-06T05:14:41Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-13T07:58:52.860Z'
automation:
  sync: true
  github:
    repoEtag: W/"b01c28c5c33635b55a3a4fbb6214e3d8feb8f0b43e5f9bd482d5b724a2862bee"
    releasesEtag: '"ea309585b6b8442e7810a76617111cc17158ad521089cd847cf67a401c489fcb"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: BAD-AL/mymc_web'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: BAD-AL/mymc_web
  source: BAD-AL/mymc_web
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
