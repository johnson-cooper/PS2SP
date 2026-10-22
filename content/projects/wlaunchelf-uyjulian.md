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
  lastSynchronized: '2026-10-22T10:12:59.250Z'
automation:
  sync: true
  github:
    repoEtag: W/"ad7224ca637488c9d5dc0166dc6d02c241e7fc032a0b792dc6644011975fafff"
    releasesEtag: W/"cef021559ff8443691707db9cbd541467af18b045ceee73d3c3485c388d5bef6"
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
