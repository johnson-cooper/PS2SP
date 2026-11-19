---
name: wLaunchELF_ISR
slug: wlaunchelf-isr-bulatorr
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
  repository: bulatorr/wLaunchELF_ISR
  repositoryId: '979497858'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-05-31T19:33:34Z'
latestRelease:
  tag: latest
  name: Latest automated build
  publishedAt: '2025-05-07T16:02:46Z'
  url: 'https://github.com/bulatorr/wLaunchELF_ISR/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-19T13:09:24.770Z'
automation:
  sync: true
  github:
    repoEtag: W/"6ef8ee286026903363aa0c872a75141c2f2fdf4f3b552d7690b4d79059baa909"
    releasesEtag: W/"40c3901d78b1bda31d16900e4db2fdbe45edc783799a9f4eff49b16983d481ed"
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
