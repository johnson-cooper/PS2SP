---
name: wOPL
slug: wopl-dokishep
summary: The Continuation of Unofficial Open PS2 Loader by @Krahjohlito as wOPL!
categories:
  - loaders
tags:
  - opl
  - loader
  - homebrew
  - fork
  - auto-discovered
features:
  - usb
  - hdd
  - network
authors: []
license: AFL-3.0
homepage: 'https://www.psx-place.com/resources/poc-unofficial-open-ps2-loader-uopl.1523/'
source:
  provider: github
  repository: dokishep/wOPL
  repositoryId: '1376118828'
repository:
  archived: false
  defaultBranch: wOPL-base
  stars: 0
  forks: 0
  lastCommit: '2026-09-19T13:59:43Z'
latestRelease:
  tag: v1.1-387-invert-tt-20260919-135848-83-e3b9d16
  name: Double Unofficial OPL v1.1-387-invert-tt (20260919-135848 e3b9d16)
  publishedAt: '2026-09-19T13:59:43Z'
  url: >-
    https://github.com/dokishep/wOPL/releases/tag/v1.1-387-invert-tt-20260919-135848-83-e3b9d16
activity:
  lastSynchronized: '2026-10-29T20:20:01.459Z'
automation:
  sync: true
  github:
    repoEtag: W/"81ae0fbed4962ac80d8b5dbfd5a248096dcc3ff902b5c446a97f73cd3e713f0b"
    releasesEtag: W/"4a6e04f46558f322887b731ee65bd0822855e603c37d143edda183df8e0db439"
discovery:
  method: 'fork-network:ps2homebrew/wOPL'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/wOPL'
  maturity: released-active
verified: false
featured: false
relationships:
  forkOf: ps2homebrew/wOPL
  source: ps2homebrew/wOPL
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
