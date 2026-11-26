---
name: Open-PS2-Loader
slug: open-ps2-loader-belek666
summary: PlayStation 2 software project discovered by PS2SP.
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
  repository: belek666/Open-PS2-Loader
  repositoryId: '80111610'
repository:
  archived: false
  defaultBranch: master
  stars: 5
  forks: 3
  lastCommit: '2020-10-23T18:12:05Z'
latestRelease:
  tag: latest
  name: Latest development builds
  publishedAt: '2020-10-22T17:34:46Z'
  url: 'https://github.com/belek666/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-26T05:05:17.600Z'
automation:
  sync: true
  github:
    repoEtag: W/"11d4aeeb70390eb2ca9b23b535d46cb18f5cd0234cbab6574b77e71326dd655b"
    releasesEtag: W/"80c255f5d747f483d54b8c3f82d6d5b3e137c298db9224b76743e7acce7807ee"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
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
