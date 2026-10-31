---
name: Open-PS2-Loader
slug: open-ps2-loader-skylarplayz348
summary: Game and app loader for Sony PlayStation 2
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
homepage: null
source:
  provider: github
  repository: fuzzyghosty/Open-PS2-Loader
  repositoryId: '1015903920'
repository:
  archived: false
  defaultBranch: master
  stars: 2
  forks: 0
  lastCommit: '2026-10-13T17:39:13Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2026-10-13T17:39:15Z'
  url: 'https://github.com/fuzzyghosty/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-31T21:35:11.944Z'
automation:
  sync: true
  github:
    repoEtag: W/"bb7bf65d531a539071969f90ea166a48f22078930bf862af8782ecdaa886c698"
    releasesEtag: W/"edbd3dea06b41b679c1d2597db7844fe13ef4a82256c14ef6d043e218725eee0"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/Open-PS2-Loader'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
