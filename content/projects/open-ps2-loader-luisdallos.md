---
name: Open-PS2-Loader
slug: open-ps2-loader-luisdallos
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
  repository: luisdallos/Open-PS2-Loader
  repositoryId: '212773090'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2020-08-23T01:40:29Z'
latestRelease:
  tag: latest
  name: Latest development builds
  publishedAt: '2020-08-23T01:40:30Z'
  url: 'https://github.com/luisdallos/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-27T19:00:41.417Z'
automation:
  sync: true
  github:
    repoEtag: W/"1215a1d1b1972422926e352053b13393cc792ef215f0f6f890faa6e47142041d"
    releasesEtag: W/"8f7bca0699338f2f8f8954adafb7dbcf1cdd1c8ae7c11660f9bc11dab42f07a6"
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
