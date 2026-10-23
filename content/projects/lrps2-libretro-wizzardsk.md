---
name: lrps2-libretro
slug: lrps2-libretro-wizzardsk
summary: LRPS2 libretro core with ARM support
categories:
  - emulators
  - ports
tags:
  - auto-discovered
  - pending-promoted
  - active-unreleased
  - fork
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: WizzardSK/lrps2-libretro
  repositoryId: '1279073191'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-23T08:48:35Z'
latestRelease:
  tag: lrps2-bisect
  name: LRPS2 bisect cores (Linux x86_64)
  publishedAt: '2026-09-19T19:11:30Z'
  url: 'https://github.com/WizzardSK/lrps2-libretro/releases/tag/lrps2-bisect'
activity:
  lastSynchronized: '2026-10-23T13:27:41.304Z'
automation:
  sync: true
  github:
    repoEtag: W/"a645b12a4a084016ef7fa715f276c13a8cd9faeadc793e3d27abe72cc1d83e18"
    releasesEtag: W/"50e70ac862d938062b2a1e1e707d4ac34dd745fe56d85bb834ab80ea5d06c96b"
discovery:
  method: 'fork-network:libretro/ps2'
  confidence: 95
  evidence:
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: libretro/ps2'
  maturity: released-active
verified: false
featured: false
relationships:
  forkOf: libretro/ps2
  source: libretro/ps2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
