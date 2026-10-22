---
name: ico-pc
slug: ico-pc-katsifolis
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
homepage: 'https://github.com/katsifolis/ico-ios/releases/latest'
source:
  provider: github
  repository: katsifolis/ico-ios
  repositoryId: '1412152621'
repository:
  archived: false
  defaultBranch: ios
  stars: 0
  forks: 0
  lastCommit: '2026-10-13T16:38:42Z'
latestRelease:
  tag: v0.5.2
  name: v0.5.2 — iOS
  publishedAt: '2026-10-10T09:35:04Z'
  url: 'https://github.com/katsifolis/ico-ios/releases/tag/v0.5.2'
activity:
  lastSynchronized: '2026-10-22T04:46:25.919Z'
automation:
  sync: true
  github:
    repoEtag: W/"862baf1a5b7a7d5f78c68537ecf1c5f6e3d5c58424ddd1569c145760ab04248e"
    releasesEtag: W/"01ebb988807bdd7c7c56d4fcfb7210fca7b6d317f9d550c7d7ab49f2fb1a0b8c"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: nathanialf/ico-pc'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: nathanialf/ico-pc
  source: nathanialf/ico-pc
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
