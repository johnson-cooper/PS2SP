---
name: wLaunchELF_ISR
slug: wlaunchelf-isr-milouk
summary: >-
  Mod of a stable wLaunchELF version with timestamp manipulation and text editor
  shortcuts.
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
  repository: milouk/wLaunchELF_ISR
  repositoryId: '456176406'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2022-02-06T15:14:05Z'
latestRelease:
  tag: latest
  name: Latest automated build
  publishedAt: '2022-02-06T15:14:06Z'
  url: 'https://github.com/milouk/wLaunchELF_ISR/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-06T00:50:35.620Z'
automation:
  sync: true
  github:
    repoEtag: W/"6fe7cb92f13468797488cff2c446ec5ed0158be7f47e575ffbd86eb3b7a7e4a5"
    releasesEtag: W/"0eec0de66c86d6f50e061d9db951833e1f175a0a5c77898a93e5ee48b0505ce2"
discovery:
  method: 'fork-network:israpps/wLaunchELF_ISR'
  confidence: 95
  evidence:
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
