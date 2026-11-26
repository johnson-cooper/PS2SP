---
name: yaopl
slug: yaopl-viktortestmetrstandart
summary: >-
  YAOPL — Yet Another Open PS2 Loader: a fork of Open PS2 Loader (OPL) that
  continues its development. Game and app loader for PlayStation 2.
categories:
  - loaders
tags:
  - opl
  - hdloader
  - homebrew
  - fork
  - auto-discovered
features:
  - usb
  - hdd
  - network
  - mx4sio
authors: []
license: AFL-3.0
homepage: 'https://yaopl.github.io/yaopl/'
source:
  provider: github
  repository: viktortestmetrstandart/yaopl
  repositoryId: '1458859345'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-11-19T05:25:14Z'
latestRelease:
  tag: latest
  name: v2.0.0-nightly.313-2d74b8e-yaopl
  publishedAt: '2026-11-19T05:25:15Z'
  url: 'https://github.com/viktortestmetrstandart/yaopl/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-26T05:07:09.915Z'
automation:
  sync: true
  github:
    repoEtag: W/"b94d5d0b5b1fe13c99b3de3773ec3afa526a9884589150a7be5255fd62bc7dec"
    releasesEtag: W/"612bc1b51c29257a5cc60266026424ebabde022c2a5edbef8c8b63be80e418fa"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/Open-PS2-Loader'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: yaopl/yaopl
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
