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
  lastSynchronized: '2026-11-03T21:01:36.828Z'
automation:
  sync: true
  github:
    repoEtag: W/"a24815ca6d8b9c6bab2e156e835edbfcb4e2e4c286368b464b0f6dad7cf6b2ab"
    releasesEtag: W/"d644f7e9ce7eac1ad6e4c437b3549b95bf8909840703aec2c4466abafce55907"
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
