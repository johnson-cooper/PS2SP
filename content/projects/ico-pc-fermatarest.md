---
name: ico-pc
slug: ico-pc-fermatarest
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
  repository: FermataRest/ico-pc
  repositoryId: '1411875033'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-09T11:48:36Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-13T16:24:52.366Z'
automation:
  sync: true
  github:
    repoEtag: W/"68fb429da14a6d80751d677c373e3551999bc5f6eb0c0f5bb62fa5adc78c9074"
    releasesEtag: '"c860a5f2100fe46f5711e544746ea011128e29c67c3451c8240bf64027fba2bd"'
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
