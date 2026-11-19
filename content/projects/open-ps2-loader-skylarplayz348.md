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
  lastSynchronized: '2026-11-19T21:35:37.407Z'
automation:
  sync: true
  github:
    repoEtag: W/"ed20555362b58dd1ff6f4a48cac3ce4c2622c25d2cfdfb49a769da0a549c8ad7"
    releasesEtag: W/"97bc8f57eedd83b53781757511d13b6d673326cf0059c0f5ef9fc1e10ce2ead9"
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
