---
name: ps2recomp-yugioh-capsule-monster-coliseum
slug: ps2recomp-yugioh-capsule-monster-coliseum-jonaslouras
summary: >-
  WIP PC port of Yu-Gi-Oh! Capsule Monster Coliseum (PS2, PAL) via PS2Recomp
  static recompilation. Boots + menus work, ~47/60 fps. Help wanted: speed (GPU
  backend/VU1), play-testing, audio, widescreen. No game data included.
categories:
  - preservation
  - development
tags:
  - auto-discovered
  - pending-promoted
  - prerelease-only
  - fork
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: jonaslouras/ps2recomp-yugioh-capsule-monster-coliseum
  repositoryId: '1437103027'
repository:
  archived: false
  defaultBranch: cmc-port
  stars: 0
  forks: 0
  lastCommit: '2026-10-28T13:10:17Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-14T03:17:12.051Z'
automation:
  sync: true
  github:
    repoEtag: W/"12f4f027cb54558ef7ceb5b7920cffca5d0aea4ae80ca043cafcc821b611fbef"
    releasesEtag: '"da75f3c1438a29a4ff9b17b9d2405560409358ebfa56c09e1268291275d476c8"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository description explicitly identifies PS2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ran-j/PS2Recomp'
  maturity: active-wip
verified: false
featured: false
hidden: false
relationships:
  forkOf: ran-j/PS2Recomp
  source: ran-j/PS2Recomp
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
