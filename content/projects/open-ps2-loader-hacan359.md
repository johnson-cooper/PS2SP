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
  stars: 2
  forks: 1
  lastCommit: '2026-10-14T16:45:01Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-16T12:25:45.159Z'
automation:
  sync: true
  github:
    repoEtag: W/"0e17198ef08c5ad1761c8ff5bad7a4695ddc07f3bd5d7a9aca7123e99510ed6f"
    releasesEtag: '"745ad2352d1c2f5720beb2bb553763f403af0581e6483860649a95eb8a9126e4"'
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
