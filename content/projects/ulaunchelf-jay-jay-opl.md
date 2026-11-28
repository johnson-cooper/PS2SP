---
name: uLaunchELF
slug: ulaunchelf-jay-jay-opl
summary: >-
  Open-source file manager and ELF launcher for PlayStation 2 with support for
  memory cards, USB mass storage, internal HDD, and network access.
categories:
  - file-managers
  - launchers
tags:
  - wlaunchelf
  - ulaunchelf
  - elf
  - fork
  - auto-discovered
features:
  - usb
  - hdd
  - network
  - memory-card
authors: []
license: null
homepage: null
source:
  provider: github
  repository: Jay-Jay-OPL/uLaunchELF
  repositoryId: '95080087'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 1
  lastCommit: '2021-07-22T12:28:02Z'
latestRelease:
  tag: latest
  name: Latest development build
  publishedAt: '2021-07-22T12:28:02Z'
  url: 'https://github.com/Jay-Jay-OPL/uLaunchELF/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-28T02:02:51.113Z'
automation:
  sync: true
  github:
    repoEtag: W/"72805eeda45d61eef490fbe83b0901ea4c0f1ae827abf7703ef43ada81ef02a4"
    releasesEtag: W/"ca7965a2700b84aea0a4b5176686eed67ab2744331df7266c0dfaeec1f330f11"
discovery:
  method: 'fork-network:ps2homebrew/wLaunchELF'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/wLaunchELF'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: ps2homebrew/wLaunchELF
  source: ps2homebrew/wLaunchELF
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
