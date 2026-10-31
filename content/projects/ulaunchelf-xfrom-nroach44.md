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
  lastSynchronized: '2026-10-31T12:31:32.833Z'
automation:
  sync: true
  github:
    repoEtag: W/"03c59ee3a7b553238163cd7df26888719b5495e4538cb5774d759df802519b21"
    releasesEtag: W/"a5f397c9deff1a5b29d8266496e2b439a269cabebab1afda33144827175ba471"
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
