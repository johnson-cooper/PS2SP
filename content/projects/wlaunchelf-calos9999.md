---
name: wLaunchELF
slug: wlaunchelf-calos9999
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
  repository: calos9999/wLaunchELF
  repositoryId: '938142894'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-09-23T11:57:23Z'
latestRelease:
  tag: latest
  name: Latest development build
  publishedAt: '2025-09-23T11:57:24Z'
  url: 'https://github.com/calos9999/wLaunchELF/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-18T14:01:52.534Z'
automation:
  sync: true
  github:
    repoEtag: W/"a127a77119e8eb07e9f115c48dd32d0210cd3f54cdcd52f5a30f358818803951"
    releasesEtag: W/"53ce505abdb21ab8d0255e591351cd748cab262e96c312d9e4938a4f9a42785e"
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
