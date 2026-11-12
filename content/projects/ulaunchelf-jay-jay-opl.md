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
  lastSynchronized: '2026-11-12T03:01:40.747Z'
automation:
  sync: true
  github:
    repoEtag: W/"242d1a3a2caf66a5b157dd8f8d7642a4cb3ae48ed7836bbcf38516c8b8f7c2cb"
    releasesEtag: W/"a8e5beb29b8d37c735d42c8f264f4b50ca52e049326e95278d2513633f259ce3"
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
