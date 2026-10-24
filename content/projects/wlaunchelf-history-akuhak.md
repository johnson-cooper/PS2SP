---
name: wLaunchELF-history
slug: wlaunchelf-history-akuhak
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
  repository: AKuHAK/wLaunchELF-history
  repositoryId: '285811009'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2022-11-06T17:48:43Z'
latestRelease:
  tag: latest
  name: Latest development build
  publishedAt: '2022-08-14T19:10:32Z'
  url: 'https://github.com/AKuHAK/wLaunchELF-history/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-24T11:01:56.050Z'
automation:
  sync: true
  github:
    repoEtag: W/"8aadbb79767eb30b9e71c8518adf45cc9ab4c220d9ca3a20a00951ff2617203e"
    releasesEtag: W/"790fe3618e83aaebcdc27ad0d91fe872ed982e7cef88b8b6813c8b5856f0688a"
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
