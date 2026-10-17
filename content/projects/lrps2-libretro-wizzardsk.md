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
  lastCommit: '2026-09-19T20:08:42Z'
latestRelease:
  tag: lrps2-bisect
  name: LRPS2 bisect cores (Linux x86_64)
  publishedAt: '2026-09-19T19:11:30Z'
  url: 'https://github.com/WizzardSK/lrps2-libretro/releases/tag/lrps2-bisect'
activity:
  lastSynchronized: '2026-10-17T13:44:10.755Z'
automation:
  sync: true
  github:
    repoEtag: W/"8f4e900ef606be738b3653d5896fa65c6883966ebbfb393d0d00ec16467ea628"
    releasesEtag: W/"d07920af1c10cae868f01dce50e85598ee9f90bed168ecf2ef6f3870d21e8744"
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
