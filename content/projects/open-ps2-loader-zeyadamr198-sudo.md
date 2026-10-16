---
name: Open-PS2-Loader
slug: open-ps2-loader-zeyadamr198-sudo
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
  repository: zeyadamr198-sudo/Open-PS2-Loader
  repositoryId: '1149799534'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-02-04T15:04:54Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2026-02-04T15:04:55Z'
  url: 'https://github.com/zeyadamr198-sudo/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-16T01:21:28.544Z'
automation:
  sync: true
  github:
    repoEtag: W/"df36bdf0e9cfd4931f2da28bbb32e2db6f7d35c64c3f556c4d3dc5694d3e44cc"
    releasesEtag: W/"810c874a961aeb90bc14342b99b292c1cee5249eeea444222ecf584d37fbcd51"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
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
