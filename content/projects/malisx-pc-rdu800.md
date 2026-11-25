---
name: malisx-pc
slug: malisx-pc-rdu800
summary: >-
  Vulkan driver on and for Mali v7, on the stock kbase kernel driver, built for
  the Pc winaltor mali plus emulator. This may work on other devices. they are
  not tested, only bifrost architecture is tested. 
categories:
  - drivers
  - emulators
tags:
  - auto-discovered
  - pending-promoted
  - prerelease-only
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: RDU800/Ani-driver-fork-of-malisx-
  repositoryId: '1457406040'
repository:
  archived: false
  defaultBranch: main
  stars: 1
  forks: 0
  lastCommit: '2026-11-20T01:47:33Z'
latestRelease:
  tag: ani-driver-build-5-run32
  name: ani-driver build 5
  publishedAt: '2026-11-18T06:48:04Z'
  url: >-
    https://github.com/RDU800/Ani-driver-fork-of-malisx-/releases/tag/ani-driver-build-5-run32
activity:
  lastSynchronized: '2026-11-25T22:33:38.618Z'
automation:
  sync: true
  github:
    repoEtag: W/"4c9bda3f8efb7cbf7046cef6c22d16f72dc24c47659393780481a2d3c9b28953"
    releasesEtag: W/"325498e7e1e20e4676e90bda4e0df24bb8df3cd5a3fd36a9a2b42f61158b3114"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 95
  evidence:
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: bmdhacks/malisx2'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: bmdhacks/malisx2
  source: bmdhacks/malisx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
