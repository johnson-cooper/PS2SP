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
homepage: null
source:
  provider: github
  repository: katsifolis/ico-pc
  repositoryId: '1412152621'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-09T16:37:36Z'
latestRelease:
  tag: ios-preview-1
  name: ICO iOS / LiveContainer preview
  publishedAt: '2026-10-09T16:37:36Z'
  url: 'https://github.com/katsifolis/ico-pc/releases/tag/ios-preview-1'
activity:
  lastSynchronized: '2026-10-09T21:17:32.469Z'
automation:
  sync: true
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
