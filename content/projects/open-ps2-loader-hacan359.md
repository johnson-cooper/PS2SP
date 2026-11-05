---
name: Open-PS2-Loader
slug: open-ps2-loader-hacan359
summary: >-
  Open PS2 Loader with a RetroAchievements agent, on branch ra: it hashes the
  game, reads console memory every frame and streams it to the xeRAbora PC
  client. The master branch mirrors ps2homebrew/Open-PS2-Loader.
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
  repository: hacan359/Open-PS2-Loader
  repositoryId: '1347525341'
repository:
  archived: false
  defaultBranch: ra
  stars: 4
  forks: 3
  lastCommit: '2026-10-19T17:21:52Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-05T12:22:05.755Z'
automation:
  sync: true
  github:
    repoEtag: W/"5c6a90ee79f8d84cb86ec00394fe101e20ce08237058a487aeec0ee6836ffa5b"
    releasesEtag: '"a265e13ba9964cb5149e04ac0bdf1bf82b2b42e69b35395c6e21fd78ae77d913"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - ps2-homebrew topic
    - PS2-specific topic
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/Open-PS2-Loader'
  maturity: active-unreleased
verified: false
featured: false
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
