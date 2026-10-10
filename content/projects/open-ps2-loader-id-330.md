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
  lastSynchronized: '2026-10-10T13:42:33.146Z'
automation:
  sync: true
  github:
    repoEtag: W/"fc5fe9a30105ec1ca8a3435729377e14dd85a6e8bde7c19a49d72f648c5ff3b9"
    releasesEtag: W/"d83b4b0db0c2d1e40bbd49534072889e0c21559b0f2183b4e548e96b33ba29a8"
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
