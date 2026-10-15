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
  lastSynchronized: '2026-10-15T04:39:34.131Z'
automation:
  sync: true
  github:
    repoEtag: W/"8ffa2309a06c15bc18bc90a7b80ade35e931940f072fd2de6b864f6d52c47e06"
    releasesEtag: W/"dd01b846fc0087c2b2370030ebcd2ec8b5a721662b702953345a4304c7aa2bb1"
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
