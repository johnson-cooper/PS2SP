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
  repository: RDU800/malisx-pc
  repositoryId: '1457406040'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-14T06:04:43Z'
latestRelease:
  tag: build-3
  name: malisx-pc build 3
  publishedAt: '2026-11-14T06:04:43Z'
  url: 'https://github.com/RDU800/malisx-pc/releases/tag/build-3'
activity:
  lastSynchronized: '2026-11-14T07:02:10.381Z'
automation:
  sync: true
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
