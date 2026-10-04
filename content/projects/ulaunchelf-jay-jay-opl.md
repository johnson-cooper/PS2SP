---
name: uLaunchELF
slug: ulaunchelf-jay-jay-opl
summary: File browser for ps2
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
  repository: Jay-Jay-OPL/uLaunchELF
  repositoryId: '95080087'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 1
  lastCommit: '2021-07-22T12:28:02Z'
latestRelease:
  tag: latest
  name: Latest development build
  publishedAt: '2021-07-22T12:28:02Z'
  url: 'https://github.com/Jay-Jay-OPL/uLaunchELF/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-04T02:40:40.355Z'
automation:
  sync: true
  github:
    repoEtag: W/"cfdef1f9a601c8d7d44eabd3d65ca039b997290399724f060d0dc04dd5dae94e"
    releasesEtag: W/"8e92c713ac8a72718ea93238a2f69d06a8b32af41a93a9203c0737e16f55dd8d"
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
