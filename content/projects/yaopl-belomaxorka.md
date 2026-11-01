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
  stars: 2
  forks: 0
  lastCommit: '2026-11-01T09:05:30Z'
latestRelease:
  tag: latest
  name: v2.0.0-nightly.191-6955d0b-yaopl
  publishedAt: '2026-11-01T09:27:11Z'
  url: 'https://github.com/yaopl/yaopl/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-01T19:42:26.100Z'
automation:
  sync: true
  github:
    repoEtag: W/"ba745141c5cc8d182d6a94f59406f2a3970c8dbaeab2b61bf7e4baa2d9f6a625"
    releasesEtag: W/"828daa2829d895395d3de6ca4b1f439aa0ff496113a7088b079c98e625d9400c"
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
