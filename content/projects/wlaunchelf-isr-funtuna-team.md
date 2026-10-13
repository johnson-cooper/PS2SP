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
  lastSynchronized: '2026-10-13T21:16:45.042Z'
automation:
  sync: true
  github:
    repoEtag: W/"55754a76c2ef32190113ed7c06d59aa97be38f120968d7450eed89e4397ce9dd"
    releasesEtag: W/"83cbfc15fba57c9e214884ae3c324b7b362a017a63af74f3717842cc0d647b7b"
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
