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
  lastSynchronized: '2026-11-28T10:30:25.627Z'
automation:
  sync: true
  github:
    repoEtag: W/"df7ce6cc1de528b7091dc8708a3778a8cf23d09cb30ff4e6343e772e3693b34d"
    releasesEtag: W/"130093e18ac46cdd4853784554ad38008f910904d1653e60b27093533b42627c"
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
