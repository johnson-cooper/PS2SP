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
  lastCommit: '2026-11-11T07:31:28Z'
latestRelease:
  tag: lrps2-bisect
  name: LRPS2 bisect cores (Linux x86_64)
  publishedAt: '2026-09-19T19:11:30Z'
  url: 'https://github.com/WizzardSK/lrps2-libretro/releases/tag/lrps2-bisect'
activity:
  lastSynchronized: '2026-11-17T13:27:21.041Z'
automation:
  sync: true
  github:
    repoEtag: W/"851faf16f1629b6f8137b491af1161c9f14c71072503341059cce0b10a84428d"
    releasesEtag: W/"a53eeb0ca94f1e2e91d6bc240271a2c821436185fb77ceb94d5c3249693ea5ef"
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
