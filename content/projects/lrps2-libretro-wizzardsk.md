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
  lastSynchronized: '2026-11-18T13:59:34.342Z'
automation:
  sync: true
  github:
    repoEtag: W/"228110654e504d15a2e06d9fe9416de9532c9e7e0403002e00fe66db5f1e1fd1"
    releasesEtag: W/"17d2faf46134ffc91b1fa064d0a95847b02abc72adb0e5da548c5024551efe95"
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
