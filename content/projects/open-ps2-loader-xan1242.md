---
name: Open-PS2-Loader
slug: open-ps2-loader-xan1242
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
  repository: xan1242/Open-PS2-Loader
  repositoryId: '936967302'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-04-06T13:58:58Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2026-04-06T13:58:59Z'
  url: 'https://github.com/xan1242/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-18T18:06:11.627Z'
automation:
  sync: true
  github:
    repoEtag: W/"3d0a7dbf02c880bb7e9a8b91e55f8efadd6c32bf2b5f7db09ad7882aa4bda501"
    releasesEtag: W/"6ebab3a2b1244a9f2d6487a31b84fa9d835c422a7f154fc999b8cc7ed6b2839f"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
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
