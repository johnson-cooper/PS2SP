---
name: Open-PS2-Loader
slug: open-ps2-loader-skylarplayz348
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
homepage: null
source:
  provider: github
  repository: fuzzyghosty/Open-PS2-Loader
  repositoryId: '1015903920'
repository:
  archived: false
  defaultBranch: master
  stars: 2
  forks: 0
  lastCommit: '2026-10-13T17:39:13Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2026-10-13T17:39:15Z'
  url: 'https://github.com/fuzzyghosty/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-15T21:50:35.224Z'
automation:
  sync: true
  github:
    repoEtag: W/"1f0c7f90e9bd412156d20debe954e9dc3db26cf609dd18df547d01f606a9c362"
    releasesEtag: W/"7058ce8d0a5b655c5c13c1ade23814a15df1a98d4c5a63af40e0d2da8e976ee3"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
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
