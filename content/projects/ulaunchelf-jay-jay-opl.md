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
  lastSynchronized: '2026-10-09T02:11:22.955Z'
automation:
  sync: true
  github:
    repoEtag: W/"c099fbdba6e9d236fb4e7b2113c7a2b8d49df12f1497b007678d2eea4e3745d4"
    releasesEtag: W/"b2a2cacdbaf24bc9b3d3904b435ca900263756150c741fd4dd8095280a50bfbe"
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
