---
name: wLaunchELF_ISR
slug: wlaunchelf-isr-funtuna-team
summary: ELF loader and File browser for Sony PlayStation 2
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
  repository: FunTuna-Team/wLaunchELF_ISR
  repositoryId: '364995464'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2023-03-27T20:06:39Z'
latestRelease:
  tag: latest
  name: Latest automated build
  publishedAt: '2021-06-02T12:57:51Z'
  url: 'https://github.com/FunTuna-Team/wLaunchELF_ISR/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-31T21:36:29.765Z'
automation:
  sync: true
  github:
    repoEtag: W/"ebf60d519cdda9d6c8da3b8fdf77b9cc343bd3ff4090b5728b1f1dbcf418d2a7"
    releasesEtag: W/"1ea9d72e5f88c7147a24ce7ff9eef2233fb5fc6441e53435da8f21303206efee"
discovery:
  method: 'fork-network:israpps/wLaunchELF_ISR'
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
  forkOf: israpps/wLaunchELF_ISR
  source: ps2homebrew/wLaunchELF
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
