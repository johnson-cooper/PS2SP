---
name: Open-PS2-Loader
slug: open-ps2-loader-pelmenc
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
  repository: Pelmenc/Open-PS2-Loader
  repositoryId: '399725182'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-06-26T08:38:06Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2026-06-26T08:38:07Z'
  url: 'https://github.com/Pelmenc/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-15T01:56:57.893Z'
automation:
  sync: true
  github:
    repoEtag: W/"f0d28b7b2829914576cb901626552743107cee7e15b1521bb2068cb319cce8d3"
    releasesEtag: W/"d0a6f1e42e18c2a7495a8e90a0d780e964d784f7148a91cd8f318bb8ee6a51a7"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
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
