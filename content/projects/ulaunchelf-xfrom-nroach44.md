---
name: uLaunchELF_XFROM
slug: ulaunchelf-xfrom-nroach44
summary: WIP - uLaunchELF with PSX XFROM support
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
  repository: nroach44/uLaunchELF_XFROM
  repositoryId: '723260418'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2023-11-25T05:34:51Z'
latestRelease:
  tag: latest
  name: Testing
  publishedAt: '2023-11-25T05:28:17Z'
  url: 'https://github.com/nroach44/uLaunchELF_XFROM/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-05T12:23:41.655Z'
automation:
  sync: true
  github:
    repoEtag: W/"e7693100b77fa1ae11993ca8645d0c9ce73a250cf266807c5640f095ffe08a05"
    releasesEtag: W/"7e05d2d9859e3e264d1f7421b640f45d96212af3c40354e9cb494a3f1cf8acdd"
discovery:
  method: 'fork-network:xfwcfw/uLaunchELF'
  confidence: 95
  evidence:
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/wLaunchELF'
  maturity: released-legacy
verified: false
featured: false
hidden: false
relationships:
  forkOf: xfwcfw/uLaunchELF
  source: ps2homebrew/wLaunchELF
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
