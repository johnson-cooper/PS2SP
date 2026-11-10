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
  lastSynchronized: '2026-11-10T01:32:50.840Z'
automation:
  sync: true
  github:
    repoEtag: W/"9dab2bd5ded09f9454f9fdbec8b3b5c6598b499393c620d9529a4f847284a007"
    releasesEtag: W/"9b4a1b640683233f7fd746f2f5b488b56041194ef3dee03ba64331776cdc3ac9"
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
