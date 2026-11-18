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
  lastCommit: '2026-11-09T19:17:16Z'
latestRelease:
  tag: v0.5.2
  name: v0.5.2 — iOS
  publishedAt: '2026-10-10T09:35:04Z'
  url: 'https://github.com/katsifolis/ico-ios/releases/tag/v0.5.2'
activity:
  lastSynchronized: '2026-11-18T04:22:02.518Z'
automation:
  sync: true
  github:
    repoEtag: W/"4a4a1b66440b4c7ac8ae5b6be20a81a6e892428559427219c83482d5b768b76b"
    releasesEtag: W/"7f412e92d4df98ccf56156e9137b02dfabd7b2c0b14e7f7e8d4871c4f94d86fb"
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
