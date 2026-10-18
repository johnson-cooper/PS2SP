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
  lastSynchronized: '2026-10-18T14:35:28.252Z'
automation:
  sync: true
  github:
    repoEtag: W/"86a071a0dbbffba079d084cbae4c898e86120bfb1779398d6f9421684329dcd2"
    releasesEtag: W/"aecf6665abea0e7c1945d42075343119ec3ec2025be95b7fa4319b28b2cad340"
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
