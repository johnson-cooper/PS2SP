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
  lastSynchronized: '2026-11-18T14:01:54.719Z'
automation:
  sync: true
  github:
    repoEtag: W/"a984a06c390e6a12f891112b89d46ca5a87548e2b86bcf67ef0310524dfdc9ac"
    releasesEtag: W/"6fa5ff2b7c3ca75759e06022356167097bf1b9d7aa1f55024885cc867546072a"
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
