---
name: ico-pc
slug: ico-pc-hookmanuk
summary: >-
  PC VR port of the ICO (PS2) decompilation (nathanialf/ico): Windows. Contains
  no game data.
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
  repository: hookmanuk/ico-pc
  repositoryId: '1454455464'
repository:
  archived: false
  defaultBranch: main
  stars: 1
  forks: 0
  lastCommit: '2026-11-12T17:28:58Z'
latestRelease:
  tag: v0.11.4-vr-0.1
  name: ICO VR v0.11.4-vr-0.1
  publishedAt: '2026-11-12T17:30:11Z'
  url: 'https://github.com/hookmanuk/ico-pc/releases/tag/v0.11.4-vr-0.1'
activity:
  lastSynchronized: '2026-11-19T13:07:21.760Z'
automation:
  sync: true
  github:
    repoEtag: W/"9de8c7bc6f429f296a2d34d22b1830fac579ebebb9cb2fe2f4a2f4d60eb253d2"
    releasesEtag: W/"5fc7bb3584f6e3a6c817ec4fd28bac4146fc5c3c4226628c1615d0cf5ddae371"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: nathanialf/ico-pc'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: nathanialf/ico-pc
  source: nathanialf/ico-pc
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
