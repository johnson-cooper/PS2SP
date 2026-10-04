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
  stars: 1
  forks: 1
  lastCommit: '2026-10-02T15:35:33Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-03T12:34:50.426Z'
automation:
  sync: true
  github:
    repoEtag: W/"1aea885ab4eee712da9595678ca9d45493fd7cc873ff536c75864a3c4ca91880"
    releasesEtag: '"8d1d976aff1bb620269f0933c9cf003b4bd5a290796ea6758cfb5e5b986766ba"'
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
