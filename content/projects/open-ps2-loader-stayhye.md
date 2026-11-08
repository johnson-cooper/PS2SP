---
name: Open-PS2-Loader
slug: open-ps2-loader-stayhye
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
  repository: Stayhye/Open-PS2-Loader
  repositoryId: '923724326'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-03-06T05:24:55Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2025-03-06T05:24:55Z'
  url: 'https://github.com/Stayhye/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-08T15:13:57.692Z'
automation:
  sync: true
  github:
    repoEtag: W/"4873e58e99ed153cf36b5f59b040b84781476066c0180ba5d678daafbb4f5e6f"
    releasesEtag: W/"069f1be04de116823ac879fb6f11181b320ec3a904de1767d45e0cf66578e427"
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
