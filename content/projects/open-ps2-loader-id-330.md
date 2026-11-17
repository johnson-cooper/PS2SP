---
name: Open-PS2-Loader
slug: open-ps2-loader-id-330
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
  repository: id-330/Open-PS2-Loader
  repositoryId: '1079853623'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-10-20T16:05:35Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2025-10-20T16:05:37Z'
  url: 'https://github.com/id-330/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-17T13:27:37.211Z'
automation:
  sync: true
  github:
    repoEtag: W/"6f1e46be34a232b1f2a4ad47a53e9022540dff9765057408fe260679a83dd95f"
    releasesEtag: W/"5655246c37e57181881e02d34a560c5331141f233269ace5ac8e026eb3918a38"
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
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
