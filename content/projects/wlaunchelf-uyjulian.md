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
  lastSynchronized: '2026-10-21T10:10:46.328Z'
automation:
  sync: true
  github:
    repoEtag: W/"1e885e00cc382898c089dd6c5b5e730fc001b9090d9d6e8a728b51143161efbf"
    releasesEtag: W/"82856725d66d33c04b3a2fd413fa4b56d847436efafda1ee1fc7b3d19120c72c"
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
