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
  lastSynchronized: '2026-10-17T13:45:11.884Z'
automation:
  sync: true
  github:
    repoEtag: W/"d2c57d7a7c89b0eeed3102aa15bfcc4d890c75eb6f07f1293cc3e9eca6885c27"
    releasesEtag: W/"337e2a48539089ff6e1dededc58bd54afd4fd6ddcd68e0f04b5dcf034266966f"
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
