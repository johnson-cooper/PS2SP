---
name: ico-pc
slug: ico-pc-kclough
summary: >-
  PC and Android port of the ICO (PS2) decompilation (nathanialf/ico): Windows,
  Linux, Steam Deck and Android (experimental). Contains no game data.
categories:
  - preservation
  - development
  - ports
  - games
tags:
  - auto-discovered
  - pending-promoted
  - released-active
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: KClough/ico-pc
  repositoryId: '1412346480'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-09T19:17:53Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-11T06:21:32.734Z'
automation:
  sync: true
  github:
    repoEtag: W/"c23b2980224bd43e38126c5049583bc4a1b70dc0f385b4d68caab9f504287ea0"
    releasesEtag: '"9c1d5d6c02bd03431bec9aa3b1b361ec1aa0f9e1da99d100fa686668ec8ecaad"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: nathanialf/ico-pc'
  maturity: active-wip
verified: false
featured: false
hidden: false
relationships:
  forkOf: nathanialf/ico-pc
  source: nathanialf/ico-pc
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
