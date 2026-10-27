---
name: wLaunchELF
slug: wlaunchelf-uyjulian
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
  repository: uyjulian/wLaunchELF
  repositoryId: '69764809'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2026-10-13T04:09:34Z'
latestRelease:
  tag: latest
  name: Latest development build
  publishedAt: '2026-10-13T04:09:36Z'
  url: 'https://github.com/uyjulian/wLaunchELF/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-27T10:36:51.989Z'
automation:
  sync: true
  github:
    repoEtag: W/"a2b1b44291784efc829b51e9585f18781c3987ef0c06b471219a2ebe4efc44db"
    releasesEtag: W/"5795fcadd2e3182fd81d3d4d4b06afe836c2f96b31e1aa09905fbf6cec3a8f5b"
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
