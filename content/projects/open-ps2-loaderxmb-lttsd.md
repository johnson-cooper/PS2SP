---
name: Open-PS2-Loaderxmb
slug: open-ps2-loaderxmb-lttsd
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
  repository: lttsd/Open-PS2-Loaderxmb
  repositoryId: '1442281646'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-11-06T02:55:56Z'
latestRelease:
  tag: latest
  name: v1.2.0-Beta-2284-0092b6d
  publishedAt: '2026-11-06T02:55:58Z'
  url: 'https://github.com/lttsd/Open-PS2-Loaderxmb/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-17T13:27:43.220Z'
automation:
  sync: true
  github:
    repoEtag: W/"1502659a9f993e81149c5b5fc0b1cf174523cfad0f558d30b4a0bc8feb2def8f"
    releasesEtag: W/"c3e433a8685ff2144d870a3e5b383767344f60c2bf968dbc753a27551eef58c4"
discovery:
  method: 'incremental:ps2 in:name,description'
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
