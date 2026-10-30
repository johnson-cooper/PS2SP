---
name: yaopl
slug: yaopl-belomaxorka
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
  repository: yaopl/yaopl
  repositoryId: '1429972457'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2026-10-30T18:33:35Z'
latestRelease:
  tag: latest
  name: v2.0.0-nightly.176-b8fd533-yaopl
  publishedAt: '2026-10-30T18:33:36Z'
  url: 'https://github.com/yaopl/yaopl/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-30T19:24:50.510Z'
automation:
  sync: true
  github:
    repoEtag: W/"2d3661c0edb02f88c43282389da805380c9f97e5d2a58fcb5c34fa8e5e8cb262"
    releasesEtag: W/"82f2d7baea15d50eb7f37c5637fd9996841f69b8bed3749ea28f1fab49641829"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository description explicitly identifies PS2
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/Open-PS2-Loader'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
