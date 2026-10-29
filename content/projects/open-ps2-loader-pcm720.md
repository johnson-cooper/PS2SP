---
name: Open-PS2-Loader
slug: open-ps2-loader-pcm720
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
homepage: 'https://ps2homebrew.github.io/Open-PS2-Loader/'
source:
  provider: github
  repository: pcm720/Open-PS2-Loader
  repositoryId: '936838428'
repository:
  archived: false
  defaultBranch: master
  stars: 2
  forks: 0
  lastCommit: '2025-02-21T20:50:49Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2025-02-21T20:50:50Z'
  url: 'https://github.com/pcm720/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-29T14:21:27.749Z'
automation:
  sync: true
  github:
    repoEtag: W/"353b80ed0609ab91923d9a69bd7f1a2676f5efce0f80907f9b9b01a4600d6404"
    releasesEtag: W/"0b986f43785ad8b0087fbe26bf0fecb96e4e642d96f25c1fd4019062575f0ddf"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
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
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
