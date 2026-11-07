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
  lastSynchronized: '2026-11-07T10:11:48.480Z'
automation:
  sync: true
  github:
    repoEtag: W/"12328b00f442d1b23c8647be7f85029643a3f4a0a8d4bd08ae35400442a65462"
    releasesEtag: W/"bbdc43b830ba5d92c3eea087399782304bdeaf25cde2bbcab9f34b1b22b793bb"
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
