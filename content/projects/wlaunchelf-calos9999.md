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
  lastSynchronized: '2026-11-17T13:29:03.134Z'
automation:
  sync: true
  github:
    repoEtag: W/"bc93fc1f55532086b0f694411b841f5834eaaa911969d62b556a3f338d7b8b8c"
    releasesEtag: W/"5768b08787588d1b389b8ee4246544e097ccbdfa392cdaf2e463097f7784aaa9"
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
