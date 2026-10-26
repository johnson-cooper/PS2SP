---
name: wLaunchELF_ISR
slug: wlaunchelf-isr-fablecraze
summary: Stable fork of the most famous file browser for Playstation 2
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
homepage: 'https://israpps.github.io/projects/wlaunchelf-isr'
source:
  provider: github
  repository: FableCraze/wLaunchELF_ISR
  repositoryId: '1115443192'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-12-12T23:30:28Z'
latestRelease:
  tag: latest
  name: Latest automated build
  publishedAt: '2025-12-12T23:30:13Z'
  url: 'https://github.com/FableCraze/wLaunchELF_ISR/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-26T06:16:04.846Z'
automation:
  sync: true
  github:
    repoEtag: W/"514301f43b2b07e23fb59a42dfa3a8f22ffc570a262f92d535b3fb405fe3823b"
    releasesEtag: W/"3ffc8b584b8a0ba93ad19cd8e2bbd965b061feb54c7831cce4587c677fab8665"
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
  maturity: released-legacy
verified: false
featured: false
relationships:
  forkOf: israpps/wLaunchELF_ISR
  source: ps2homebrew/wLaunchELF
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
