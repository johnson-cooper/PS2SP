---
name: celosia
slug: celosia
summary: >-
  Shadow of the Colossus (PS2) native port for the R36S handheld (aarch64) —
  static recompilation, SDL2+KMSDRM+GLES. Contributions go to 'main'; 'r36s' is
  the port's working branch.
categories:
  - preservation
  - development
  - ports
tags:
  - auto-discovered
  - pending-promoted
  - active-unreleased
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://github.com/amarqs182/celosia/blob/main/docs/R36S_PORT.md'
source:
  provider: github
  repository: amarqs182/celosia
  repositoryId: '1451443527'
  url: 'https://github.com/amarqs182/celosia'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 1
  lastCommit: '2026-11-19T12:57:22Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastChecked: '2026-11-10T01:45:54.437Z'
  lastSynchronized: '2026-11-19T13:07:00.530Z'
automation:
  sync: true
  github:
    repoEtag: W/"94c303e0ccde02bb85863f470de7e077ea06c2d62310dfe77e3fe0a92a508233"
    releasesEtag: '"c0c458a23f97f1899cefc645c39e8be3a82be231c97070fce8b3880bc5f8fe53"'
discovery:
  method: 'pending-promotion:incremental:ps2 in:name,description'
  confidence: 80
  evidence:
    - PS2-specific topic
    - repository description explicitly identifies PS2
    - GitHub fork of another repository
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: HenryKun55/celosia
  source: HenryKun55/celosia
---
Automatically promoted from PS2SP's discovery review queue because it met the public catalog threshold. This entry is not yet human-verified; upstream repository and release metadata will continue to synchronize automatically.
