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
  repository: RDU800/Ani-driver
  repositoryId: '1457406040'
repository:
  archived: false
  defaultBranch: main
  stars: 1
  forks: 0
  lastCommit: '2026-11-17T01:23:58Z'
latestRelease:
  tag: ani-driver-build-4-run31
  name: ani-driver build 4
  publishedAt: '2026-11-17T01:23:58Z'
  url: 'https://github.com/RDU800/Ani-driver/releases/tag/ani-driver-build-4-run31'
activity:
  lastSynchronized: '2026-11-17T22:25:06.853Z'
automation:
  sync: true
  github:
    repoEtag: W/"eb548e4a1ccc6298fd85965348ffbd7aa6c0117514c83a81e9d10bc8a2ae67c9"
    releasesEtag: W/"df0443dcc3bb15f2cc1ebe293de421e2aeb6a0c9ba44e962875c82507dd514f8"
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
