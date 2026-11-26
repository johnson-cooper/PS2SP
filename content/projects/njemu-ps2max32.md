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
  lastCommit: '2026-11-26T20:09:13Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-26T23:54:49.354Z'
automation:
  sync: true
  github:
    repoEtag: W/"e2f4ebda2c5d22f7e9ee1635675338c4de474f965b7f1e6389308444bf9c86cc"
    releasesEtag: '"38251304133231cd81a0aff9f6f46a1ed6d7bdf0b0fe929f842024adff31e335"'
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
