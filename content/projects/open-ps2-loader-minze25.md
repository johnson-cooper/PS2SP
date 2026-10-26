---
name: Open-PS2-Loader
slug: open-ps2-loader-minze25
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
  repository: MinZe25/Open-PS2-Loader
  repositoryId: '993902556'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-06-03T21:41:07Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2025-06-03T21:41:08Z'
  url: 'https://github.com/MinZe25/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-26T19:20:50.256Z'
automation:
  sync: true
  github:
    repoEtag: W/"154aad23f038fea9343704e4a6ef5d2ff17bbd40021be19f46aa31f4e0248776"
    releasesEtag: W/"77d3fbd73a74c9114c5ae0f64ed06af6d44583dd99807a4e85257fa80a9dbdab"
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
